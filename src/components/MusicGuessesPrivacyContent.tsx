import Link from 'next/link'
import { MUSIC_GUESSES } from '@/data/music-guesses'

export default function MusicGuessesPrivacyContent() {
  const { name, packageName, publisher, supportEmail, lastUpdated, sitePath } = MUSIC_GUESSES

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
        <strong>Publisher:</strong> {publisher} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;)
      </p>
      <p>
        This Privacy Policy describes how <strong>{name}</strong> (&ldquo;the App&rdquo;) handles
        information when you download or use the App on an Android device. We aim to keep things
        simple, especially for families.
      </p>

      <h2>1. Summary (plain language)</h2>
      <ul>
        <li>
          <strong>{name} is free and ad-free</strong> in the way we intend to offer it: we do{' '}
          <strong>not</strong> show third-party advertising inside the App based on your personal
          profile, and we do <strong>not</strong> sell your personal information.
        </li>
        <li>
          The App is a <strong>local quiz game</strong> (listen to a sound, look at a picture, tap
          True or False). It is <strong>not</strong> designed to require you to create an account
          inside the App to play.
        </li>
        <li>
          <strong>We do not knowingly collect personal information from children</strong> through
          the App for our own marketing or profiling.
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
          Ask you to <strong>register</strong> or <strong>log in</strong> inside the App to play the
          basic quiz;
        </li>
        <li>Include a <strong>chat</strong> or <strong>social feed</strong>;</li>
        <li>
          Ask for your <strong>name</strong>, <strong>email</strong>, <strong>phone number</strong>,
          or <strong>home address</strong> inside the App for normal gameplay;
        </li>
        <li>Run <strong>behavioural advertising</strong> or <strong>ad tracking</strong> inside the App.</li>
      </ul>
      <p>
        The quiz content (for example, <strong>instrument sounds</strong> and <strong>pictures</strong>)
        is <strong>bundled with the App</strong> or loaded from the App package as part of normal
        operation.
      </p>

      <h2>4. Information that may be processed anyway (device, store, and system)</h2>
      <p>
        Even when an app collects little or no data itself, some information is still processed by{' '}
        <strong>your device</strong> and <strong>platform providers</strong>:
      </p>

      <h3>4.1 Google Play &amp; Android</h3>
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

      <h3>4.2 Device storage &amp; permissions</h3>
      <p>The App may need ordinary access that Android grants to apps, for example to:</p>
      <ul>
        <li><strong>Play audio</strong> from bundled assets;</li>
        <li><strong>Show the user interface</strong> (images, buttons).</li>
      </ul>
      <p>
        We do <strong>not</strong> use the App to secretly turn on your <strong>microphone</strong> to
        listen to your home, or to read your <strong>contacts</strong> or <strong>photos</strong> for
        marketing. If a future version ever requested sensitive permissions, we would update this
        policy <strong>before</strong> release and explain <strong>why</strong> in the store listing.
      </p>

      <h2>5. Analytics, crash reporting, and similar tools</h2>
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

      <h2>6. Children&rsquo;s privacy (families)</h2>
      <p>
        <strong>{name}</strong> is suitable for <strong>children with adult supervision</strong>. We
        do <strong>not</strong> knowingly ask children to provide <strong>contact details</strong> or
        other <strong>personal information</strong> inside the App for us to use in marketing.
      </p>
      <p>
        If you are a parent or guardian and believe your child has sent us personal information (for
        example, through a support email), contact us at <strong>Section 10</strong> and we will
        delete that information where we are reasonably able to do so.
      </p>
      <p>
        Parents and teachers remain responsible for <strong>safe device use</strong> (volume, screen
        time, and supervision).
      </p>

      <h2>7. Content credits &amp; third-party materials</h2>
      <p>The App may include:</p>
      <ul>
        <li>
          <strong>Images</strong> created with <strong>Nano Banana</strong> by <strong>Google Gemini</strong>;
        </li>
        <li>
          <strong>Sounds</strong> sourced from <strong>Freesound</strong> and/or other licensed or
          bundled recordings as described in the store listing.
        </li>
      </ul>
      <p>
        Those materials are part of the App experience. <strong>Their providers</strong> have their
        own terms and policies if you visit their websites or services <strong>outside</strong> the
        App.
      </p>

      <h2>8. Links and related pages</h2>
      <p>
        The App may link to this website (for example, this policy or the{' '}
        <Link href={sitePath}>app information page</Link>). <strong>External websites</strong> have
        their own privacy practices. The general privacy notice for this portfolio website is at{' '}
        <Link href="/privacynotice">/privacynotice</Link> and applies to the site, not to gameplay
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
      <p>For privacy questions or requests (including parental requests), contact:</p>
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
        This document is meant to help users and families understand our intentions. It is{' '}
        <strong>not</strong> legal advice. If you need advice about laws that apply to you (including
        GDPR, UK GDPR, COPPA, or others), consult a qualified professional.
      </p>
    </>
  )
}
