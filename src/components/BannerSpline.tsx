'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function BannerSpline() {
  const [loaded, setLoaded] = useState(false)

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
      <iframe
        className="banner-spline-iframe"
        src="https://my.spline.design/codekeyboardcopy-aMxuXO4XkCKZ7y2JN08hBnL9/"
        title="Interactive keyboard 3D scene"
        loading="lazy"
        allowFullScreen
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}
