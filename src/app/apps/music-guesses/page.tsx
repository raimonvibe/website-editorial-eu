import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { MUSIC_GUESSES } from '@/data/music-guesses'

export const metadata: Metadata = {
  title: 'Music Guesses - Raimonvibe',
  description:
    'Music Guesses is a free, ad-free educational quiz for Android. Listen to instrument sounds, see pictures, and answer true/false questions.',
  openGraph: {
    title: 'Music Guesses - Raimonvibe',
    description: 'Free educational music instrument quiz for Android. No ads, no in-app purchases.',
    url: 'https://raimonvibe.eu/apps/music-guesses',
    siteName: 'Raimonvibe',
    type: 'website',
  },
}

export default function MusicGuessesAppPage() {
  const { name, playStoreUrl, privacyPath, supportEmail } = MUSIC_GUESSES

  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header title={name} />

          <section>
            <header className="main">
              <h1>{name}</h1>
            </header>

            <p>
              <strong>{name}</strong> is an educational music quiz for Android by{' '}
              <strong>RaimonVibe</strong>. Listen to instrument sounds, look at pictures, and test
              what you know with simple <strong>true/false</strong> questions.
            </p>

            <h2>Features</h2>
            <ul>
              <li>Instrument sounds and pictures bundled with the App</li>
              <li>True or false questions — easy for young learners</li>
              <li>Child-friendly interface; no account required to play</li>
              <li>
                <strong>No ads</strong> and <strong>no in-app purchases</strong> (as we intend to offer the App)
              </li>
            </ul>

            <h2>Get the app</h2>
            <p>
              Install <strong>{name}</strong> from Google Play on your Android phone or tablet.
            </p>
            <ul className="actions">
              <li>
                <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="button primary">
                  Get it on Google Play
                </a>
              </li>
              <li>
                <Link href={privacyPath} className="button">
                  Privacy policy
                </Link>
              </li>
            </ul>

            <h2>Support</h2>
            <p>
              Questions about the app or privacy? Email{' '}
              <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
            </p>
            <p>
              <Link href="/projects">← Back to projects</Link>
            </p>
          </section>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}
