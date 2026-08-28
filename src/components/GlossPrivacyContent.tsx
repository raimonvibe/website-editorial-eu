import Link from 'next/link'
import { GLOSS } from '@/data/gloss'

export default function GlossPrivacyContent() {
  const { name, storeName, lexiconName, packageName, publisher, supportEmail, lastUpdated, sitePath } =
    GLOSS

  return (
    <>
      <p>
        <strong>Last updated:</strong> {lastUpdated}
      </p>
      <p>
        <strong>App name:</strong> {storeName} ({name})
        <br />
        <strong>Package name:</strong> <code>{packageName}</code>
        <br />
        <strong>Publisher:</strong> {publisher} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;)
      </p>
      <p>
        This Privacy Policy describes how <strong>{name}</strong> (&ldquo;the App&rdquo;) handles
        information when you download or use the App on an Android device.
      </p>

      <h2>1. Summary (plain language)</h2>
      <ul>
        <li>
          <strong>{name} is free, ad-free, and tracking-free</strong> in the way we intend to offer
          it: we do <strong>not</strong> show third-party advertising inside the App, and we do{' '}
          <strong>not</strong> sell your personal information.
        </li>
        <li>
          The App is a <strong>local lexicon</strong> of rare English words from the{' '}
          <strong>{lexiconName}</strong> collection. It is <strong>not</strong> designed to require
          you to create an account.
        </li>
        <li>
          Saved words, words you have explored, and light/dark preference stay{' '}
          <strong>on your device</strong>. We do not upload them to our servers.
        </li>
        <li>
          <strong>Google</strong> (as the operator of Google Play and related device services) may
          process certain information when you use the Play Store or Android — that processing is
          described by <strong>Google&rsquo;s own policies</strong>, not fully by this document.
        </li>
      </ul>
      <p>
        If anything here is unclear, contact us at the email in <strong>Section 10</strong>.
      </p>

      <h2>2. Who this policy applies to</h2>
      <p>
        This policy applies to anyone who installs or uses <strong>{name}</strong> on a compatible
        Android device obtained through <strong>Google Play</strong> (or any other channel where we
        distribute the same build).
      </p>

      <h2>3. Information the App itself does not intentionally collect</h2>
      <p>The App, as we design it, <strong>does not</strong>:</p>
      <ul>
        <li>
          Ask you to <strong>register</strong> or <strong>log in</strong> inside the App;
        </li>
        <li>Include a <strong>chat</strong> or <strong>social feed</strong>;</li>
        <li>
          Ask for your <strong>name</strong>, <strong>email</strong>, <strong>phone number</strong>,
          or <strong>home address</strong> inside the App for normal use;
        </li>
        <li>
          Run <strong>behavioural advertising</strong>, <strong>analytics</strong>, or{' '}
          <strong>ad tracking</strong> inside the App.
        </li>
      </ul>
      <p>
        The word list, explanations, etymology, and in-app artwork are{' '}
        <strong>bundled with the App</strong> so you can browse without creating an account.
      </p>

      <h2>4. Information stored locally on your device</h2>
      <p>The App may store on <strong>your device only</strong>:</p>
      <ul>
        <li>Words you mark as saved (favourites);</li>
        <li>Which entries you have already opened (progress);</li>
        <li>Light, dark, or system theme preference.</li>
      </ul>
      <p>
        That information is <strong>not</strong> sent to us. Uninstalling the App typically removes
        it, unless Android or a backup service you use keeps a copy under its own policy.
      </p>

      <h2>5. Speech (read aloud)</h2>
      <p>
        If you use <strong>read aloud</strong>, the App asks your device&rsquo;s built-in{' '}
        <strong>text-to-speech</strong> engine (on Android, often the system speech service) to speak
        the word and its meaning. The spoken text is processed on the <strong>device</strong> (or by
        the speech engine you have installed). We do <strong>not</strong> send that text to our
        servers. The speech engine you choose has its own privacy policy.
      </p>

      <h2>6. Information that may be processed anyway (device, store, fonts, and system)</h2>
      <p>
        Even when an app collects little or no data itself, some information is still processed by{' '}
        <strong>your device</strong> and <strong>platform providers</strong>:
      </p>

      <h3>6.1 Google Play &amp; Android</h3>
      <p>
        When you install or update the App from <strong>Google Play</strong>, <strong>Google</strong>{' '}
        may process information such as:
      </p>
      <ul>
        <li>App install, update, and crash statistics (as offered in Play Console to developers);</li>
        <li>General device and region information;</li>
        <li>Compliance and security-related signals.</li>
      </ul>
      <p>
        That processing is governed by <strong>Google&rsquo;s Privacy Policy</strong> and related
        terms for Google Play and Android:{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          https://policies.google.com/privacy
        </a>
      </p>

      <h3>6.2 Fonts</h3>
      <p>
        Script lettering (Tangerine) is <strong>bundled with the App</strong>. Display and body
        typefaces may be loaded from <strong>Google Fonts</strong> when the device is online. That
        request is made to Google, not to our servers. See Google&rsquo;s privacy policy linked
        above.
      </p>

      <h3>6.3 Device storage &amp; permissions</h3>
      <p>The App may need ordinary access that Android grants to apps, for example to:</p>
      <ul>
        <li><strong>Show the user interface</strong> (text, images, buttons);</li>
        <li><strong>Save preferences and saved words</strong> locally on the device;</li>
        <li><strong>Speak text</strong> through the system text-to-speech service if you tap read aloud.</li>
      </ul>
      <p>
        We do <strong>not</strong> use the App to secretly turn on your <strong>microphone</strong>,
        or to read your <strong>contacts</strong> or <strong>photos</strong> for marketing. If a
        future version ever requested sensitive permissions, we would update this policy{' '}
        <strong>before</strong> release and explain <strong>why</strong> in the store listing.
      </p>

      <h2>7. Analytics, crash reporting, and similar tools</h2>
      <p>
        <strong>Current intent:</strong> we do <strong>not</strong> embed third-party{' '}
        <strong>analytics</strong> or <strong>crash-reporting</strong> SDKs that identify you
        personally for marketing.
      </p>
      <p>
        <strong>If that changes</strong> in a future update (for example, to fix bugs faster), we
        will:
      </p>
      <ul>
        <li>Update this Privacy Policy;</li>
        <li>Update the <strong>Google Play Data safety</strong> section accurately;</li>
        <li>Only use providers that offer appropriate contracts where required.</li>
      </ul>

      <h2>8. Links and related pages</h2>
      <p>
        The App may link to this website (for example, this policy or the{' '}
        <Link href={sitePath}>app information page</Link>). <strong>External websites</strong> have
        their own privacy practices. The general privacy notice for this portfolio website is at{' '}
        <Link href="/privacynotice">/privacynotice</Link> and applies to the site, not to use
        inside the App.
      </p>

      <h2>9. International users &amp; changes</h2>
      <ul>
        <li>
          Users may download the App from different countries. We operate from{' '}
          <strong>The Netherlands</strong> and process support requests as described when you contact
          us.
        </li>
        <li>
          We may update this Privacy Policy from time to time. The <strong>&ldquo;Last updated&rdquo;</strong>{' '}
          date at the top will change, and we will post the new version at the same web address you
          use for the store listing.
        </li>
        <li>
          <strong>Continued use</strong> of the App after an update means you accept the updated
          policy, unless local law requires a different approach.
        </li>
      </ul>

      <h2>10. Contact us</h2>
      <p>For privacy questions or requests, contact:</p>
      <p>
        <strong>{publisher}</strong>
        <br />
        Email: <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
        <br />
        App page: <Link href={sitePath}>https://raimonvibe.eu{sitePath}</Link>
        <br />
        Website: <a href="https://raimonvibe.eu/">https://raimonvibe.eu/</a>
      </p>
      <p>We will try to respond within a reasonable time.</p>

      <h2>11. No legal advice</h2>
      <p>
        This document is meant to help users understand our intentions. It is <strong>not</strong>{' '}
        legal advice. If you need advice about laws that apply to you (including GDPR, UK GDPR, or
        others), consult a qualified professional.
      </p>
    </>
  )
}
