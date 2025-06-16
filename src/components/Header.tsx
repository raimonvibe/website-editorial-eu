import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faXTwitter,
  faYoutube,
  faTiktok,
  faInstagram,
  faMedium,
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons"
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
            className="icon brands" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Link to Twitter"
          >
            <FontAwesomeIcon icon={faXTwitter} />
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a 
            href="https://www.youtube.com/channel/UCDGDNuYb2b2Ets9CYCNVbuA/videos/" 
            className="icon brands" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Link to YouTube"
          >
            <FontAwesomeIcon icon={faYoutube} />
            <span className="label">YouTube</span>
          </a>
        </li>
        <li>
          <a 
            href="https://www.tiktok.com/@raimonvibe/" 
            className="icon brands" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Link to TikTok"
          >
            <FontAwesomeIcon icon={faTiktok} />
            <span className="label">TikTok</span>
          </a>
        </li>
        <li>
          <a 
            href="https://www.instagram.com/raimonvibe/" 
            className="icon brands" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Link to Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a 
            href="https://medium.com/@raimonvibe/" 
            className="icon brands" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Link to Medium"
          >
            <FontAwesomeIcon icon={faMedium} />
            <span className="label">Medium</span>
          </a>
        </li>
        <li>
          <a 
            href="https://github.com/raimonvibe/" 
            className="icon brands" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Link to GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a 
            href="https://www.linkedin.com/in/raimonvibe/" 
            className="icon brands" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Link to LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a 
            href="https://www.facebook.com/profile.php?id=61563450007849" 
            className="icon brands" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Link to Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
            <span className="label">Facebook</span>
          </a>
        </li>
        <DarkModeToggle />
      </ul>
    </header>
  )
}
