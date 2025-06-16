import { Metadata } from 'next'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Clients - Raimonvibe',
  description: 'Learn about Raimon\'s client work and testimonials from satisfied customers.',
}

export default function Clients() {
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header title="Clients" />
          
          <section>
            <header className="main">
              <h1>Clients & Features</h1>
            </header>

            <div className="posts">
              <article className="common-properties-left">
<a href="https://www.collabs.io/mag/raimonvibe/" className="image">
  <Image
    src="/images/pic17.jpg"
    alt="My company in the online magazine Collabs"
    width={400}
    height={300}
    style={{ width: "100%", height: "auto" }}
  />
</a>

                <h3>Interviewed by Collabs</h3>
                <p>I was interviewed for the online magazine Collabs. I was very surprised when I was asked to write a story about my company. Read my story by clicking on the image.</p>
                <ul className="actions">
                  <li><a href="https://www.collabs.io/mag/raimonvibe/" className="button">More</a></li>
                </ul>
              </article>
              <article className="common-properties-right">
<a
  href="https://techbullion.com/is-software-development-a-dead-end-job-after-age-35/"
  className="image"
>
  <Image
    src="/images/pic18.jpg"
    alt="My company in the online magazine TechBullion"
    width={400}
    height={300}
    style={{ width: "100%", height: "auto" }}
  />
</a>

                <h3>Fintech Magazine TechBullion</h3>
                <p>I am honored to share that I was recently featured in Fintech Magazine with my insights, published by TechBullion. This is an important milestone in my journey and I am grateful for the opportunity to share my knowledge. Read my story by clicking on the image.</p>
                <ul className="actions">
                  <li><a href="https://techbullion.com/is-software-development-a-dead-end-job-after-age-35/" className="button">More</a></li>
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
