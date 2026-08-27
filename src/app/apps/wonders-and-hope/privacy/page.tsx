import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import WondersAndHopePrivacyContent from '@/components/WondersAndHopePrivacyContent'
import { WONDERS_AND_HOPE } from '@/data/wonders-and-hope'

export const metadata: Metadata = {
  title: 'Privacy Policy — Wonders and Hope - Raimonvibe',
  description:
    'Privacy policy for the Wonders and Hope Android app. Free, ad-free, offline, no personal data collection for normal use.',
  openGraph: {
    title: 'Privacy Policy — Wonders and Hope',
    description: 'How Wonders and Hope handles your information on Android.',
    url: 'https://raimonvibe.eu/apps/wonders-and-hope/privacy',
    siteName: 'Raimonvibe',
    type: 'website',
  },
}

export default function WondersAndHopePrivacyPage() {
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header title="Privacy Policy" />

          <section>
            <header className="main">
              <h1>Privacy Policy — {WONDERS_AND_HOPE.name}</h1>
            </header>

            <WondersAndHopePrivacyContent />

            <p>
              <Link href={WONDERS_AND_HOPE.sitePath}>← {WONDERS_AND_HOPE.name} app page</Link>
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
