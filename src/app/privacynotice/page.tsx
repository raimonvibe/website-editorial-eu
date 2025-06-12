import { Metadata } from 'next'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Notice - Raimonvibe',
  description: 'Privacy notice and data protection information for Raimonvibe website. Learn about how we collect, use, and protect your personal information.',
  keywords: 'privacy notice, data protection, GDPR, personal information, cookies, Raimonvibe',
  openGraph: {
    title: 'Privacy Notice - Raimonvibe',
    description: 'Privacy notice and data protection information for Raimonvibe website.',
    url: 'https://www.raimonvibe.com/privacynotice',
    siteName: 'Raimonvibe',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Notice - Raimonvibe',
    description: 'Privacy notice and data protection information for Raimonvibe website.',
  },
}

export default function PrivacyNotice() {
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header title="Privacy Notice" />
          
          <section>
            <header className="main">
              <h1>Privacy Statement</h1>
            </header>
            
            <p>
              The company, located at Timpaan 1-B 1628 MT Hoorn, is responsible for the processing of personal data as shown in this privacy statement.
            </p>

            <h2>Contact Details</h2>
            <p>Email: <a href="mailto:info@raimonvibe.com">info@raimonvibe.com</a></p>

            <h2>Personal Data That We Process</h2>
            <p>
              Raimonvibe takes your privacy seriously and is transparent about the personal data we process. When you visit our website or use our services, we may process the following personal data about you:
            </p>
            <ul>
              <li>Contact information such as your email address, if you voluntarily provide it to us when filling out a contact form or signing up for our newsletter.</li>
              <li>Information about your browsing behavior on our website to improve our services and your user experience. This includes data collected through cookies, such as pages visited, click behavior, and the duration of your visit.</li>
            </ul>

            <h2>Purpose of and Basis for Processing Personal Data</h2>
            <p>
              We process your personal data for specific purposes and on valid legal grounds, including:
            </p>
            <ul>
              <li>To contact you and respond to your requests or questions, if you have given us permission to do so.</li>
              <li>For analyzing your use of our website with the aim to improve our website and services. We do this on the basis of our legitimate interest to continuously optimize our service delivery.</li>
              <li>To comply with legal obligations, such as maintaining records for tax purposes or responding to requests from competent authorities.</li>
            </ul>

            <h2>Sharing Personal Data with Third Parties</h2>
            <p>
              Raimonvibe will not sell, share, or disclose your personal data to third parties without your permission, unless necessary for the performance of our agreement with you or to comply with a legal obligation. In cases where we cooperate with external service providers or partners, we ensure that appropriate agreements are in place to protect your privacy.
            </p>

            <h2>Security and Retention of Personal Data</h2>
            <p>
              We take appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected or as required by law.
            </p>

            <h2>Your Rights</h2>
            <p>
              Under applicable data protection laws, you have several rights regarding your personal data, including:
            </p>
            <ul>
              <li>The right to access your personal data</li>
              <li>The right to rectify inaccurate or incomplete data</li>
              <li>The right to erase your personal data under certain circumstances</li>
              <li>The right to restrict processing of your personal data</li>
              <li>The right to data portability</li>
              <li>The right to object to processing based on legitimate interests</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              Our website uses cookies to improve your browsing experience and analyze website usage. You can control cookie settings through your browser preferences.
            </p>

            <h2>Changes to This Privacy Statement</h2>
            <p>
              We may update this privacy statement from time to time. Any changes will be posted on this page with an updated revision date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this privacy statement or wish to exercise your rights, please contact us at: <a href="mailto:info@raimonvibe.com">info@raimonvibe.com</a>
            </p>
          </section>
        </div>
      </div>
      <Sidebar />
      <Footer />
    </div>
  )
}
