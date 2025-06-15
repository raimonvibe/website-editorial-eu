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
  }, [isInactive]);

  const closeSidebar = useCallback(() => {
    setIsInactive(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('sidebar');
      const target = event.target as Node;
      
      if (sidebar && !sidebar.contains(target) && !isInactive) {
        setIsInactive(true);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !isInactive) {
        setIsInactive(true);
      }
    };

    if (!isInactive) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isInactive]);

  return {
    isInactive,
    toggleSidebar,
    closeSidebar
  };
};
