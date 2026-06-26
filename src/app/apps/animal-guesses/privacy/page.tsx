import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import AnimalGuessesPrivacyContent from '@/components/AnimalGuessesPrivacyContent'
import { ANIMAL_GUESSES } from '@/data/animal-guesses'

export const metadata: Metadata = {
  title: 'Privacy Policy — Animal Guesses - Raimonvibe',
  description:
    'Privacy policy for the Animal Guesses Android app. Free, ad-free, no personal data collection for gameplay.',
  openGraph: {
    title: 'Privacy Policy — Animal Guesses',
    description: 'How Animal Guesses handles your information on Android.',
    url: 'https://raimonvibe.eu/apps/animal-guesses/privacy',
    siteName: 'Raimonvibe',
    type: 'website',
  },
}

export default function AnimalGuessesPrivacyPage() {
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header title="Privacy Policy" />

          <section>
            <header className="main">
              <h1>Privacy Policy — {ANIMAL_GUESSES.name}</h1>
            </header>

            <AnimalGuessesPrivacyContent />

            <p>
              <Link href={ANIMAL_GUESSES.sitePath}>← {ANIMAL_GUESSES.name} app page</Link>
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
