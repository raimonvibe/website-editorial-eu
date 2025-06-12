import { Metadata } from 'next'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Opportunities - Raimonvibe',
  description: 'Explore career opportunities and collaborations with Raimon.',
}

export default function Opportunities() {
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header title="Opportunities" />
          
          <section>
            <header className="main">
              <h1>My Professional Journey and Perspectives</h1>
            </header>

            <span className="image main">
              <Image src="/images/pic22.jpg" alt="" width={800} height={400} />
            </span>

            <p>Throughout my career, I have gained valuable perspectives by connecting with a range of renowned companies across various industries. These opportunities have come from organizations that value innovation, technology, and creative problem-solving—qualities that align with my professional goals.</p>
            <h1>Discover the Companies I Have Engaged With:</h1>
            
            <p>I'm always open to new opportunities and collaborations. Whether you're looking for a technical researcher, web developer, or someone to help with your next project, I'd love to hear from you.</p>
            
            <h2>What I'm Looking For</h2>
            <ul>
              <li>Challenging technical projects</li>
              <li>Research opportunities in emerging technologies</li>
              <li>Collaborative development work</li>
              <li>Consulting opportunities</li>
            </ul>
            
            <p>If you have an interesting project or opportunity, please don't hesitate to get in touch. I'm always excited to explore new possibilities and contribute to innovative solutions.</p>
          </section>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}
