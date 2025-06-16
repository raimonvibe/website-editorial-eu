import { Metadata } from 'next'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resume - Raimonvibe',
  description: 'View Raimon\'s professional resume and download his CV.',
}

export default function Resume() {
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header title="Resume" />
          
          <section>
            <header className="main">
              <h1>Resume</h1>
            </header>
            
            <div>
              <div id="pdf-container">
                <iframe
                  src="/images/resume.pdf"
                  title="Resume PDF"
                  width="100%"
                  height="600px"
                  style={{border: 'none'}}
                  loading="lazy"
                  aria-label="Raimonvibe's Resume PDF"
                ></iframe>
              </div>
              <div className="spacing"></div>
              <div className="spacing"></div>
            </div>
          </section>

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
              <li><Link href="/contact" target="_blank" className="button">Contact me</Link></li>
            </ul>
            <div className="spacing3"></div>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}
