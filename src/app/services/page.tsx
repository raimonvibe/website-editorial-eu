import { Metadata } from 'next'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Services - Raimonvibe',
  description: 'Discover Raimon\'s services including blog writing on Medium and YouTube content creation about technology and 3D printing.',
}

export default function Services() {
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header title="Services" />
          
          <section>
            <header className="main">
              <h1>Blogs about my Studies</h1>
            </header>
<span className="image main">
  <Image
    src="/images/pic24.jpg"
    alt=""
    width={800}
    height={400}
    style={{ width: "100%", height: "auto" }}
  />
</span>



            <p>
              On Medium, I share in-depth articles about my experiences and learning processes in online coding bootcamps, including project examples and scripts. Additionally, I passionately write about 3D printing, highlighting my unique design process, steps for publication, and my motivation for this innovative technology.
            </p>
            <p>
              As a content creator on YouTube, I also share my experiences and knowledge in an accessible manner. This is just a glimpse of the diversity on my Medium blog, where I invite you to discover more about my professional and creative journey in the exciting world of technology and design.
            </p>
            <p>Check out my blog posts at:</p>
            <strong>
              <a
                className="Social left-align"
                target="_blank"
                rel="noopener noreferrer"
                href="https://medium.com/@raimonvibe"
              >
                Medium
              </a>
            </strong>

            <hr className="major" />

<span className="image main">
  <Image
    src="/images/pic23.jpg"
    alt=""
    width={800}
    height={400}
    style={{ width: "100%", height: "auto" }}
  />
</span>


            <h1>YouTube Creator</h1>
            <p>
              My YouTube channel not only offers instructional videos on creating 3D models but also explores the fascinating world of AI technology and the technical aspects of starting an online business.
            </p>
            <p>
              I share insights about the software that is crucial for my business, providing a valuable source of knowledge for anyone interested in technology and online entrepreneurship.
            </p>
            <p>Check out my YouTube channel at:</p>
            <strong>
              <a
                className="Social"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/channel/UCDGDNuYb2b2Ets9CYCNVbuA/videos"
              >
                YouTube
              </a>
            </strong>
          </section>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}
