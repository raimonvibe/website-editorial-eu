import Image from 'next/image'
import Link from 'next/link'
import Footer from './Footer'
import { PROJECTS } from '@/data/projects'

export default function SidebarProjects() {
  return (
    <section>
      <header className="major">
        <h2>Projects</h2>
      </header>
      <div className="mini-posts">
        {PROJECTS.map((project) => (
          <article key={project.id}>
            <a href={project.url} target="_blank" className="image">
              <Image src={project.image} alt={project.alt} width={300} height={200} />
            </a>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="actions">
              <li><a href={project.url} target="_blank" className="button">{project.buttonText}</a></li>
            </ul>
          </article>
        ))}
        
        <div>
          <h2>So, have a look around!</h2>
          <p>Feel free to explore these projects and see what you think. I'm always learning and growing, and these sites are a reflection of that journey. Who knows what I'll be working on next? Stay tuned!</p>
        </div>
      </div>

      <div>
        <h2>If you have ideas.</h2>
        <p>
          Collecting feedback from clients is a way to show that I value
          their opinions. By asking my clients for feedback, I communicate
          that their opinions are important to me. I involve them in
          shaping my business, so they feel more connected to my company.
          By listening to their voices, I can build a sustainable
          connection with them.
        </p>
        <p>"We would love to hear from you."</p>
        <ul className="actions">
          <li><Link href="/contact" className="button">Contact me</Link></li>
        </ul>
      </div>

      <Footer />
    </section>
  )
}
