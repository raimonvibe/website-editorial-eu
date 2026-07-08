import Link from 'next/link'
import { ANIMAL_GUESSES } from '@/data/animal-guesses'

export default function AnimalGuessesPrivacyContent() {
  const { name, packageName, publisher, supportEmail, lastUpdated, sitePath } = ANIMAL_GUESSES

  return (
    <>
      <p>
        <strong>Last updated:</strong> {lastUpdated}
      </p>
      <p>
        <strong>App name:</strong> {name}
        <br />
        <strong>Package name:</strong> <code>{packageName}</code>
        <br />
        <strong>Publisher:</strong> {publisher} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;)
      </p>

      <h2>Introduction</h2>
      <p>
        Welcome to <strong>{name}</strong>. We are committed to protecting your privacy and ensuring
        a safe experience for all users, especially children. This privacy policy explains our
        practices regarding data collection and usage in our educational game application.
      </p>

      <h2>Information we don&rsquo;t collect</h2>
      <p>
        <strong>{name}</strong> is designed with privacy in mind. We do <strong>not</strong>{' '}
        collect:
      </p>
      <ul>
        <li>Personal information</li>
        <li>Location data</li>
        <li>Device information</li>
        <li>Usage statistics</li>
        <li>Photos or media from your device</li>
        <li>Contact information</li>
      </ul>

      <h2>Offline usage</h2>
      <p>
        The App functions <strong>completely offline</strong> and does not require internet
        connectivity to play. All game content is stored locally on your device.
      </p>

      <h2>Children&rsquo;s privacy</h2>
      <p>
        Our app is designed for use by children and complies with children&rsquo;s privacy
        protection laws (including <strong>COPPA</strong> — Children&rsquo;s Online Privacy
        Protection Act). We do <strong>not</strong> knowingly collect any personal information from
        children under 13.
      </p>

      <h2>Data storage</h2>
      <ul>
        <li>All game progress and scores are stored <strong>locally on your device</strong></li>
        <li>No data is transmitted to our servers for normal gameplay</li>
        <li>No cloud storage is used</li>
        <li>No user accounts are required</li>
      </ul>

      <h2>Third-party services</h2>
      <p>
        We do <strong>not</strong> integrate with third-party analytics tools or advertising
        networks inside the App. The quiz experience is self-contained.
      </p>
      <p>
        When you install or update the App through <strong>Google Play</strong>,{' '}
        <strong>Google</strong> may process certain information under its own policies:{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          https://policies.google.com/privacy
        </a>
      </p>

      <h2>App permissions</h2>
      <p>The App requires minimal permissions to function, for example:</p>
      <ul>
        <li>Storage access (to save game progress locally), where applicable on your Android version</li>
      </ul>
      <p>
        We do <strong>not</strong> use the App to access your microphone, contacts, or photo library
        for marketing. If a future version requests additional permissions, we will update this
        policy and the store listing <strong>before</strong> release.
      </p>

      <h2>Security</h2>
      <p>
        Because we do not collect personal data on our servers for normal gameplay, there is no
        personal data held by us that could be exposed in a breach of our systems.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this privacy policy from time to time. Any changes will be reflected on this
        page (same address used for the Google Play listing), and the <strong>Last updated</strong>{' '}
        date at the top will change.
      </p>

      <h2>Contact us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at:{' '}
        <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
      </p>
      <p>
        <strong>{publisher}</strong>
        <br />
        App page: <Link href={sitePath}>https://raimonvibe.eu{sitePath}</Link>
        <br />
        Website: <a href="https://raimonvibe.eu/">https://raimonvibe.eu/</a>
      </p>

      <h2>Your rights</h2>
      <p>
        Since we don&rsquo;t collect personal information through the App for our own use, there is
        no personal data for us to access, modify, or delete from our systems. Your privacy is
        protected by design.
      </p>
      <p>
        For privacy questions from parents or guardians, email <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
        The general privacy notice for this portfolio website is at{' '}
        <Link href="/privacynotice">/privacynotice</Link> (website only, not in-app gameplay).
      </p>
      <p>
        <Link href={sitePath}>← {name} app page</Link>
      </p>
    </>
  )
}
