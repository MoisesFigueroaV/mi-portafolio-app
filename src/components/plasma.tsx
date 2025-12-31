"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Renderer, Program, Mesh, Triangle } from "ogl"

interface PlasmaProps {
  color?: string
  speed?: number
  direction?: "forward" | "reverse" | "pingpong"
  scale?: number
  opacity?: number
  mouseInteractive?: boolean
}

const hexToRgb = (hex: string): [number, number, number] => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return [1, 0.5, 0.2]
  return [
    Number.parseInt(result[1], 16) / 255,
    Number.parseInt(result[2], 16) / 255,
    Number.parseInt(result[3], 16) / 255,
  ]
}

const vertex = `#version 300 es
precision highp float;
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`

// Shader optimizado para mejor rendimiento y visibilidad en móvil
const fragment = `#version 300 es
precision mediump float;
uniform vec2 iResolution;
uniform float iTime;
uniform vec3 uCustomColor;
uniform float uUseCustomColor;
uniform float uSpeed;
uniform float uDirection;
uniform float uScale;
uniform float uOpacity;
uniform vec2 uMouse;
uniform float uMouseInteractive;
out vec4 fragColor;

void mainImage(out vec4 o, vec2 C) {
  vec2 center = iResolution.xy * 0.5;
  C = (C - center) / uScale + center;
  
  vec2 mouseOffset = (uMouse - center) * 0.0001;
  C += mouseOffset * length(C - center) * step(0.5, uMouseInteractive);
  
  float i, d, z, T = iTime * uSpeed * uDirection;
  vec3 O, p, S;

  // Optimizado para móvil (balance rendimiento/visibilidad)
  for (vec2 r = iResolution.xy, Q; ++i < 18.; O += o.w/d*o.xyz) {
    p = z*normalize(vec3(C-.5*r,r.y)); 
    p.z -= 4.; 
    S = p;
    d = p.y-T;
    
    p.x += .35*(1.+p.y)*sin(d + p.x*0.09)*cos(.32*d + p.x*0.045); 
    Q = p.xz *= mat2(cos(p.y+vec4(0,11,33,0)-T)); 
    z+= d = abs(sqrt(length(Q*Q)) - .22*(4.2+S.y))/2.3+7e-4; 
    o = 1.2+sin(S.y+p.z*.45+S.z-length(S-p)+vec4(2,1,0,7));
  }
  
  o.xyz = tanh(O/9e3);
}

bool finite1(float x){ return !(isnan(x) || isinf(x)); }
vec3 sanitize(vec3 c){
  return vec3(
    finite1(c.r) ? c.r : 0.0,
    finite1(c.g) ? c.g : 0.0,
    finite1(c.b) ? c.b : 0.0
  );
}

void main() {
  vec4 o = vec4(0.0);
  mainImage(o, gl_FragCoord.xy);
  vec3 rgb = sanitize(o.rgb);
  
  float intensity = (rgb.r + rgb.g + rgb.b) / 3.0;
  vec3 customColor = intensity * uCustomColor;
  vec3 finalColor = mix(rgb, customColor, step(0.5, uUseCustomColor));
  
  float alpha = length(rgb) * uOpacity;
  fragColor = vec4(finalColor, alpha);
}`

