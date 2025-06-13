'use client';
import React from 'react'
import Link from 'next/link'
import { useSidebar } from '../hooks/useSidebar'
import { useBreakpoints } from '../hooks/useBreakpoints'
import SidebarProjects from './SidebarProjects'

export default function Sidebar() {
  const { isInactive, toggleSidebar } = useSidebar();
  const { isActive } = useBreakpoints();

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (isActive('<=large')) {
      const href = event.currentTarget.getAttribute('href');
      if (href && href !== '#' && href !== '') {
        setTimeout(() => {
          window.location.href = href;
        }, 500);
      }
    }
  };

  const handleSidebarClick = (event: React.MouseEvent) => {
    if (isActive('<=large')) {
      event.stopPropagation();
    }
  };

  return (
    <div 
      id="sidebar" 
      className={isInactive ? 'inactive' : ''}
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
            <li><Link href="/" onClick={handleLinkClick}>Homepage</Link></li>
            <li><Link href="/services" onClick={handleLinkClick}>Services</Link></li>
            <li><Link href="/certificates" onClick={handleLinkClick}>Certificates</Link></li>
            <li>
              <span className="opener">More..</span>
              <ul>
                <li><Link href="/about" onClick={handleLinkClick}>About me</Link></li>
                <li><Link href="/opportunities" onClick={handleLinkClick}>Opportunities</Link></li>
                <li><Link href="/clients" onClick={handleLinkClick}>Clients</Link></li>
                <li><Link href="/models" onClick={handleLinkClick}>3D Models</Link></li>
                <li><Link href="/projects" onClick={handleLinkClick}>Projects</Link></li>
              </ul>
            </li>
            <li><Link href="/resume" onClick={handleLinkClick}>Resume</Link></li>
            <li><Link href="/contact" onClick={handleLinkClick}>Contact</Link></li>
            <li>
              <span className="opener">My projects</span>
              <ul>
                <li><a href="https://skills-hub.raimonvibe.com/" target="_blank">SkillsHub</a></li>
                <li><a href="https://code-review.raimonvibe.com/" target="_blank">Code Review</a></li>
                <li><a href="https://www.physics-calculator.raimonvibe.com/" target="_blank">Velocity Calculator</a></li>
                <li><a href="https://www.physics-flashcards.raimonvibe.com/" target="_blank">Physics Flascards</a></li>
                <li><a href="https://retro-monitor.raimonvibe.com/" target="_blank">Retro Monitor</a></li>
                <li><a href="https://animalguesses.raimonvibe.com/" target="_blank">Animal Guesses</a></li>
                <li><a href="https://www.emf-simulator.raimonvibe.com/" target="_blank">EMF-Simulator</a></li>
                <li><a href="https://tetris2.0.raimonvibe.com/" target="_blank">Tetris 2.0</a></li>
                <li><a href="https://periodic-table.raimonvibe.com/" target="_blank">The Periodic Table</a></li>
                <li><a href="https://inventory-pro.raimonvibe.com/" target="_blank">Inventory Pro</a></li>
                <li><a href="https://google-login-edu.raimonvibe.com/" target="_blank">Google Login EDU</a></li>
              </ul>
            </li>
            <li><Link href="/legalnotice" onClick={handleLinkClick}>Legalnotice</Link></li>
            <li><Link href="/privacynotice" onClick={handleLinkClick}>Privacynotice</Link></li>
          </ul>
        </nav>

        <SidebarProjects />
      </div>

      <a 
        href="#sidebar" 
        className="toggle"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleSidebar();
        }}
      >
        <span className="sr-only">Toggle Menu</span>
      </a>
    </div>
  )
}
