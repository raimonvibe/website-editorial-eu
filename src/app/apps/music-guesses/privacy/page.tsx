import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import MusicGuessesPrivacyContent from '@/components/MusicGuessesPrivacyContent'
import { MUSIC_GUESSES } from '@/data/music-guesses'

export const metadata: Metadata = {
  title: 'Privacy Policy — Music Guesses - Raimonvibe',
  description:
    'Privacy policy for the Music Guesses Android app. Free, ad-free, no personal data collection for gameplay.',
  openGraph: {
    title: 'Privacy Policy — Music Guesses',
    description: 'How Music Guesses handles your information on Android.',
    url: 'https://raimonvibe.eu/apps/music-guesses/privacy',
    siteName: 'Raimonvibe',
    type: 'website',
  },
}

export default function MusicGuessesPrivacyPage() {
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header title="Privacy Policy" />

          <section>
            <header className="main">
              <h1>Privacy Policy — {MUSIC_GUESSES.name}</h1>
            </header>

            <MusicGuessesPrivacyContent />

            <p>
              <Link href={MUSIC_GUESSES.sitePath}>← {MUSIC_GUESSES.name} app page</Link>
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
