'use client';
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from '../contexts/ThemeContext'

import SidebarProjects from './SidebarProjects'

export default function Sidebar() {
  const { resolvedTheme } = useTheme()
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set());

  useEffect(() => {
    const $ = require('jquery');
    const $sidebar = $('#sidebar');
    
    if ($sidebar.find('.toggle').length === 0) {
      $('<a href="#sidebar" class="toggle">Toggle</a>')
        .appendTo($sidebar)
        .on('click', function(event: any) {
          event.preventDefault();
          event.stopPropagation();
          $sidebar.toggleClass('inactive');
        });
    }
  }, []);




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
      className="inactive"
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
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/scripture-readers">Scripture Readers</Link></li>
            <li><Link href="/nigeria">Nigeria</Link></li>
            <li>
              <span
                className={`opener ${openDropdowns.has('links') ? 'active' : ''}`}
                onClick={() => handleDropdownToggle('links')}
                style={{ cursor: 'pointer' }}
              >
                Open a site
              </span>
              <ul>
                <li><a href="https://amsterdammetro.nl/" target="_blank" rel="noopener noreferrer">Amsterdam Metro Live</a></li>
                <li><a href="https://play.google.com/store/apps/details?id=com.raimonvibe.wonders" target="_blank" rel="noopener noreferrer">Wonders and Hope</a></li>
                <li><a href="https://play.google.com/store/apps/details?id=com.raimonvibe.beautiful_words" target="_blank" rel="noopener noreferrer">Gloss: Beautiful Words</a></li>
                <li><a href="https://aramaic.eu/" target="_blank" rel="noopener noreferrer">AramiGo</a></li>
                <li><a href="https://courses-free-with-certificate.vercel.app/" target="_blank" rel="noopener noreferrer">Free Courses with Certificates</a></li>
                <li><a href="https://www.elevenup.eu/" target="_blank" rel="noopener noreferrer">ElevenUp</a></li>
                <li><a href="https://www.change-my.com/" target="_blank" rel="noopener noreferrer">Change-My Image Converter</a></li>
                <li><a href="https://digital-marketing-ten-snowy.vercel.app/en" target="_blank" rel="noopener noreferrer">Digital Marketing &amp; E-commerce</a></li>
                <li><a href="https://taskflow-frontend-a4e8.onrender.com/" target="_blank" rel="noopener noreferrer">TaskFlow</a></li>
                <li><a href="https://play.google.com/store/apps/details?id=com.raimonvibe.animalguesses2" target="_blank" rel="noopener noreferrer">Animal Guesses</a></li>
                <li><a href="https://play.google.com/store/apps/details?id=com.raimonvibe.musicguesses" target="_blank" rel="noopener noreferrer">Music Guesses</a></li>
                <li><a href="https://rootwork-teal.vercel.app/" target="_blank" rel="noopener noreferrer">Rootwork</a></li>
                <li><a href="https://tanach.vercel.app/" target="_blank" rel="noopener noreferrer">Tanach Reader</a></li>
                <li><a href="https://what-jesus-said.vercel.app/" target="_blank" rel="noopener noreferrer">What Jesus Said</a></li>
                <li><a href="https://bible-old-and-new-testament.vercel.app/" target="_blank" rel="noopener noreferrer">Old and New Testament Bible</a></li>
                <li><a href="https://first-century-medicine.vercel.app/" target="_blank" rel="noopener noreferrer">Medicine in the Times of Jesus</a></li>
                <li><a href="https://book-of-mormon-tan.vercel.app/" target="_blank" rel="noopener noreferrer">Book of Mormon</a></li>
                <li><a href="https://prayer-intentions.vercel.app/" target="_blank" rel="noopener noreferrer">Prayer Intentions</a></li>
                <li><a href="https://monk-guidelines.vercel.app/" target="_blank" rel="noopener noreferrer">Monk Guidelines</a></li>
              </ul>
            </li>
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
              </ul>
            </li>
            <li><Link href="/resume">Resume</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/legalnotice">Legalnotice</Link></li>
            <li><Link href="/privacynotice">Privacynotice</Link></li>
          </ul>
        </nav>

        <SidebarProjects />
      </div>


    </div>
  )
}
