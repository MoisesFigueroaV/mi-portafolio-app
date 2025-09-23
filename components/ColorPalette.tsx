'use client'

// Array de los colores y sus valores para mostrarlos
const colors = [
  { name: '--background', value: 'oklch(1 0 0)' },
  { name: '--foreground', value: 'oklch(0.145 0 0)' },
  { name: '--card', value: 'oklch(1 0 0)' },
  { name: '--card-foreground', value: 'oklch(0.145 0 0)' },
  { name: '--popover', value: 'oklch(1 0 0)' },
  { name: '--popover-foreground', value: 'oklch(0.145 0 0)' },
  { name: '--primary', value: 'oklch(0.205 0 0)' },
  { name: '--primary-foreground', value: 'oklch(0.985 0 0)' },
  { name: '--secondary', value: 'oklch(0.97 0 0)' },
  { name: '--secondary-foreground', value: 'oklch(0.205 0 0)' },
  { name: '--muted', value: 'oklch(0.97 0 0)' },
];

export default function ColorPalette() {
  return (
    <div className="fixed bottom-4 left-4 z-50 hidden lg:flex flex-col gap-2 rounded-none border border-white/10 bg-black/30 p-3 font-mono text-xs text-white/60 backdrop-blur-sm">
      {colors.map((color) => (
        <div key={color.name} className="flex items-center gap-3">
          <div
            className="h-4 w-4 flex-shrink-0 border border-white/20"
            style={{ backgroundColor: `var(${color.name})` }}
          />
          <span>
            {color.name}: {color.value};
          </span>
        </div>
      ))}
    </div>
  );
}