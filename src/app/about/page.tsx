import { Metadata } from 'next'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About me - Raimonvibe',
  description: 'Learn about Raimon, a freelance web designer and developer from West Friesland. Discover his journey combining technology with creativity.',
}

export default function About() {
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header title="About me" />
          
          <section>
            <header className="main">
              <h1>Hello, I am Raimon</h1>
            </header>

<span className="image main">
  <Image
    src="/images/pic14.jpg"
    alt=""
    width={800}
    height={400}
    style={{ width: "100%", height: "auto" }}
  />
</span>

            <p>
              During my digital journey, I've combined technology with creativity, creating unique designs that push the boundaries of what's possible. This positive mindset helps me realize my true potential, unhindered by the expectations of others.
            </p>
            <p>
              My challenges haven't hindered my personal and professional growth. I strongly believe that everyone, despite any obstacles, can achieve their dreams with determination and support. I greatly appreciate your understanding and interest in my story. I hope it inspires you to overcome obstacles and discover your full potential on your own journey.
            </p>
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
              <li><Link href="/contact" className="button">Contact me</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}