export const Plasma: React.FC<PlasmaProps> = ({
  color = "#ffffff",
  speed = 1,
  direction = "forward",
  scale = 1,
  opacity = 1,
  mouseInteractive = true,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const mountedRef = useRef(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    mountedRef.current = true
    const container = containerRef.current

    const useCustomColor = color ? 1.0 : 0.0
    const customColorRgb = color ? hexToRgb(color) : [1, 1, 1]

    const directionMultiplier = direction === "reverse" ? -1.0 : 1.0

    // Configuración optimizada (revertida a segura)
    const isMobile = typeof window !== "undefined" ? window.innerWidth < 768 : false
    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.0 : 1.5)

    let renderer: Renderer | null = null
    let canvas: HTMLCanvasElement | null = null
    let program: Program | null = null
    let mesh: Mesh | null = null

    try {
      renderer = new Renderer({
        webgl: 2,
        alpha: true,
        antialias: false,
        dpr: dpr,
        // Eliminado depth/stencil: false por problemas de visibilidad
      })

      const gl = renderer.gl
      canvas = gl.canvas as HTMLCanvasElement
      canvas.style.display = "block"
      canvas.style.width = "100%"
      canvas.style.height = "100%"
      canvas.style.position = "absolute"
      canvas.style.top = "0"
      canvas.style.left = "0"

      if (container && mountedRef.current) {
        container.appendChild(canvas)
      }

      const geometry = new Triangle(gl)

      program = new Program(gl, {
        vertex: vertex,
        fragment: fragment,
        uniforms: {
          iTime: { value: 0 },
          iResolution: { value: new Float32Array([1, 1]) },
          uCustomColor: { value: new Float32Array(customColorRgb) },
          uUseCustomColor: { value: useCustomColor },
          uSpeed: { value: speed * 0.35 },
          uDirection: { value: directionMultiplier },
          uScale: { value: scale },
          uOpacity: { value: opacity },
          uMouse: { value: new Float32Array([0, 0]) },
          uMouseInteractive: { value: mouseInteractive ? 1.0 : 0.0 },
        },
      })

      mesh = new Mesh(gl, { geometry, program })

      // Mouse movement optimizado
      let mouseTimeout: NodeJS.Timeout
      const handleMouseMove = (e: MouseEvent) => {
        if (!mouseInteractive || !container || !mountedRef.current) return
        clearTimeout(mouseTimeout)
        mouseTimeout = setTimeout(() => {
          if (!container || !mountedRef.current) return
          try {
            const rect = container.getBoundingClientRect()
            mousePos.current.x = e.clientX - rect.left
            mousePos.current.y = e.clientY - rect.top
            if (program?.uniforms.uMouse) {
              const mouseUniform = program.uniforms.uMouse.value as Float32Array
              mouseUniform[0] = mousePos.current.x
              mouseUniform[1] = mousePos.current.y
            }
          } catch (error) {
            console.warn("Mouse move error:", error)
          }
        }, 16)
      }

      const setSize = () => {
        if (!container || !mountedRef.current || !renderer || !program) return

        try {
          const rect = container.getBoundingClientRect()
          if (rect.width === 0 || rect.height === 0) return

          // Asegurar que el efecto de plasma siempre cubra el 100% del contenedor
          const width = Math.max(1, Math.floor(rect.width))
          const height = Math.max(1, Math.floor(rect.height))

          renderer.setSize(width, height)

          if (program.uniforms.iResolution) {
            const res = program.uniforms.iResolution.value as Float32Array
            res[0] = renderer.gl.drawingBufferWidth
            res[1] = renderer.gl.drawingBufferHeight
          }
        } catch (error) {
          console.warn("Resize error:", error)
        }
      }

      // Initial size setup
      setSize()

      const ro = new ResizeObserver(() => {
        if (mountedRef.current) {
          setSize()
        }
      })

      if (container && mountedRef.current) {
        ro.observe(container)
        if (mouseInteractive) {
          container.addEventListener("mousemove", handleMouseMove, { passive: true })
        }
      }

      let raf = 0
      let lastTime = 0
      const targetFPS = isMobile ? 30 : 60 // 30fps en móvil para batería
      const frameInterval = 1000 / targetFPS
      const t0 = performance.now()

      const loop = (t: number) => {
        if (!mountedRef.current || !renderer || !mesh || !program) {
          return
        }

        if (t - lastTime < frameInterval) {
          raf = requestAnimationFrame(loop)
          return
        }
        lastTime = t

        const timeValue = (t - t0) * 0.001

        try {
          if (direction === "pingpong" && program.uniforms.uDirection) {
            const cycle = Math.sin(timeValue * 0.4) * directionMultiplier
            program.uniforms.uDirection.value = cycle
          }

          if (program.uniforms.iTime) {
            program.uniforms.iTime.value = timeValue
          }

          renderer.render({ scene: mesh })
        } catch (error) {
          console.warn("Render error:", error)
        }

        if (mountedRef.current) {
          raf = requestAnimationFrame(loop)
        }
      }

      raf = requestAnimationFrame(loop)
      setIsReady(true)

      return () => {
        mountedRef.current = false
        cancelAnimationFrame(raf)
        clearTimeout(mouseTimeout)

        try {
          ro.disconnect()

          if (mouseInteractive && container) {
            container.removeEventListener("mousemove", handleMouseMove)
          }

          if (canvas && container && container.contains(canvas)) {
            container.removeChild(canvas)
          }
        } catch (error) {
          console.warn("Cleanup error:", error)
        }
      }
    } catch (error) {
      console.error("Plasma initialization error:", error)
      mountedRef.current = false
    }
  }, [color, speed, direction, scale, opacity, mouseInteractive])

  return (
    <div
      ref={containerRef}
      className={`w-full h-full relative overflow-hidden transition-opacity duration-1000 ${isReady ? "opacity-100" : "opacity-0"
        }`}
    />
  )
}

export default Plasma
