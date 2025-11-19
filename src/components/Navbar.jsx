import { useEffect, useState } from 'react'
import { Menu, Sun, Moon } from 'lucide-react'

function ThemeToggle({ className = '' }) {
  const [theme, setTheme] = useState('system')

  useEffect(() => {
    // Initialize from localStorage or system
    const stored = localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored)
      applyTheme(stored)
    } else {
      setTheme('system')
      applyTheme('system')
    }
  }, [])

  const applyTheme = (next) => {
    const root = document.documentElement
    if (next === 'dark') {
      root.classList.add('dark')
    } else if (next === 'light') {
      root.classList.remove('dark')
    } else {
      // system
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (prefersDark) root.classList.add('dark')
      else root.classList.remove('dark')
    }
  }

  const cycleTheme = () => {
    const order = ['system', 'light', 'dark']
    const next = order[(order.indexOf(theme) + 1) % order.length]
    setTheme(next)
    if (next === 'system') localStorage.removeItem('theme')
    else localStorage.setItem('theme', next)
    applyTheme(next)
  }

  const Icon = theme === 'dark' ? Moon : Sun
  const label = theme.charAt(0).toUpperCase() + theme.slice(1)

  return (
    <button
      onClick={cycleTheme}
      className={`inline-flex items-center gap-2 px-3 py-2 rounded-full border border-pink-500/30 text-pink-600 dark:text-pink-300 hover:bg-pink-500/10 transition ${className}`}
      title={`Theme: ${label}`}
      aria-label={`Switch theme (current: ${label})`}
    >
      <Icon size={18} />
      <span className="text-sm hidden sm:inline">{label}</span>
    </button>
  )
}

export default function Navbar() {
  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-pink-500 bg-gradient-to-br from-pink-400 to-pink-600 shadow-lg shadow-pink-500/30 ring-1 ring-white/10 flex items-center justify-center text-white font-bold">IT</div>
          <div className="leading-tight">
            <p className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">PinkTech Services</p>
            <p className="text-xs text-slate-600 dark:text-slate-300/80">Modern IT solutions</p>
          </div>
        </a>
        <div className="flex items-center gap-3">
          <nav className="hidden md:flex items-center gap-6 text-slate-700 dark:text-slate-300">
            <a href="#services" className="hover:text-pink-600 dark:hover:text-pink-400">Services</a>
            <a href="#why" className="hover:text-pink-600 dark:hover:text-pink-400">Why us</a>
            <a href="#contact" className="hover:text-pink-600 dark:hover:text-pink-400">Contact</a>
          </nav>
          <ThemeToggle />
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-700 dark:text-slate-200">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
