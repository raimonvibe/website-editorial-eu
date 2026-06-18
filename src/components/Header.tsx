import React from 'react'
import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle'

interface HeaderProps {
  title?: string;
}

export default function Header({ title = "Raimonvibe" }: HeaderProps) {
  return (
    <header id="header">
      <Link href="/" className="logo">
        <strong>{title}</strong> by Raimon
      </Link>
      <ul className="icons">
        <li>
          <a 
            href="https://x.com/raimonvibe/" 
            className="icon brands fa-x-twitter" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Link to Twitter"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a 
            href="https://www.youtube.com/channel/UCDGDNuYb2b2Ets9CYCNVbuA/videos/" 
            className="icon brands fa-youtube" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Link to YouTube"
          >
            <span className="label">YouTube</span>
          </a>
        </li>
        <li>
          <a 
            href="https://www.tiktok.com/@raimonvibe/" 
            className="icon brands fa-tiktok" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Link to TikTok"
          >
            <span className="label">TikTok</span>
          </a>
        </li>
        <li>
          <a 
            href="https://www.instagram.com/raimonvibe/" 
            className="icon brands fa-instagram" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Link to Instagram"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a 
            href="https://medium.com/@raimonvibe/" 
            className="icon brands fa-medium-m" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Link to Medium"
          >
            <span className="label">Medium</span>
          </a>
        </li>
        <li>
          <a 
            href="https://github.com/raimonvibe/" 
            className="icon brands fa-github" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Link to GitHub"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a 
            href="https://www.linkedin.com/in/raimonvibe/" 
            className="icon brands fa-linkedin" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Link to LinkedIn"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a 
            href="https://www.facebook.com/profile.php?id=61563450007849" 
            className="icon brands fa-facebook-f" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Link to Facebook"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        <DarkModeToggle />
      </ul>
    </header>
  )
}
