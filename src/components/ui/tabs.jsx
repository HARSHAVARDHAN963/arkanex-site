import React, { createContext, useContext } from 'react'

const TabsCtx = createContext(null)

export function Tabs({ value, onValueChange, children, className='' }) {
  return <TabsCtx.Provider value={{ value, onValueChange }}><div className={className}>{children}</div></TabsCtx.Provider>
}

export function TabsList({ children, className='' }) {
  return <div className={`inline-flex gap-1 rounded-md p-1 ${className}`}>{children}</div>
}

export function TabsTrigger({ value, children, className='' }) {
  const ctx = useContext(TabsCtx)
  const active = ctx?.value === value
  return (
    <button
      onClick={() => ctx?.onValueChange?.(value)}
      className={`px-3 py-1.5 text-sm rounded-md border transition ${active ? 'bg-cyan-600 text-slate-900 border-cyan-600' : 'text-slate-300 border-slate-700 hover:bg-slate-800' } ${className}`}
    >
      {children}
    </button>
  )
}

export function TabsContent({ value, children, className='' }) {
  const ctx = useContext(TabsCtx)
  if (ctx?.value !== value) return null
  return <div className={className}>{children}</div>
}
