'use client';
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '../contexts/ThemeContext'

import SidebarProjects from './SidebarProjects'

export default function Sidebar() {
  const { resolvedTheme } = useTheme()
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set());
  const [sidebarActive, setSidebarActive] = useState(false);


  const handleToggleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setSidebarActive(!sidebarActive);
  };





  const handleSidebarClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const handleDropdownToggle = (dropdownName: string) => {
    setOpenDropdowns((prev: Set<string>) => {
      const newSet = new Set(prev);
      if (newSet.has(dropdownName)) {
        newSet.delete(dropdownName);
      } else {
        newSet.add(dropdownName);
      }
      return newSet;
    });
  };









  return (
    <div 
      id="sidebar" 
      className={sidebarActive ? "" : "inactive"}
      onClick={handleSidebarClick}
    >
      <div className="inner">
        <section id="search" className="alt">
          <form method="post" action="#">
            <input type="text" name="query" id="query" placeholder="Search" />
          </form>
        </section>

        <nav id="menu">
          <header className="major">
            <h2>Menu</h2>
          </header>
          <ul>
            <li><Link href="/">Homepage</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/certificates">Certificates</Link></li>
            <li>
              <span 
                className={`opener ${openDropdowns.has('more') ? 'active' : ''}`}
                onClick={() => handleDropdownToggle('more')}
                style={{ cursor: 'pointer' }}
              >
                More..
              </span>
              <ul>
                <li><Link href="/about">About me</Link></li>
                <li><Link href="/opportunities">Opportunities</Link></li>
                <li><Link href="/clients">Clients</Link></li>
                <li><Link href="/models">3D Models</Link></li>
                <li><Link href="/projects">Projects</Link></li>
              </ul>
            </li>
            <li><Link href="/resume">Resume</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li>
              <span 
                className={`opener ${openDropdowns.has('projects') ? 'active' : ''}`}
                onClick={() => handleDropdownToggle('projects')}
                style={{ cursor: 'pointer' }}
              >
                My projects
              </span>
              <ul>
                <li><a href="https://skills-hub.raimonvibe.com/" target="_blank" rel="noopener noreferrer">SkillsHub</a></li>
                <li><a href="https://code-review.raimonvibe.com/" target="_blank" rel="noopener noreferrer">Code Review</a></li>
                <li><a href="https://www.physics-calculator.raimonvibe.com/" target="_blank" rel="noopener noreferrer">Velocity Calculator</a></li>
                <li><a href="https://www.physics-flashcards.raimonvibe.com/" target="_blank" rel="noopener noreferrer">Physics Flascards</a></li>
                <li><a href="https://retro-monitor.raimonvibe.com/" target="_blank" rel="noopener noreferrer">Retro Monitor</a></li>
                <li><a href="https://animalguesses.raimonvibe.com/" target="_blank" rel="noopener noreferrer">Animal Guesses</a></li>
                <li><a href="https://www.emf-simulator.raimonvibe.com/" target="_blank" rel="noopener noreferrer">EMF-Simulator</a></li>
                <li><a href="https://tetris2.0.raimonvibe.com/" target="_blank" rel="noopener noreferrer">Tetris 2.0</a></li>
                <li><a href="https://periodic-table.raimonvibe.com/" target="_blank" rel="noopener noreferrer">The Periodic Table</a></li>
                <li><a href="https://inventory-pro.raimonvibe.com/" target="_blank" rel="noopener noreferrer">Inventory Pro</a></li>
                <li><a href="https://google-login-edu.raimonvibe.com/" target="_blank" rel="noopener noreferrer">Google Login EDU</a></li>
              </ul>
            </li>
            <li><Link href="/legalnotice">Legalnotice</Link></li>
            <li><Link href="/privacynotice">Privacynotice</Link></li>
          </ul>
        </nav>

        <SidebarProjects />
      </div>
      
      <button 
        className="toggle" 
        onClick={handleToggleClick}
        aria-label="Toggle sidebar menu"
        type="button"
      >
        <FontAwesomeIcon icon={faBars} style={{ fontSize: '2rem', display: 'inline-block' }} />
      </button>
    </div>
  )
}
