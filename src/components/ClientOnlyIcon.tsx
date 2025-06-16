'use client';
import React from 'react'
import dynamic from 'next/dynamic'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

const FontAwesomeIcon = dynamic(
  () => import('@fortawesome/react-fontawesome').then(mod => mod.FontAwesomeIcon),
  { 
    ssr: false,
    loading: () => <span style={{ display: 'inline-block', width: '1em', height: '1em' }}></span>
  }
)

interface ClientOnlyIconProps {
  icon: IconDefinition
  className?: string
  style?: React.CSSProperties
  'aria-label'?: string
}

export default function ClientOnlyIcon({ icon, className, style, 'aria-label': ariaLabel }: ClientOnlyIconProps) {
  return <FontAwesomeIcon icon={icon} className={className} style={style} aria-label={ariaLabel} />
}
