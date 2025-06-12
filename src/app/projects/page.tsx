import { Metadata } from 'next'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Projects - Raimonvibe',
  description: 'Explore Raimon\'s portfolio of technical projects and research work.',
}

export default function Projects() {
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header title="Projects" />
          
          <section>
            <header className="main">
              <h1>Projects</h1>
            </header>
            
            <p>Here you can find a collection of my technical projects, research work, and innovative solutions. Each project represents a unique challenge and learning experience in my journey as a technical researcher.</p>
            
            <h2>Featured Projects</h2>
            <p>You can find detailed information about my projects in the sidebar, including:</p>
            <ul>
              <li>SkillsHub - Technology stack recommendations</li>
              <li>Code Review - SaaS code analysis tool</li>
              <li>Physics Calculator - Speed and acceleration calculations</li>
              <li>Physics Flashcards - Educational reference guide</li>
              <li>Retro Monitor - Vintage-inspired quiz application</li>
              <li>Animal Guesses - Interactive quiz game</li>
              <li>EMF Simulator - Electromagnetic induction simulator</li>
              <li>Tetris 2.0 - Modern take on the classic game</li>
              <li>Periodic Table - Interactive element explorer</li>
              <li>Inventory Pro - Modern inventory management system</li>
              <li>Google Login EDU - Educational authentication system</li>
            </ul>
            
            <p>Each project showcases different aspects of my technical skills and creative problem-solving abilities.</p>
          </section>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}
