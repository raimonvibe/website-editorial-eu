'use client';
import { useState, useEffect } from 'react';

const breakpoints = {
  xlarge: { min: 1281, max: 1680 },
  large: { min: 981, max: 1280 },
  medium: { min: 737, max: 980 },
  small: { min: 481, max: 736 },
  xsmall: { min: 361, max: 480 },
  xxsmall: { min: 0, max: 360 }
};

export const useBreakpoints = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<string>('');
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      
      for (const [name, { min, max }] of Object.entries(breakpoints) as [string, {min: number, max: number}][]) {
        if (width >= min && width <= max) {
          setCurrentBreakpoint(name);
          break;
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isActive = (query: string): boolean => {
    if (query.startsWith('<=')) {
      const bp = query.slice(2);
      return windowWidth <= (breakpoints[bp as keyof typeof breakpoints]?.max || 0);
    }
    if (query.startsWith('>')) {
      const bp = query.slice(1);
      return windowWidth > (breakpoints[bp as keyof typeof breakpoints]?.max || 0);
    }
    return currentBreakpoint === query;
  };

  return { currentBreakpoint, windowWidth, isActive };
};
