import { Metadata } from 'next'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Certificates - Raimonvibe',
  description: 'View my professional certificates and qualifications in programming, web development, data science, and more. Continuous learning and skill development.',
  keywords: 'certificates, programming, web development, Python, JavaScript, React, Next.js, data science, machine learning, professional development',
  openGraph: {
    title: 'Certificates - Raimonvibe',
    description: 'View my professional certificates and qualifications in programming, web development, data science, and more.',
    url: 'https://www.raimonvibe.com/certificates',
    siteName: 'Raimonvibe',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Certificates - Raimonvibe',
    description: 'View my professional certificates and qualifications in programming, web development, data science, and more.',
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
            
            <p>Here are my professional certificates and qualifications that demonstrate my commitment to continuous learning and skill development. Each certificate represents knowledge gained through comprehensive courses in programming, web development, data science, and other technical fields.</p>
            
            <div className="posts">
              <article>
                <a href="https://codewithmosh.com/p/programming-fundamentals" className="image">
                  <Image src="/images/Pre-Programming.webp" alt="My Pre-Programming certificate" width={400} height={300} />
                </a>
                <h3>Pre-Programming</h3>
                <p>This course provided me with a solid foundation in programming concepts before diving into specific programming languages. It covered fundamental topics like problem-solving, logic, and computational thinking.</p>
                <ul className="actions">
                  <li><a href="https://codewithmosh.com/p/programming-fundamentals" className="button" target="_blank" rel="noreferrer">More</a></li>
                </ul>
              </article>

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
                <a href="https://codewithmosh.com/p/python-programming-course-beginners" className="image">
                  <Image src="/images/Python.webp" alt="My Python certificate" width={400} height={300} />
                </a>
                <h3>Python Mastery</h3>
                <p>This course provides a complete overview of the applications that can be built using the Python programming language. Programming fundamentals, web development, and machine learning are all covered in this course.</p>
                <ul className="actions">
                  <li><a href="https://codewithmosh.com/p/python-programming-course-beginners" className="button" target="_blank" rel="noreferrer">More</a></li>
                </ul>
              </article>

              <article>
                <a href="https://www.udemy.com/course/python-tableau/" className="image">
                  <Image src="/images/Python_Tableau.webp" alt="My Python and Tableau certificate" width={400} height={300} />
                </a>
                <h3>Python &amp; Tableau</h3>
                <p>In this course, I learned how to use Python in combination with Tableau for data analysis and visualization.</p>
                <ul className="actions">
                  <li><a href="https://www.udemy.com/course/python-tableau/" className="button" target="_blank" rel="noreferrer">More</a></li>
                </ul>
              </article>

              <article>
                <a href="https://www.udemy.com/course/flutter-bootcamp-with-dart/" className="image">
                  <Image src="/images/Flutter.webp" alt="My Flutter certificate" width={400} height={300} />
                </a>
                <h3>Flutter</h3>
                <p>Flutter is an open-source UI software development kit created by Google. It is used to develop cross-platform applications for Android, iOS, Linux, macOS, Windows, Google Fuchsia, and the web from a single codebase.</p>
                <ul className="actions">
                  <li><a href="https://www.udemy.com/course/flutter-bootcamp-with-dart/" className="button" target="_blank" rel="noreferrer">More</a></li>
                </ul>
              </article>

              <article>
                <a href="https://codewithmosh.com/p/ultimate-java-part-1" className="image">
                  <Image src="/images/Java1.webp" alt="My Java 1 certificate" width={400} height={300} />
                </a>
                <h3>Java 1</h3>
                <p>In Java 1, I learned the basics of programming in Java. It is a powerful language, suitable for developing large applications, and runs on a virtual machine.</p>
                <ul className="actions">
                  <li><a href="https://codewithmosh.com/p/ultimate-java-part-1" className="button" target="_blank" rel="noreferrer">More</a></li>
                </ul>
              </article>

              <article>
                <a href="https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/" className="image">
                  <Image src="/images/dsa.webp" alt="My certificate in Data Structures and Algorithms" width={400} height={300} />
                </a>
                <h3>Data Structures &amp; Algorithms</h3>
                <p>Data Structures are ways to organize and store data, while algorithms are sets of instructions used to solve problems or perform tasks. Understanding both is crucial for designing efficient software solutions.</p>
                <ul className="actions">
                  <li><a href="https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/" className="button" target="_blank" rel="noreferrer">More</a></li>
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
                <a href="https://www.udemy.com/course/artificial-intelligence-az/" className="image">
                  <Image src="/images/ai.webp" alt="My AI certificate" width={400} height={300} />
                </a>
                <h3>Artificial Intelligence</h3>
                <p>This course provided a comprehensive introduction to Artificial Intelligence, including machine learning, neural networks, and deep learning.</p>
                <ul className="actions">
                  <li><a href="https://www.udemy.com/course/artificial-intelligence-az/" className="button" target="_blank" rel="noreferrer">More</a></li>
                </ul>
              </article>

              <article>
                <a href="https://www.udemy.com/course/criminology-made-easy/" className="image">
                  <Image src="/images/criminology.webp" alt="My Criminology certificate" width={400} height={300} />
                </a>
                <h3>Criminology</h3>
                <p>This course offered insights into the study of crime, criminal behavior, and law enforcement, which provides valuable perspectives for software development in security and compliance-related applications.</p>
                <ul className="actions">
                  <li><a href="https://www.udemy.com/course/criminology-made-easy/" className="button" target="_blank" rel="noreferrer">More</a></li>
                </ul>
              </article>

              <article>
                <a href="https://www.udemy.com/course/complete-guide-to-tensorflow-for-deep-learning-with-python/" className="image">
                  <Image src="/images/tensorflow.webp" alt="My TensorFlow certificate" width={400} height={300} />
                </a>
                <h3>TensorFlow</h3>
                <p>TensorFlow is an open-source software library for machine learning and artificial intelligence. In this course, I learned how to use TensorFlow for building and training machine learning models.</p>
                <ul className="actions">
                  <li><a href="https://www.udemy.com/course/complete-guide-to-tensorflow-for-deep-learning-with-python/" className="button" target="_blank" rel="noreferrer">More</a></li>
                </ul>
              </article>

              <article>
                <a href="https://www.udemy.com/course/git-and-github-bootcamp/" className="image">
                  <Image src="/images/git.webp" alt="My Git certificate" width={400} height={300} />
                </a>
                <h3>Git</h3>
                <p>Git is a distributed version control system. In this course, I learned how to effectively use Git to manage code changes and collaborate on software projects.</p>
                <ul className="actions">
                  <li><a href="https://www.udemy.com/course/git-and-github-bootcamp/" className="button" target="_blank" rel="noreferrer">More</a></li>
                </ul>
              </article>

              <article>
                <a href="https://codewithmosh.com/p/the-ultimate-django-series" className="image">
                  <Image src="/images/django-1.webp" alt="My certificate in Django Backend Development Part 1" width={400} height={300} />
                </a>
                <h3>Django Part 1</h3>
                <p>In the first part of the 'Ultimate Django Series,' I dove into the essentials of web development with Python and Django. I learned how to set up MySQL, manage databases with Django migrations, and use Django models for database interactions.</p>
                <ul className="actions">
                  <li><a href="https://codewithmosh.com/p/the-ultimate-django-series" className="button" target="_blank" rel="noreferrer">More</a></li>
                </ul>
              </article>

              <article>
                <a href="https://codewithmosh.com/p/csharp-basics-for-beginners" className="image">
                  <Image src="/images/CSharp.webp" alt="My C# Basics certificate" width={400} height={300} />
                </a>
                <h3>C# Basics</h3>
                <p>After completing the 'C# Basics for Beginners' course at Code with Mosh, I gained extensive knowledge of programming with C# and the .NET Framework.</p>
                <ul className="actions">
                  <li><a href="https://codewithmosh.com/p/csharp-basics-for-beginners" className="button" target="_blank" rel="noreferrer">More</a></li>
                </ul>
              </article>

              <article>
                <a href="https://members.codewithmosh.com/p/object-oriented-programming-in-csharp" className="image">
                  <Image src="/images/CSharpIntermediate.webp" alt="My C# Intermediate certificate" width={400} height={300} />
                </a>
                <h3>C# Intermediate</h3>
                <p>C# is a programming language developed by Microsoft for the .NET platform. In this course, I learned object-oriented programming, including classes, inheritance, and polymorphism.</p>
                <ul className="actions">
                  <li><a href="https://members.codewithmosh.com/p/object-oriented-programming-in-csharp" className="button" target="_blank" rel="noreferrer">More</a></li>
                </ul>
              </article>

              <article>
                <a href="https://codewithmosh.com/p/csharp-advanced" className="image">
                  <Image src="/images/csharpadvanced.webp" alt="My C# Advanced certificate" width={400} height={300} />
                </a>
                <h3>C# Advanced</h3>
                <p>The 'C# Advanced' course by Mosh Hamedani dives into complex topics like generics, delegates, events, lambda expressions, extension methods, LINQ, async/await, and dynamic typing.</p>
                <ul className="actions">
                  <li><a href="https://codewithmosh.com/p/csharp-advanced" className="button" target="_blank" rel="noreferrer">More</a></li>
                </ul>
              </article>

              <article>
                <a href="https://codewithmosh.com/p/unit-testing-for-csharp-developers" className="image">
                  <Image src="/images/CSharpUnitTesting.webp" alt="My C# Unit Testing certificate" width={400} height={300} />
                </a>
                <h3>C# Unit Testing</h3>
                <p>With the help of TestNinja in this course, I learned critical unit testing techniques in C#, including Test-Driven Development (TDD), dependency injection, and mocking frameworks.</p>
                <ul className="actions">
                  <li><a href="https://codewithmosh.com/p/unit-testing-for-csharp-developers" className="button" target="_blank" rel="noreferrer">More</a></li>
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
                <a href="https://www.udemy.com/course/figma-ux-ui-design-user-experience-tutorial-course" className="image">
                  <Image src="/images/figma.webp" alt="My UI/UX design certificate with Figma" width={400} height={300} />
                </a>
                <h3>Figma</h3>
                <p>In this course, I learned how to use Figma to create effective UX/UI designs, from concept to prototype, to improve user experiences and build visually appealing interfaces.</p>
                <ul className="actions">
                  <li><a href="https://www.udemy.com/course/figma-ux-ui-design-user-experience-tutorial-course" className="button" target="_blank" rel="noreferrer">More</a></li>
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

              <article>
                <a href="https://codewithmosh.com/p/the-ultimate-docker-course" className="image">
                  <Image src="/images/docker.webp" alt="My Docker certificate from Code with Mosh" width={400} height={300} />
                </a>
                <h3>Docker</h3>
                <p>In this course, I learned the fundamental and advanced concepts of Docker, including setting up containers, creating Docker images, and managing applications in a containerized environment.</p>
                <ul className="actions">
                  <li><a href="https://codewithmosh.com/p/the-ultimate-docker-course" className="button" target="_blank" rel="noreferrer">More</a></li>
                </ul>
              </article>

              <article>
                <a href="https://www.udemy.com/course/the-complete-ap-physics-course/" className="image">
                  <Image src="/images/physics.webp" alt="My AP Physics certificate from Udemy" width={400} height={300} />
                </a>
                <h3>AP Physics</h3>
                <p>In this course, I mastered the core principles of physics, including mechanics, electricity, thermodynamics, and quantum mechanics.</p>
                <ul className="actions">
                  <li><a href="https://www.udemy.com/course/the-complete-ap-physics-course/" className="button" target="_blank" rel="noreferrer">More</a></li>
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
