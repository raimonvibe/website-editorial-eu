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
          The App has <strong>one</strong> way of sending anything to us: the{' '}
          <strong>contact form</strong> under <em>Study &rarr; Write to the maker</em>. Nothing
          leaves your device unless you write a letter and press send.{' '}
          <strong>Section 5</strong> says what it contains and who handles it.
        </li>
        <li>
          <strong>Google</strong> (as the operator of Google Play and related device services) may
          process certain information when you use the Play Store or Android — that processing is
          described by <strong>Google&rsquo;s own policies</strong>, not fully by this document.
        </li>
      </ul>
      <p>
        If anything here is unclear, contact us at the email in <strong>Section 11</strong>.
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
          or <strong>home address</strong> for normal use. The lexicon, the quiz, and read aloud
          never ask for any of it. The one exception is the <strong>contact form</strong> in{' '}
          <strong>Section 5</strong>, which asks for a name and an email address because a letter
          needs a signature and a reply needs somewhere to go;
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
        <li>Light, dark, or system theme preference;</li>
        <li>A letter you have written in the contact form but not sent.</li>
      </ul>
      <p>
        That information is <strong>not</strong> sent to us. Uninstalling the App typically removes
        it, unless Android or a backup service you use keeps a copy under its own policy.
      </p>

      <h2>5. Writing to us (the contact form)</h2>
      <p>
        Under <strong>Study &rarr; Write to the maker</strong> the App has a contact form. It is
        entirely optional: the lexicon, the quiz, saved words, and read aloud all work without it,
        and <strong>nothing is sent</strong> until you fill it in and press send.
      </p>
      <p>When you do press send, this is what is submitted:</p>
      <ul>
        <li>the <strong>name</strong> and <strong>email address</strong> you typed;</li>
        <li>your <strong>message</strong>;</li>
        <li>the <strong>reason</strong> and <strong>priority</strong> you chose from the lists;</li>
        <li>
          the <strong>language</strong> the App is set to, so that a reply can be written in it;
        </li>
        <li>
          and, <strong>only if you switch it on</strong>, one line of app details: version,
          language, light or dark, text size, and platform. It carries no advertising identifier
          and nothing that names your device, and the App prints that line on screen before it is
          attached, so you can read what you would be sending.
        </li>
      </ul>
      <p>
        <strong>Who handles it.</strong> The letter is submitted to{' '}
        <a href="https://formspree.io/" target="_blank" rel="noopener noreferrer">
          Formspree
        </a>{' '}
        (Formspree, Inc.), a form-handling service, which forwards it to{' '}
        <a href={`mailto:${supportEmail}`}>{supportEmail}</a>. Formspree is based in the{' '}
        <strong>United States</strong>, so a letter you send leaves the EEA. Their privacy policy
        is at{' '}
        <a
          href="https://formspree.io/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://formspree.io/legal/privacy-policy
        </a>
        . The same form receives letters written on the{' '}
        <Link href="/contact">contact page</Link> of this website.
      </p>
      <p>
        <strong>Why, and for how long.</strong> We use what you send for one purpose: to read your
        letter and answer it. We do not add you to a mailing list, and we do not sell it or pass it
        on for advertising. It stays in the mailbox for as long as it is useful for support and
        record-keeping. You can ask us to delete it at any time &mdash; see{' '}
        <strong>Section 11</strong>.
      </p>
      <p>
        <strong>What stays on your device.</strong> A letter you have started but not sent is kept
        on the device, so that a half-written thought is not lost when you close the App; it is
        removed when the letter is sent, or when you clear it. Just before sending, the App also
        copies the letter to your <strong>clipboard</strong>, so that nothing is lost if sending
        fails. If the form cannot be reached, the App offers to hand the same letter to{' '}
        <strong>your own mail app</strong> instead &mdash; and then it travels through your mail
        provider rather than through Formspree.
      </p>
      <p>
        The contact form is why the App asks for <strong>internet access</strong> on Android.
        Nothing else in the App sends anything, apart from the font request described in{' '}
        <strong>Section 7.2</strong>.
      </p>

      <h2>6. Speech (read aloud)</h2>
      <p>
        If you use <strong>read aloud</strong>, the App asks your device&rsquo;s built-in{' '}
        <strong>text-to-speech</strong> engine (on Android, often the system speech service) to speak
        the word and its meaning. The spoken text is processed on the <strong>device</strong> (or by
        the speech engine you have installed). We do <strong>not</strong> send that text to our
        servers. The speech engine you choose has its own privacy policy.
      </p>

      <h2>7. Information that may be processed anyway (device, store, fonts, and system)</h2>
      <p>
        Even when an app collects little or no data itself, some information is still processed by{' '}
        <strong>your device</strong> and <strong>platform providers</strong>:
      </p>

      <h3>7.1 Google Play &amp; Android</h3>
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

      <h3>7.2 Fonts</h3>
      <p>
        Script lettering (Tangerine) is <strong>bundled with the App</strong>. Display and body
        typefaces may be loaded from <strong>Google Fonts</strong> when the device is online. That
        request is made to Google, not to our servers. See Google&rsquo;s privacy policy linked
        above.
      </p>

      <h3>7.3 Device storage &amp; permissions</h3>
      <p>The App may need ordinary access that Android grants to apps, for example to:</p>
      <ul>
        <li><strong>Show the user interface</strong> (text, images, buttons);</li>
        <li><strong>Save preferences and saved words</strong> locally on the device;</li>
        <li><strong>Speak text</strong> through the system text-to-speech service if you tap read aloud;</li>
        <li>
          <strong>Reach the internet</strong>, to submit a letter from the contact form and to load
          the display fonts described above.
        </li>
      </ul>
      <p>
        We do <strong>not</strong> use the App to secretly turn on your <strong>microphone</strong>,
        or to read your <strong>contacts</strong> or <strong>photos</strong> for marketing. If a
        future version ever requested sensitive permissions, we would update this policy{' '}
        <strong>before</strong> release and explain <strong>why</strong> in the store listing.
      </p>

      <h2>8. Analytics, crash reporting, and similar tools</h2>
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

      <h2>9. Links and related pages</h2>
      <p>
        The App may link to this website (for example, this policy or the{' '}
        <Link href={sitePath}>app information page</Link>). <strong>External websites</strong> have
        their own privacy practices. The general privacy notice for this portfolio website is at{' '}
        <Link href="/privacynotice">/privacynotice</Link> and applies to the site, not to use
        inside the App.
      </p>

      <h2>10. International users &amp; changes</h2>
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

      <h2>11. Contact us</h2>
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

      <h2>12. No legal advice</h2>
      <p>
        This document is meant to help users understand our intentions. It is <strong>not</strong>{' '}
        legal advice. If you need advice about laws that apply to you (including GDPR, UK GDPR, or
        others), consult a qualified professional.
      </p>
    </>
  )
}
