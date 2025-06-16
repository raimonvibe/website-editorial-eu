'use client'

import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
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
      <FontAwesomeIcon icon={resolvedTheme === 'dark' ? faSun : faMoon} />
    </button>
  )
}
