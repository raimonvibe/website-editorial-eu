import { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { PROJECTS } from '@/data/projects'

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
            <header className="major">
              <h2>Projects</h2>
            </header>
            <div className="posts">
              {PROJECTS.map((project) => (
                <article key={project.id}>
<a href={project.url} target="_blank" className="image">
  <Image
    src={project.image}
    alt={project.alt}
    width={400}
    height={300}
    style={{ width: "100%", height: "auto" }}
  />
</a>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="actions">
                    <li><a href={project.url} target="_blank" className="button">{project.buttonText}</a></li>
                  </ul>
                </article>
              ))}
            </div>
            <div>
              <h2>So, have a look around!</h2>
              <p>Feel free to explore these projects and see what you think. I'm always learning and growing, and these sites are a reflection of that journey. Who knows what I'll be working on next? Stay tuned!</p>
            </div>
          </section>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}
