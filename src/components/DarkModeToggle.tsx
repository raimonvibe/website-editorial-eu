'use client'

import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

export default function DarkModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const handleToggle = () => {
    if (theme === 'system') {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    } else {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }
  }

  return (
    <li>
      <button
        onClick={handleToggle}
        className="icon transition-colors duration-200 hover:text-[#f56a6a] !border-0 !outline-0 !bg-transparent"
        aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
        title={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
        style={{ border: 'none !important', outline: 'none !important', background: 'transparent !important', borderColor: 'transparent !important' }}
      >
        <i className={`fas ${resolvedTheme === 'dark' ? 'fa-sun' : 'fa-moon'}`} style={{ fontSize: '1.25em' }}></i>
        <span className="label">{resolvedTheme === 'dark' ? 'Light' : 'Dark'} Mode</span>
      </button>
    </li>
  )
}
