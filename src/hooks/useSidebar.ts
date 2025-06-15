'use client';
import { useState, useEffect, useCallback } from 'react';
import { useBreakpoints } from './useBreakpoints';

export const useSidebar = () => {
  const [isInactive, setIsInactive] = useState(true);
  const { isActive } = useBreakpoints();

  useEffect(() => {
    const $ = require('jquery');
    const $sidebar = $('#sidebar');
    const $body = $('body');

    if (isActive('>large')) {
      $sidebar.removeClass('inactive');
      setIsInactive(false);
    } else {
      $sidebar.addClass('inactive');
      setIsInactive(true);
    }

    const handleToggleClick = (event: any) => {
      event.preventDefault();
      event.stopPropagation();
      console.log('jQuery toggle clicked');
      $sidebar.toggleClass('inactive');
    };

    const handleBodyClick = (event: any) => {
      if (isActive('<=large')) {
        $sidebar.addClass('inactive');
      }
    };

    const handleSidebarClick = (event: any) => {
      if (isActive('<=large')) {
        event.stopPropagation();
      }
    };

    $sidebar.find('.toggle').off('click').on('click', handleToggleClick);
    $body.off('click.sidebar').on('click.sidebar', handleBodyClick);
    $sidebar.off('click.sidebar').on('click.sidebar', handleSidebarClick);

    return () => {
      $sidebar.find('.toggle').off('click');
      $body.off('click.sidebar');
      $sidebar.off('click.sidebar');
    };
  }, [isActive]);

  const toggleSidebar = useCallback(() => {
    const $ = require('jquery');
    const $sidebar = $('#sidebar');
    $sidebar.toggleClass('inactive');
  }, []);

  const closeSidebar = useCallback(() => {
    const $ = require('jquery');
    const $sidebar = $('#sidebar');
    $sidebar.addClass('inactive');
  }, []);

  return {
    isInactive,
    toggleSidebar,
    closeSidebar
  };
};
