'use client';
import { useState, useEffect, useCallback } from 'react';
import { useBreakpoints } from './useBreakpoints';

export const useSidebar = () => {
  const [isInactive, setIsInactive] = useState(false);
  const { isActive } = useBreakpoints();

  useEffect(() => {
    if (isActive('<=large')) {
      setIsInactive(true);
    } else {
      setIsInactive(false);
    }
  }, [isActive]);

  const toggleSidebar = useCallback(() => {
    setIsInactive(prev => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsInactive(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!isActive('<=large')) return;
      
      const sidebar = document.getElementById('sidebar');
      const target = event.target as Node;
      
      if (sidebar && !sidebar.contains(target)) {
        setIsInactive(true);
      }
    };

    if (!isInactive) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('touchend', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchend', handleClickOutside);
    };
  }, [isInactive, isActive]);

  return {
    isInactive,
    toggleSidebar,
    closeSidebar
  };
};
