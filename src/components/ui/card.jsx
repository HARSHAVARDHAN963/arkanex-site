import React from 'react'

export function Card({ className = '', children, ...props }) {
  return (
    <div className={`rounded-xl border border-slate-800 bg-slate-900/60 ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ className = '', children, ...props }) {
  return <div className={`p-6 pb-0 ${className}`} {...props}>{children}</div>
}

export function CardContent({ className = '', children, ...props }) {
  return <div className={`p-6 ${className}`} {...props}>{children}</div>
}

export function CardTitle({ className = '', children, ...props }) {
  return <h3 className={`text-lg font-semibold ${className}`} {...props}>{children}</h3>
}

export function CardDescription({ className = '', children, ...props }) {
  return <p className={`text-sm text-slate-400 ${className}`} {...props}>{children}</p>
}
