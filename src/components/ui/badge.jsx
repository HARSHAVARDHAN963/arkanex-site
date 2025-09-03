import React from 'react'

export function Badge({ children, className = '', variant = 'default', ...props }) {
  const base = 'inline-flex items-center rounded-md px-2 py-1 text-xs border'
  const variants = {
    default: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/40',
    secondary: 'bg-slate-800 text-slate-200 border-slate-700',
  }
  return <span className={`${base} ${variants[variant] || variants.default} ${className}`} {...props}>{children}</span>
}
