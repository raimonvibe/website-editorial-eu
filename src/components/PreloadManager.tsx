'use client';

import { useEffect } from 'react';

export default function PreloadManager() {
  useEffect(() => {
    document.body.classList.add('is-preload');
    
    const timer = setTimeout(() => {
      document.body.classList.remove('is-preload');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
