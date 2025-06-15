'use client'

import React from 'react'
import { useTheme } from '@/contexts/ThemeContext'

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
        className="icon transition-colors duration-200 hover:text-[#f56a6a]"
        aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
        title={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
      >
        <i className={`fas ${resolvedTheme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
        <span className="label">{resolvedTheme === 'dark' ? 'Light' : 'Dark'} Mode</span>
      </button>
    </li>
  )
}
