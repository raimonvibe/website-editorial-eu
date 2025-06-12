import type { Metadata } from 'next'
import { Open_Sans, Roboto_Slab } from 'next/font/google'
import '../styles/globals.css'

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
      { url: '/icons/16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/180x180.png', sizes: '180x180', type: 'image/png' },
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="canonical" href="https://raimonvibe.eu/" />
        <link rel="alternate" hrefLang="en" href="https://raimonvibe.eu" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${openSans.variable} ${robotoSlab.variable}`}>{children}</body>
    </html>
  )
}
