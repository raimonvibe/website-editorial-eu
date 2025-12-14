import { Metadata } from 'next'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Certificates - Raimonvibe',
  description: 'View my professional certificates and qualifications in programming, web development, and more. Continuous learning and skill development.',
  keywords: 'certificates, programming, web development, JavaScript, React, Next.js, professional development',
  openGraph: {
    title: 'Certificates - Raimonvibe',
    description: 'View my professional certificates and qualifications in programming, web development, and more.',
  },
  twitter: {
    title: 'Certificates - Raimonvibe',
    description: 'View my professional certificates and qualifications in programming, web development, and more.',
  },
}

export default function Certificates() {
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header title="Certificates" />
          
          <section>
            <header className="main">
              <h1>Certificates</h1>
            </header>
            
            <p>Here are my professional certificates and qualifications that demonstrate my commitment to continuous learning and skill development. Each certificate represents knowledge gained through comprehensive courses in programming, web development, and other technical fields.</p>
         
            <div className="posts">
              <article>
                <a href="https://codewithmosh.com/p/javascript-basics-for-beginners" className="image">
                  <Image src="/images/JavaScript1.webp" alt="My JavaScript 1 certificate" width={400} height={300} />
                </a>
                <h3>JavaScript 1</h3>
                <p>In this course, I learned the fundamentals of JavaScript programming, including variables, functions, control structures, and DOM manipulation. This course laid the groundwork for my web development journey.</p>
                <ul className="actions">
                  <li><a href="https://codewithmosh.com/p/javascript-basics-for-beginners" className="button" target="_blank" rel="noreferrer">More</a></li>
                </ul>
              </article>

              <article>
                <a href="https://codewithmosh.com/p/object-oriented-programming-in-javascript" className="image">
                  <Image src="/images/JavaScript2.webp" alt="My JavaScript 2 certificate" width={400} height={300} />
                </a>
                <h3>JavaScript 2</h3>
                <p>Building on JavaScript 1, this advanced course covered more complex topics like object-oriented programming, asynchronous programming, and modern JavaScript features (ES6+).</p>
                <ul className="actions">
                  <li><a href="https://codewithmosh.com/p/object-oriented-programming-in-javascript" className="button" target="_blank" rel="noreferrer">More</a></li>
                </ul>
              </article>

              <article>
                <a href="https://codewithmosh.com/p/the-ultimate-html-css" className="image">
                  <Image src="/images/HTML_CSS.webp" alt="My HTML and CSS certificate" width={400} height={300} />
                </a>
                <h3>HTML5 &amp; CSS3</h3>
                <p>In this course series, I learned HTML5 and CSS3, the foundational languages for building a website.</p>
                <ul className="actions">
                  <li><a href="https://codewithmosh.com/p/the-ultimate-html-css" className="button" target="_blank" rel="noreferrer">More</a></li>
                </ul>
              </article>

              <article>
                <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/" className="image">
                  <Image src="/images/WebDevelopment.webp" alt="My Web Development certificate" width={400} height={300} />
                </a>
                <h3>Web Development</h3>
                <p>In this comprehensive Web Development bootcamp, I learned how to program a website from the basics to more advanced topics. Covered subjects include developing dynamic websites with a database and authentication features.</p>
                <ul className="actions">
                  <li><a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/" className="button" target="_blank" rel="noreferrer">More</a></li>
                </ul>
              </article>

              <article>
                <a href="https://www.udemy.com/course/assertiveness-training-course/" className="image">
                  <Image src="/images/assertive.webp" alt="My Assertiveness certificate" width={400} height={300} />
                </a>
                <h3>Assertiveness</h3>
                <p>This course helped me develop assertive communication skills, which are essential in both professional and personal situations.</p>
                <ul className="actions">
                  <li><a href="https://www.udemy.com/course/assertiveness-training-course/" className="button" target="_blank" rel="noreferrer">More</a></li>
                </ul>
              </article>

              <article>
                <a href="https://products.thecodedose.com/javascript-mastery" className="image">
                  <Image src="/images/javascript_mastery.webp" alt="My JavaScript Mastery certificate" width={400} height={300} />
                </a>
                <h3>JavaScript Mastery</h3>
                <p>I completed the JavaScript Mastery course from The Code Dose, which helped refresh my memory and improve my understanding of both fundamental and advanced JavaScript concepts.</p>
                <ul className="actions">
                  <li><a href="https://products.thecodedose.com/javascript-mastery" className="button" target="_blank" rel="noreferrer">More</a></li>
                </ul>
              </article>
           
              <article>
                <a href="https://codewithmosh.com/p/ultimate-nextjs-series" className="image">
                  <Image src="/images/nextjs1.webp" alt="My certificate for mastering Next.js 13 with TypeScript" width={400} height={300} />
                </a>
                <h3>Next.js</h3>
                <p>In this course, I learned to use Next.js 13 with TypeScript to build scalable and fast applications, utilizing techniques like server-side rendering, dynamic routing, and API routes.</p>
                <ul className="actions">
                  <li><a href="https://codewithmosh.com/p/ultimate-nextjs-series" className="button" target="_blank" rel="noreferrer">More</a></li>
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
