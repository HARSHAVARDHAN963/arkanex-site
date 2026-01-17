import React from 'react'
import clsx from '@/lib/clsx'

export function Button({ className = '', variant = 'default', size = 'default', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  const variants = {
    default: 'bg-cyan-500 text-slate-900 hover:bg-cyan-400 focus:ring-cyan-600 focus:ring-offset-slate-900',
    outline: 'border border-cyan-500 text-cyan-300 hover:bg-cyan-500/10 focus:ring-cyan-600 focus:ring-offset-slate-900',
    ghost: 'text-cyan-300 hover:bg-cyan-500/10 focus:ring-cyan-600 focus:ring-offset-slate-900'
  }
  const sizes = {
    default: 'h-14 px-4 py-2',
    sm: 'h-12 px-3'
  }
  return <button className={clsx(base, variants[variant], sizes[size], className)} {...props} />
}
