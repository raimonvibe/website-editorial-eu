'use client';
import { useState, useEffect, useCallback } from 'react';
import { useBreakpoints } from './useBreakpoints';

export const useSidebar = () => {
  const [isInactive, setIsInactive] = useState(true);
  const { isActive } = useBreakpoints();

  useEffect(() => {
    if (isActive('>large')) {
      setIsInactive(false);
    } else {
      setIsInactive(true);
    }
  }, [isActive]);

  const toggleSidebar = useCallback(() => {
    setIsInactive(prev => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 1280) {
      setIsInactive(true);
    }
  }, []);

  useEffect(() => {
    const handleBodyClick = (event: Event) => {
      if (typeof window === 'undefined' || window.innerWidth > 1280) return;
      
      const sidebar = document.getElementById('sidebar');
      const target = event.target as Element;
      
      if (sidebar && !sidebar.contains(target) && !isInactive) {
        setIsInactive(true);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !isInactive && typeof window !== 'undefined' && window.innerWidth <= 1280) {
        setIsInactive(true);
      }
    };

    if (!isInactive) {
      document.body.addEventListener('click', handleBodyClick);
      document.body.addEventListener('touchend', handleBodyClick);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.body.removeEventListener('click', handleBodyClick);
      document.body.removeEventListener('touchend', handleBodyClick);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isInactive]);

  return {
    isInactive,
    toggleSidebar,
    closeSidebar
  };
};
