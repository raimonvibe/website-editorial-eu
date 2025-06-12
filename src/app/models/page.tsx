import { Metadata } from 'next'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '3D Models - Raimonvibe',
  description: 'Explore Raimon\'s 3D modeling work and creative digital art projects.',
}

export default function Models() {
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header title="3D Models" />
          
          <section>
            <header className="main">
              <h1>3D Library</h1>
            </header>
            
            <div className="posts">
              <article>
                <a href="https://cults3d.com/en/users/raimonvibe/3d-models" className="image">
                  <Image src="/images/cults.png" alt="A coaster with a monkey design." width={400} height={300} />
                </a>
                <h3>Personalized 3D Earrings Made to Order</h3>
                <p>
                  Are you interested in unique, custom-made 3D earrings? I specialize in designing custom 3D earring models that perfectly match your style. If you want a personal and unique design made, I'm here to bring your ideas to life. Don't hesitate to get in touch for a custom design. For more information or to get in touch, visit my <Link href="/contact" aria-label="Visit the contact page">contact page</Link>, where you can find my email address.
                </p>
                <ul className="actions">
                  <li><a href="https://cults3d.com/en/users/raimonvibe/3d-models" target="_blank" rel="noreferrer" className="button" aria-label="Visit the 3D webshop of Raimonvibe">3D</a></li>
                </ul>
              </article>

              <article>
                <a href="https://zaap.bio/raimonvibe/3d-model-monkey-drinkcoaster-" className="image">
                  <Image src="/images/monkeys.webp" alt="A coaster with a monkey design." width={400} height={300} />
                </a>
                <h3>Monkey Coaster</h3>
                <p>A beautiful set of coasters featuring a monkey design. The download includes two files.</p>
                <ul className="actions">
                  <li><a href="https://zaap.bio/raimonvibe/3d-model-monkey-drinkcoaster-" target="_blank" rel="noreferrer" className="button" aria-label="Download free monkey coaster 3D model">Free!</a></li>
                </ul>
              </article>

              <article>
                <a href="https://zaap.bio/raimonvibe/3d-model-christas-deer-ornament-" className="image">
                  <Image src="/images/deer.webp" alt="A Christmas deer ornament, very funny!" width={400} height={300} />
                </a>
                <h3>Christmas Deer Ornament</h3>
                <p>A Christmas deer ornament. Ideal for Christmas ☃️. Give your Christmas tree a cheerful look with this beautiful decoration!</p>
                <ul className="actions">
                  <li><a href="https://zaap.bio/raimonvibe/3d-model-christas-deer-ornament-" target="_blank" rel="noreferrer" className="button" aria-label="Download free Christmas deer ornament 3D model">Free!</a></li>
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
            </div>
          </section>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}
