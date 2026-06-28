import { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { SCRIPTURE_READERS } from '@/data/scripture-readers'

export const metadata: Metadata = {
  title: 'Scripture Readers - Raimonvibe',
  description:
    'Online scripture readers for the Tanach, Holy Bible, Bible Stories for Children, Book of Mormon, Apocrypha, and Lost Scriptures.',
}

export default function ScriptureReaders() {
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header title="Scripture Readers" />

          <section>
            <header className="major">
              <h2>Scripture Readers</h2>
            </header>
            <p>
              A collection of online readers for sacred texts — from the Jewish Tanach and
              Christian Bible to apocryphal writings and scholarly editions. Each reader offers
              search, chapter navigation, and a clean reading experience.
            </p>
            <div className="posts">
              {SCRIPTURE_READERS.map((reader) => (
                <article key={reader.id}>
                  <a href={reader.url} target="_blank" rel="noopener noreferrer" className="image">
                    <Image
                      src={reader.image}
                      alt={reader.alt}
                      width={400}
                      height={300}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </a>
                  <h3>{reader.title}</h3>
                  <p>{reader.description}</p>
                  <ul className="actions">
                    <li>
                      <a
                        href={reader.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button"
                      >
                        {reader.buttonText}
                      </a>
                    </li>
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}
