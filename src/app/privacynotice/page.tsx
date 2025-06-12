import { Metadata } from 'next'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Notice - Raimonvibe',
  description: 'Privacy policy and data protection information for the Raimonvibe website.',
}

export default function PrivacyNotice() {
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header title="Privacy Notice" />
          
          <section>
            <header className="main">
              <h1>Privacy Notice</h1>
            </header>
            
            <h2>Data Protection</h2>
            <p>
              The protection of your personal data is very important to us. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.
            </p>
            
            <h2>Information Collection and Use</h2>
            <p>
              We collect information when you visit our website, fill out a form, or interact with our services. The information collected may include your name, email address, and other contact details when voluntarily provided.
            </p>
            
            <h2>Cookies</h2>
            <p>
              Our website may use cookies to enhance your experience. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser that enables the site's systems to recognize your browser and capture certain information.
            </p>
            
            <h2>Third Party Services</h2>
            <p>
              We may use third-party services such as analytics tools to help us understand how our website is used. These services may collect information sent by your browser as part of a web page request.
            </p>
            
            <h2>Contact</h2>
            <p>
              If you have any questions about this Privacy Notice, please contact us through our contact page.
            </p>
            
            <p><em>Last updated: 2025</em></p>
          </section>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}
