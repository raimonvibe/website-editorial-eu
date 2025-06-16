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
            <p>
              <strong>Website name:</strong> raimonvibe<br />
              <strong>Website URL:</strong> <a href="https://raimonvibe.eu">https://raimonvibe.eu</a><br />
              <strong>Name:</strong> Raimon<br />
              <strong>Address:</strong> Timpaan 1-B<br />
              <strong>Postal code and city:</strong> 1628 MT Hoorn<br />
              <strong>Email address:</strong> <a href="mailto:info@raimonvibe.com">info@raimonvibe.com</a>
            </p>

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
              We take the protection of your personal data seriously and implement appropriate technical and organizational measures to protect your data from unlawful processing, loss, misuse, unauthorized access, disclosure, alteration, or destruction. Your personal data will not be retained for longer than is strictly necessary to achieve the purposes for which your data is collected.
            </p>

            <h2>Special and/or Sensitive Personal Data That We Process</h2>
            <p>
              Our website and/or service does not intend to collect data about website visitors who are younger than 16 years of age unless they have permission from their parents or guardian. However, we cannot check whether a visitor is older than 16. We therefore advise parents to be involved in their children's online activities in order to prevent data about children from being collected without parental consent. If you are convinced that we have collected personal information about a minor without this consent, please contact us at <a href="mailto:info@raimonvibe.com">info@raimonvibe.com</a>, and we will delete this information.
            </p>

            <h2>Additional Purposes for Processing Personal Data</h2>
            <p>
              The company processes your personal data for the following additional purposes:
            </p>
            <ul>
              <li>The company analyzes your behavior on the website to improve the website and tailor the range of products and services to your preferences.</li>
              <li>The company tracks your surfing behavior on various websites which we adapt our products and services to your needs.</li>
            </ul>

            <h2>Automated Decision-Making</h2>
            <p>
              The company makes business decisions based on automated processing on matters that can have (significant) consequences for people. These are decisions made by computer programs or systems, without the involvement of a person (for example, an employee of the company). The company uses the following computer programs or systems:
            </p>
            <ul>
              <li><a href="https://heapanalytics.com/">Heap Analytics</a></li>
              <li><a href="https://cookie-script.com/">CookieScript</a></li>
            </ul>

            <h2>Cookies, or Similar Techniques, That We Use</h2>
            <p>
              The company uses functional, analytical, and tracking cookies. A cookie is a small text file that is saved in the browser of your computer, tablet, or smartphone when you first visit this website. The company uses cookies with a purely technical functionality. These ensure that the website works properly, and that, for example, your preferred settings are remembered. These cookies are also used to operate the website properly and optimize it. Additionally, we place cookies that track your surfing behavior so that we can offer customized content and advertisements.
            </p>
            <p>
              During your first visit to our website, we have already informed you about these cookies and asked for your permission to place them. You can opt out of cookies by setting your internet browser so that it no longer stores cookies. Additionally, you can also delete all information previously stored via your browser settings. For more information, visit: <a href="https://veiliginternetten.nl/search/?q=cookies">https://veiliginternetten.nl/cookies/</a>.
            </p>
            <p>
              On this website, cookies are also placed by third parties. These are, for example, advertisers and/or social media companies. Below is an overview:
            </p>
            <ul>
              <li><strong>Cookie:</strong> Heap Analytics<br/><strong>Name:</strong> Heap Analytics<br/><strong>Function:</strong> Analytical cookie that measures website visits.</li>
              <li><strong>Cookie:</strong> CookieScript<br/><strong>Name:</strong> CookieScript<br/><strong>Function:</strong> Provides a cookie pop-up window.</li>
            </ul>

            <h2>View, Adjust, or Delete Data</h2>
            <p>
              You have the right to access, correct, or delete your personal data. You can do this yourself via the personal settings of your account. Additionally, you have the right to withdraw your consent for data processing or to object to the processing of your personal data by our company, and you have the right to data portability. This means that you can submit a request to us to send the personal data we have about you in a computer file to you or another organization named by you.
            </p>
            <p>
              If you wish to exercise your right to object and/or your right to data portability or if you have other questions/comments about data processing, please send a specific request to <a href="mailto:info@raimonvibe.com">info@raimonvibe.com</a>.
            </p>
            <p>
              To ensure that the request for access is made by you, we ask you to attach a copy of your identity document to the request. Make sure to black out your passport photo, MRZ (machine readable zone, the strip with numbers at the bottom of the passport), passport number, and Citizen Service Number (BSN) in this copy. This is to protect your privacy. The company will respond to your request as soon as possible, but within four weeks at the latest.
            </p>
            <p>
              The company also points out that you have the option to file a complaint with the national supervisory authority, the Personal Data Authority. This can be done via the following link: <a href="https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons">https://autoriteitpersoonsgegevens.nl/</a>.
            </p>

            <h2>How We Protect Personal Data</h2>
            <p>
              Raimonvibe takes the protection of your data seriously and takes appropriate measures to prevent abuse, loss, unauthorized access, unwanted disclosure, and unauthorized modification. If you believe that your data is not properly secured or there are indications of abuse, please contact our customer service or at <a href="mailto:info@raimonvibe.com">info@raimonvibe.com</a>.
            </p>
          </section>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}
