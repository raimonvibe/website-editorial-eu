'use client'

import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

export default function PositionedDarkModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const handleToggle = () => {
    if (theme === 'system') {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    } else {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }
  }

  return (
    <button
      id="dark-mode-toggle"
      onClick={handleToggle}
      className="dark-mode-toggle-btn"
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <i className={`fas ${resolvedTheme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
    </button>
  )
}
