import React from 'react'
import SidebarProjects from './SidebarProjects'

export default function Sidebar() {
  return (
    <div id="sidebar">
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
            <li><a href="/">Homepage</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/certificates">Certificates</a></li>
            <li>
              <span className="opener">More..</span>
              <ul>
                <li><a href="/about">About me</a></li>
                <li><a href="/opportunities">Opportunities</a></li>
                <li><a href="/clients">Clients</a></li>
                <li><a href="/models">3D Models</a></li>
                <li><a href="/projects">Projects</a></li>
              </ul>
            </li>
            <li><a href="/resume">Resume</a></li>
            <li><a href="/contact">Contact</a></li>
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
            <li><a href="/legalnotice">Legalnotice</a></li>
            <li><a href="/privacynotice">Privacynotice</a></li>
          </ul>
        </nav>

        <SidebarProjects />
      </div>
    </div>
  )
}
