"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function SmokeBackground() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="absolute inset-0 overflow-hidden bg-black">
            {/* Blob 1 - Humo Principal (Más visible) */}
            <motion.div
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, -50, 100, 0],
                    scale: [1, 1.2, 0.9, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -top-[10%] left-[20%] h-[50vh] w-[50vh] rounded-full bg-slate-300/40 blur-[100px]"
            />

            {/* Blob 2 - Humo Secundario (Más visible) */}
            <motion.div
                animate={{
                    x: [0, -70, 30, 0],
                    y: [0, 60, -40, 0],
                    scale: [1, 1.1, 0.95, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                className="absolute top-[20%] -right-[10%] h-[60vh] w-[60vh] rounded-full bg-slate-400/40 blur-[100px]"
            />

            {/* Blob 3 - Reflejo de luz (Muy visible) */}
            <motion.div
                animate={{
                    x: [0, 50, -50, 0],
                    y: [0, 30, -30, 0],
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5,
                }}
                className="absolute bottom-[10%] left-[10%] h-[40vh] w-[40vh] rounded-full bg-white/20 blur-[90px]"
            />

            {/* (Textura de ruido eliminada para evitar 404) */}
        </div>
    )
}
