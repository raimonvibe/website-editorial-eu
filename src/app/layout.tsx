import type { Metadata } from 'next'
import { Open_Sans, Roboto_Slab } from 'next/font/google'
import '../styles/globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import PrayerChatWidget from '@/components/PrayerChatWidget'


const openSans = Open_Sans({ 
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-open-sans'
})

const robotoSlab = Roboto_Slab({
  subsets: ['latin'], 
  weight: ['400', '700'],
  variable: '--font-roboto-slab'
})

export const metadata: Metadata = {
  title: 'Raimonvibe Editorial',
  description: 'Discover custom-made digital artworks with Raimon, your freelance web designer and developer from West Friesland. Specialist in responsive design and master of HTML, CSS, and JavaScript.',
  keywords: 'freelance web designer, web developer, responsive web design, HTML, CSS, JavaScript, digital art, Raimon, custom websites, Netherlands, West Friesland',
  openGraph: {
    title: 'Home - raimonvibe',
    description: 'Technical Researcher',
    images: [
      {
        url: 'https://raimonvibe.eu/images/cover.webp',
        width: 966,
        height: 1320,
        alt: 'Raimonvibe Cover Image',
      },
    ],
    url: 'https://www.raimonvibe.eu/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home - raimonvibe',
    description: 'Technical Researcher',
    images: ['https://raimonvibe.eu/images/cover.webp'],
  },
   icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: '/apple-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/icon.png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/fontawesome-all.min.css" />
          <link rel="canonical" href="https://raimonvibe.eu/" />
        <link rel="alternate" hrefLang="en" href="https://raimonvibe.eu" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${openSans.variable} ${robotoSlab.variable} is-preload dark:bg-gray-900 dark:text-gray-100`}>
        <ThemeProvider>
          <div id="wrapper">
            {children}
          </div>
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                setTimeout(function() {
                  document.body.classList.remove('is-preload');
                }, 100);
              });
            `
          }}
        />
        <script src="/js/jquery.min.js"></script>
        <script src="/js/browser.min.js"></script>
        <script src="/js/breakpoints.min.js"></script>
        <script src="/js/util.js"></script>
        <script src="/js/main.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (window.heap = window.heap || []),
              (heap.load = function (e, t) {
                  (window.heap.appid = e), (window.heap.config = t = t || {});
                  var r = document.createElement("script");
                  (r.type = "text/javascript"),
                  (r.async = !0),
                  (r.src = "https://cdn.heapanalytics.com/js/heap-" + e + ".js");
                  var a = document.getElementsByTagName("script")[0];
                  a.parentNode.insertBefore(r, a);
                  for (
                      var n = function (e) {
                          return function () {
                              heap.push(
                                  [e].concat(Array.prototype.slice.call(arguments, 0))
                              );
                          };
                      },
                      p = [
                          "addEventProperties",
                          "addUserProperties",
                          "clearEventProperties",
                          "identify",
                          "resetIdentity",
                          "removeEventProperty",
                          "setEventProperties",
                          "track",
                          "unsetEventProperty",
                      ],
                      o = 0;
                      o < p.length;
                      o++
                  )
                      heap[p[o]] = n(p[o]);
              });
              heap.load("2918829767");
            `
}}
        />

        <script dangerouslySetInnerHTML={{ __html: `heap.load(...)` }} />

        <PrayerChatWidget />

      </body>
    </html>
  )
}
