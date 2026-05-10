'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function BannerSpline() {
  const [canUseSpline, setCanUseSpline] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [timedOut, setTimedOut] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = document.createElement('canvas')
    const hasWebGL =
      !!window.WebGLRenderingContext &&
      (!!canvas.getContext('webgl') || !!canvas.getContext('experimental-webgl'))

    if (hasWebGL) {
      setCanUseSpline(true)
      timeoutRef.current = window.setTimeout(() => {
        setTimedOut(true)
        setLoaded(false)
      }, 7000)
    }

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleLoad = () => {
    if (!timedOut) {
      setLoaded(true)
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }

  return (
    <div className={`banner-spline-wrap${loaded ? ' is-loaded' : ''}`}>
      <Image
        src="/images/pic12.jpg"
        alt="Keyboard setup preview"
        width={1200}
        height={900}
        className="banner-spline-fallback"
        priority
      />
      {canUseSpline && !timedOut ? (
        <iframe
          className="banner-spline-iframe"
          src="https://my.spline.design/codekeyboardcopy-aMxuXO4XkCKZ7y2JN08hBnL9/"
          title="Interactive keyboard 3D scene"
          loading="lazy"
          allowFullScreen
          onLoad={handleLoad}
        />
      ) : null}
    </div>
  )
}
