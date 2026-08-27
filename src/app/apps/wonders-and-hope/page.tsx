import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { WONDERS_AND_HOPE } from '@/data/wonders-and-hope'

export const metadata: Metadata = {
  title: 'Wonders and Hope - Raimonvibe',
  description:
    'Wonders and Hope is a free, ad-free offline Bible app of 178 wonders and miracles. Read or listen with highlighted scrolling text, keep verses with colour and notes, and browse the World English Bible.',
  openGraph: {
    title: 'Wonders and Hope - Raimonvibe',
    description:
      'Offline Bible app of 178 wonders and miracles. No account, no ads, no tracking.',
    url: 'https://raimonvibe.eu/apps/wonders-and-hope',
    siteName: 'Raimonvibe',
    type: 'website',
  },
}

export default function WondersAndHopeAppPage() {
  const { name, playStoreUrl, privacyPath, wonderCount, bibleTranslation, supportEmail } =
    WONDERS_AND_HOPE

  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header title={name} />

          <section>
            <header className="main">
              <h1>{name}</h1>
            </header>

            <span className="image main">
              <Image
                src="/images/wondersandhope.webp"
                alt="Wonders and Hope Bible app with miracle cards and highlighted scripture"
                width={966}
                height={600}
                style={{ width: '100%', height: 'auto' }}
                priority
              />
            </span>

            <p>
              <strong>{name}</strong> is an offline Bible app for Android by{' '}
              <strong>RaimonVibe</strong>. Explore {wonderCount} wonders and miracles, each with
              its passage beside the card. Read or listen with highlighted scrolling text, keep
              verses with colour and notes, share quote images, and browse the full{' '}
              <strong>{bibleTranslation}</strong>.
            </p>

            <h2>Features</h2>
            <ul>
              <li>{wonderCount} wonders and miracles, each with its scripture passage beside the card</li>
              <li>Read or listen with highlighted scrolling text</li>
              <li>Keep verses with colour and personal notes</li>
              <li>Share quote images</li>
              <li>Browse the full {bibleTranslation}</li>
              <li>Works completely offline — no account required</li>
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
