import { Metadata } from 'next'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Certificates - Raimonvibe',
  description: 'View Raimon\'s professional certificates and achievements in web development and technology.',
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
            
            <div className="posts">
              <article>
                <a href="#" className="image">
                  <Image src="/images/csharpadvanced.webp" alt="C# Advanced Certificate" width={400} height={300} />
                </a>
                <h3>C# Advanced</h3>
                <p>Advanced certification in C# programming language covering complex topics and best practices.</p>
              </article>
              
              <article>
                <a href="#" className="image">
                  <Image src="/images/CSharp.webp" alt="C# Certificate" width={400} height={300} />
                </a>
                <h3>C# Programming</h3>
                <p>Fundamental certification in C# programming language and .NET framework.</p>
              </article>
              
              <article>
                <a href="#" className="image">
                  <Image src="/images/CSharpUnitTesting.webp" alt="C# Unit Testing Certificate" width={400} height={300} />
                </a>
                <h3>C# Unit Testing</h3>
                <p>Certification in unit testing practices and frameworks for C# applications.</p>
              </article>
              
              <article>
                <a href="#" className="image">
                  <Image src="/images/JavaScript1.webp" alt="JavaScript Certificate" width={400} height={300} />
                </a>
                <h3>JavaScript Fundamentals</h3>
                <p>Core JavaScript programming concepts and modern ES6+ features.</p>
              </article>
              
              <article>
                <a href="#" className="image">
                  <Image src="/images/JavaScript2.webp" alt="Advanced JavaScript Certificate" width={400} height={300} />
                </a>
                <h3>Advanced JavaScript</h3>
                <p>Advanced JavaScript concepts including async programming and modern frameworks.</p>
              </article>
              
              <article>
                <a href="#" className="image">
                  <Image src="/images/WebDevelopment.webp" alt="Web Development Certificate" width={400} height={300} />
                </a>
                <h3>Web Development</h3>
                <p>Comprehensive web development certification covering frontend and backend technologies.</p>
              </article>
            </div>
          </section>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}
