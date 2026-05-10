'use client';
import { useState, useCallback } from 'react';

export const useSidebar = () => {
  const [isInactive, setIsInactive] = useState(true);

  const toggleSidebar = useCallback(() => {
    setIsInactive((prev: boolean) => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsInactive(true);
  }, []);

  return {
    isInactive,
    toggleSidebar,
    closeSidebar
  };
};
