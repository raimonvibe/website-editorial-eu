'use client'

import { useEffect } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export default function ThemeClientSync() {
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const html = document.documentElement
    html.classList.remove('light', 'dark')
    html.classList.add(resolvedTheme)
  }, [resolvedTheme])

  return null
}
