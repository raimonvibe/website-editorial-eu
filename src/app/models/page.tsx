import { Metadata } from 'next'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '3D Models - Raimonvibe',
  description: 'Explore our collection of unique 3D models including jewelry, keychains, decorative items, and more. Download free models or purchase premium designs.',
  keywords: '3D models, 3D printing, jewelry, earrings, keychains, decorative items, STL files, Cults3D, Raimonvibe',
  openGraph: {
    title: '3D Models - Raimonvibe',
    description: 'Explore our collection of unique 3D models including jewelry, keychains, decorative items, and more.',
    url: 'https://www.raimonvibe.com/models',
    siteName: 'Raimonvibe',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D Models - Raimonvibe',
    description: 'Explore our collection of unique 3D models including jewelry, keychains, decorative items, and more.',
  },
}

export default function Models() {
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header title="3D Models" />
          
          <section>
            <header className="main">
              <h1>3D Models</h1>
            </header>
            
            <div className="posts">
              <article>
                <a href="https://cults3d.com/en/users/raimonvibe/creations" className="image">
                  <Image src="/images/cults.png" alt="Personalized 3D earrings with custom design" width={400} height={300} />
                </a>
                <h3>Personalized 3D Earrings</h3>
                <p>
                  Unique and personalized 3D-printed earrings designed to make a statement. Perfect for special occasions or everyday wear.
                </p>
                <ul className="actions">
                  <li><a href="https://cults3d.com/en/users/raimonvibe/creations" target="_blank" rel="noreferrer" className="button" aria-label="Buy personalized 3D earrings">3D Cults</a></li>
                </ul>
              </article>

              <article>
                <a href="https://cults3d.com/en/3d-model/home/monkey-drink-coaster-pair" className="image">
                  <Image src="/images/monkeys.webp" alt="Monkey-themed coaster for drinks" width={400} height={300} />
                </a>
                <h3>Monkey Coaster</h3>
                <p>A fun and functional coaster featuring a playful monkey design. Perfect for protecting your furniture while adding character to your space.</p>
                <ul className="actions">
                  <li><a href="https://cults3d.com/en/3d-model/home/monkey-drink-coaster-pair" target="_blank" rel="noreferrer" className="button" aria-label="Download free monkey coaster 3D model">Free!</a></li>
                </ul>
              </article>

              <article>
                <a href="https://cults3d.com/en/3d-model/home/christmas-deer-ornament-raimonvibe" className="image">
                  <Image src="/images/deer.webp" alt="Christmas deer ornament for holiday decoration" width={400} height={300} />
                </a>
                <h3>Christmas Deer Ornament</h3>
                <p>A beautiful Christmas ornament featuring an elegant deer design. Add a touch of nature to your holiday decorations.</p>
                <ul className="actions">
                  <li><a href="https://cults3d.com/en/3d-model/home/christmas-deer-ornament-raimonvibe" target="_blank" rel="noreferrer" className="button" aria-label="Download free Christmas deer ornament 3D model">Free!</a></li>
                </ul>
              </article>

              <article>
                <a href="https://cults3d.com/en/3d-model/jewelry/cat-earrings-v6-raimonvibe" className="image">
                  <Image src="/images/cat-v6-final.webp" alt="A beautiful 3D model an earring in the shape of a cat" width={400} height={300} />
                </a>
                <h3>Cat Earrings</h3>
                <p>An unique earring in the shape of a cat. The cat has a nice long tail. Perfect for that someone special or a gift to yourself.</p>
                <ul className="actions">
                  <li><a href="https://cults3d.com/en/3d-model/jewelry/cat-earrings-v6-raimonvibe" target="_blank" rel="noreferrer" className="button" aria-label="Buy cat earrings 3D model">€0.50,-</a></li>
                </ul>
              </article>

              <article>
                <a href="https://cults3d.com/en/3d-model/home/unicorn-keychain-raimonvibe" className="image">
                  <Image src="/images/unicorn.webp" alt="A unicorn keychain." width={400} height={300} />
                </a>
                <h3>Unicorn Keychain</h3>
                <p>Add a touch of magic to your keys with this adorable 3D-printed unicorn keychain! 🦄 It's the perfect accessory for unicorn lovers everywhere.</p>
                <ul className="actions">
                  <li><a href="https://cults3d.com/en/3d-model/home/unicorn-keychain-raimonvibe" target="_blank" rel="noreferrer" className="button" aria-label="Download free unicorn keychain 3D model">Free!</a></li>
                </ul>
              </article>

              <article>
                <a href="https://cults3d.com/en/3d-model/jewelry/roses-earrings" className="image">
                  <Image src="/images/roses.webp" alt="A set of roses earrings" width={400} height={300} />
                </a>
                <h3>Rose Earrings</h3>
                <p>Add a touch of nature-inspired elegance to your style with these beautiful 3D-printed rose earrings. 🌹 The design features two distinct rose patterns.</p>
                <ul className="actions">
                  <li><a href="https://cults3d.com/en/3d-model/jewelry/roses-earrings" target="_blank" rel="noreferrer" className="button" aria-label="Download free roses earrings 3D model">Free!</a></li>
                </ul>
              </article>

              <article>
                <a href="https://cults3d.com/en/3d-model/jewelry/butterfly-earrings-raimonvibe" className="image">
                  <Image src="/images/butterfly.webp" alt="This is an earring in the shape of a butterfly" width={400} height={300} />
                </a>
                <h3>Butterfly Earrings</h3>
                <p>Add a special touch to your look with these delicate 3D-printed butterfly earrings. 🦋 The intricate design captures the elegance of a butterfly in flight, perfect for anyone who loves nature-inspired jewelry.</p>
                <ul className="actions">
                  <li><a href="https://cults3d.com/en/3d-model/jewelry/butterfly-earrings-raimonvibe" target="_blank" rel="noreferrer" className="button" aria-label="Download free butterfly earrings 3D model">Free!</a></li>
                </ul>
              </article>

              <article>
                <a href="https://cults3d.com/en/3d-model/home/alien-keychain-raimonvibe" className="image">
                  <Image src="/images/alien.webp" alt="This is a keychain with an alien shape" width={400} height={300} />
                </a>
                <h3>Alien Keychain</h3>
                <p>This is a keychain with an alien shape. Print it in your favorite color or material.</p>
                <ul className="actions">
                  <li><a href="https://cults3d.com/en/3d-model/home/alien-keychain-raimonvibe" target="_blank" rel="noreferrer" className="button" aria-label="Download free alien keychain 3D model">Free!</a></li>
                </ul>
              </article>

              <article>
                <a href="https://cults3d.com/en/3d-model/home/tray-owl-voronoi" className="image">
                  <Image src="/images/owl-bowl.webp" alt="Bowl with at the bottom an owl pattern" width={400} height={300} />
                </a>
                <h3>Owl Bowl</h3>
                <p>This bowl is trendy, and handy at the same time. Use this bowl to house your keys, wallet, office tools, etc. The bottom of the bowl has an owl pattern. Keep the bowl for yourself or give it to someone (special). The bowl has also a voronoi pattern.</p>
                <ul className="actions">
                  <li><a href="https://cults3d.com/en/3d-model/home/tray-owl-voronoi" target="_blank" rel="noreferrer" className="button" aria-label="Buy owl bowl 3D model">€0,50,-</a></li>
                </ul>
              </article>

              <article>
                <a href="https://cults3d.com/en/3d-model/home/buddha-coaster" className="image">
                  <Image src="/images/buddha.webp" alt="Inspiring Buddha Coaster" width={400} height={300} />
                </a>
                <h3>Buddha Coaster</h3>
                <p>Style your home with this inspiring Buddha coaster. Just right as a gift to your loved one(s) or to yourself.</p>
                <ul className="actions">
                  <li><a href="https://cults3d.com/en/3d-model/home/buddha-coaster" target="_blank" rel="noreferrer" className="button">Free!</a></li>
                </ul>
              </article>

              <article>
                <a href="https://cults3d.com/en/3d-model/art/voronoi-male-torso" className="image">
                  <Image src="/images/male.webp" alt="Beautiful male torso with voronoi pattern" width={400} height={300} />
                </a>
                <h3>Male Torso</h3>
                <p>Beautiful male torso with voronoi pattern. A stylish decoration for your bookshelf. Perfect for someone special or a gift to yourself.</p>
                <ul className="actions">
                  <li><a href="https://cults3d.com/en/3d-model/art/voronoi-male-torso" target="_blank" rel="noreferrer" className="button">Free!</a></li>
                </ul>
              </article>


              <article>
                <a href="https://cults3d.com/en/3d-model/home/geometrical-horse-keychain" className="image">
                  <Image src="/images/horse.webp" alt="A beautiful 3D model a key chain in the shape of a horse" width={400} height={300} />
                </a>
                <h3>Horse Keychain</h3>
                <p>A unique keychain in the shape of a horse with geometric shapes. Perfect for someone special or a gift to yourself.</p>
                <ul className="actions">
                  <li><a href="https://cults3d.com/en/3d-model/home/geometrical-horse-keychain" target="_blank" rel="noreferrer" className="button">Free!</a></li>
                </ul>
              </article>

              <article>
                <a href="https://cults3d.com/en/3d-model/jewelry/cat-v3-earrings" className="image">
                  <Image src="/images/Cat-v3-final.webp" alt="A beautiful 3D model an earring in the shape of a cat" width={400} height={300} />
                </a>
                <h3>Cat Earrings (v3)</h3>
                <p>An unique earring in the shape of a cat. Perfect for that someone special or a gift to yourself.</p>
                <ul className="actions">
                  <li><a href="https://cults3d.com/en/3d-model/jewelry/cat-v3-earrings" target="_blank" rel="noreferrer" className="button">Order $0.50,-</a></li>
                </ul>
              </article>
            </div>
          </section>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}
