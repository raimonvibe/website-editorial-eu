import { Metadata } from 'next'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home - Raimonvibe',
  description: 'Welcome to Raimonvibe - Discover custom-made digital artworks with Raimon, your freelance web designer and developer from West Friesland.',
}

export default function Home() {
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header />
          
          <section id="banner">
            <div className="content">
              <header>
                <h1>Hi, I'm Raimon<br />
                @ raimonvibe</h1>
                <p>A technical researcher in the tech field.</p>
              </header>
              <p>About four years ago, I founded raimonvibe, a research company in the technology field, to dive deep into programming and push the boundaries of digital innovation. I've explored a wide range of technologies, working with languages like Python, JavaScript, HTML and CSS, and Flutter Dart. Studying both frontend and backend solutions has been fascinating, aiming for seamless and efficient integration. Utilizing powerful frameworks like React, Django, and Node.js, along with database systems such as MongoDB and Mongoose, I've been able to create robust applications.</p>
              <ul className="actions">
                <li><Link href="/about" className="button big">Learn More</Link></li>
              </ul>
            </div>
            <span className="image object">
              <Image src="/images/pic12.jpg" alt="" width={600} height={800} />
            </span>
          </section>

          <section>
            <header className="major">
              <h2>Technological Impact</h2>
            </header>
            <div className="features">
              <article>
                <span className="icon icon-gem"></span>
                <div className="content">
                  <h3>Technological Impact</h3>
                  <p>Delving into Data Science and Data Visualization has allowed me to transform complex datasets into clear, insightful visual reports. Learning to program AI with TensorFlow has opened up new possibilities to develop concepts for customized AI solutions that support intelligent, data-driven decision-making.</p>
                </div>
              </article>
              <article>
                <span className="icon icon-paper-plane"></span>
                <div className="content">
                  <h3>Technological Impact</h3>
                  <p>It's amazing how these experiences not only advance my professional skills but also enhance my problem-solving abilities in everyday life. Sometimes discipline is more present on some days than others, and that's okay.</p>
                </div>
              </article>
              <article>
                <span className="icon icon-rocket"></span>
                <div className="content">
                  <h3>Technological Impact</h3>
                  <p>At RaimonVibe, I'm not just focused on developing technology but also on understanding and innovating it. I've extended my research initiatives to include modern server technologies like VPS (Virtual Private Servers) to host robust, scalable applications that are accessible worldwide.</p>
                </div>
              </article>
              <article>
                <span className="icon icon-signal"></span>
                <div className="content">
                  <h3>Skills</h3>
                  <p>I'm a skilled developer fluent in Python, JavaScript, HTML5, and CSS3, using React, Node.js, and Flutter to build dynamic apps. I excel in TensorFlow, AI, and data analytics, creating intelligent systems. My web development focuses on responsive design, UX/UI, and cross-browser compatibility. With Git, Tableau Public, and VS Code, I turn ideas into reality.</p>
                </div>
              </article>
            </div>
          </section>

          <section>
            <header className="major">
              <h2>More</h2>
            </header>
            <div className="posts">
              <article>
                <Link href="/about" className="image">
                  <Image src="/images/pic13.jpg" alt="" width={400} height={300} />
                </Link>
                <h3>About</h3>
                <p>Read here to learn more about me.</p>
                <ul className="actions">
                  <li><Link href="/about" className="button">More</Link></li>
                </ul>
              </article>
              <article>
                <Link href="/certificates" className="image">
                  <Image src="/images/pic15.jpg" alt="" width={400} height={300} />
                </Link>
                <h3>Certificates</h3>
                <p>Learn more about my certificates</p>
                <ul className="actions">
                  <li><Link href="/certificates" className="button">More</Link></li>
                </ul>
              </article>
              <article>
                <Link href="/clients" className="image">
                  <Image src="/images/pic16.jpg" alt="" width={400} height={300} />
                </Link>
                <h3>Clients</h3>
                <p>Learn more about my clients</p>
                <ul className="actions">
                  <li><Link href="/clients" className="button">More</Link></li>
                </ul>
              </article>
              <article>
                <Link href="/opportunities" className="image">
                  <Image src="/images/pic17.jpg" alt="" width={400} height={300} />
                </Link>
                <h3>Opportunities</h3>
                <p>The companies I came in contact with</p>
                <ul className="actions">
                  <li><Link href="/opportunities" className="button">More</Link></li>
                </ul>
              </article>
              <article>
                <Link href="/projects" className="image">
                  <Image src="/images/pic19.jpg" alt="" width={400} height={300} />
                </Link>
                <h3>Projects</h3>
                <p>My projects</p>
                <ul className="actions">
                  <li><Link href="/projects" className="button">More</Link></li>
                </ul>
              </article>
              <article>
                <Link href="/models" className="image">
                  <Image src="/images/pic20.jpg" alt="" width={400} height={300} />
                </Link>
                <h3>3d library</h3>
                <p>Some of my 3d models</p>
                <ul className="actions">
                  <li><Link href="/models" className="button">More</Link></li>
                </ul>
              </article>
            </div>
          </section>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}
