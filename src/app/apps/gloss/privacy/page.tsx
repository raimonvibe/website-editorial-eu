import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import GlossPrivacyContent from '@/components/GlossPrivacyContent'
import { GLOSS } from '@/data/gloss'

export const metadata: Metadata = {
  title: 'Privacy Policy — Gloss - Raimonvibe',
  description:
    'Privacy policy for the Gloss Android app (Beautiful Words). Free, ad-free, no account, local saved words only.',
  openGraph: {
    title: 'Privacy Policy — Gloss',
    description: 'How Gloss handles your information on Android.',
    url: 'https://raimonvibe.eu/apps/gloss/privacy',
    siteName: 'Raimonvibe',
    type: 'website',
  },
}

export default function GlossPrivacyPage() {
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header title="Privacy Policy" />

          <section>
            <header className="main">
              <h1>Privacy Policy — {GLOSS.name}</h1>
            </header>

            <GlossPrivacyContent />

            <p>
              <Link href={GLOSS.sitePath}>← {GLOSS.name} app page</Link>
              {' · '}
              <Link href="/projects">Projects</Link>
            </p>
          </section>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}
