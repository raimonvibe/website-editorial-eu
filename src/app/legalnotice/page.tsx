import { Metadata } from 'next'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Legal Notice - Raimonvibe',
  description: 'Legal notice and terms of use for the Raimonvibe website.',
}

export default function LegalNotice() {
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header title="Legal Notice" />
          
          <section>
            <header className="main">
              <h1>Legal Notice</h1>
            </header>
            
            <h2>Information according to § 5 TMG</h2>
            <p>
              Raimon Vibe<br />
              Technical Researcher<br />
              Netherlands
            </p>
            
            <h2>Contact</h2>
            <p>
              Email: Available on contact page<br />
              Website: https://raimonvibe.eu
            </p>
            
            <h2>Disclaimer</h2>
            <h3>Liability for Contents</h3>
            <p>
              As service providers, we are liable for own contents of these websites according to Sec. 7, Para. 1 German Telemedia Act (TMG). However, according to Sec. 8 to 10 German Telemedia Act (TMG), service providers are not under obligation to permanently monitor submitted or stored information or to search for evidences that indicate illegal activities.
            </p>
            
            <h3>Liability for Links</h3>
            <p>
              Our offer includes links to external third party websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for their own contents.
            </p>
            
            <h3>Copyright</h3>
            <p>
              Contents and compilations published on these websites by the providers are subject to German copyright laws. Reproduction, editing, distribution as well as the use of any kind outside the scope of the copyright law require a written permission of the author or originator.
            </p>
          </section>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}
