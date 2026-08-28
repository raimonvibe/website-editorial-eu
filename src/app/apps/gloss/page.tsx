import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { GLOSS } from '@/data/gloss'

export const metadata: Metadata = {
  title: 'Gloss - Raimonvibe',
  description:
    'Gloss is a free, ad-free Android lexicon of 134 rare English words. Plain-language explanations, etymology, read aloud, and a little quiz — no account required.',
  openGraph: {
    title: 'Gloss - Raimonvibe',
    description:
      'A lexicon of lovely language. Rare words, etymology, and a friendly quiz. No account, no ads, no tracking.',
    url: 'https://raimonvibe.eu/apps/gloss',
    siteName: 'Raimonvibe',
    type: 'website',
  },
}

export default function GlossAppPage() {
  const { name, storeName, lexiconName, playStoreUrl, privacyPath, wordCount, supportEmail } =
    GLOSS

  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header title={name} />

          <section>
            <header className="main">
              <h1>{storeName}</h1>
            </header>

            <span className="image main">
              <Image
                src="/images/gloss.png"
                alt="Gloss — a lexicon of lovely language"
                width={1024}
                height={500}
                style={{ width: '100%', height: 'auto' }}
                priority
              />
            </span>

            <p>
              <strong>{name}</strong> is a lexicon of lovely language for Android by{' '}
              <strong>RaimonVibe</strong>. Explore {wordCount} rare, rich words from the{' '}
              <strong>{lexiconName}</strong> collection — explained the way a friend would explain
              them, not a dictionary. Search by the word or by the meaning you have in mind, hear it
              spoken, keep favourites, and quiz yourself on the roots.
            </p>

            <h2>Features</h2>
            <ul>
              <li>{wordCount} rare words with a friendly explanation, pronunciation, and etymology</li>
              <li>Word of the day</li>
              <li>Search and theme filters</li>
              <li>Read aloud using your device&rsquo;s speech engine</li>
              <li>A little quiz — a word, its roots, four meanings, one true</li>
              <li>Saved words and reading progress kept on the device</li>
              <li>Light and dark parchment themes</li>
              <li>
                <strong>No ads</strong>, <strong>no tracking</strong>, and{' '}
                <strong>no in-app purchases</strong>
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
