'use client'

import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
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
        <FontAwesomeIcon 
          icon={resolvedTheme === 'dark' ? faSun : faMoon} 
          style={{ fontSize: '1.25em' }} 
        />
        <span className="label">{resolvedTheme === 'dark' ? 'Light' : 'Dark'} Mode</span>
      </button>
    </li>
  )
}
