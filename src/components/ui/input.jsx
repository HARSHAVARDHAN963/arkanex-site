import React from 'react'

export const Input = React.forwardRef(function Input({ className='', ...props }, ref){
  return <input ref={ref} className={`h-10 w-full rounded-md border bg-slate-900 px-3 text-sm outline-none focus:ring-2 focus:ring-cyan-600 ${className}`} {...props} />
})
