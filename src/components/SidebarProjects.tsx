import Image from 'next/image'

export default function SidebarProjects() {
  return (
    <section>
      <header className="major">
        <h2>Projects</h2>
      </header>
      <div className="mini-posts">
        <article>
          <a href="https://skills-hub.raimonvibe.com/" target="_blank" className="image">
            <Image src="/images/skills.png" alt="A serene setup with a developer exploring technology stacks" width={300} height={200} />
          </a>
          <h3>Recommended Stack</h3>
          <p>This project is about exploring and recommending different technology stacks for web development. It's a tool I'm developing to help developers find the right tools for their projects.</p>
          <ul className="actions">
            <li><a href="https://skills-hub.raimonvibe.com/" target="_blank" className="button">Visit SkillsHub</a></li>
          </ul>
        </article>
        
        <article>
          <a href="https://code-review.raimonvibe.com/" target="_blank" className="image">
            <Image src="/images/code-review.png" alt="A calm workspace with a developer reviewing code" width={300} height={200} />
          </a>
          <h3>SaaS Code Review</h3>
          <p>This is a tool I'm developing to help developers analyze and improve the quality of their code. It's all about detecting potential problems early on, so you can build more robust and reliable software.</p>
          <ul className="actions">
            <li><a href="https://code-review.raimonvibe.com/" target="_blank" className="button">Visit Code Review</a></li>
          </ul>
        </article>

        <article>
          <a href="https://www.physics-calculator.raimonvibe.com/" target="_blank" className="image">
            <Image src="/images/physics-calc.png" alt="A minimal workspace with a computer showing a blank screen" width={300} height={200} />
          </a>
          <h3>Speed Calculation</h3>
          <p>I recently worked on a project called Speed Calculation, designed to make calculating speed, acceleration, and time as simple as possible. With flexible units and a clear interface, it saves time by automatically performing conversions.</p>
          <ul className="actions">
            <li><a href="https://www.physics-calculator.raimonvibe.com/" target="_blank" className="button">Visit Velocity Calculator</a></li>
          </ul>
        </article>

        <article>
          <a href="https://www.physics-flashcards.raimonvibe.com/" target="_blank" className="image">
            <Image src="/images/flashcards.png" alt="A workspace featuring physics-themed diagrams" width={300} height={200} />
          </a>
          <h3>Physics Formulas Flashcards</h3>
          <p>In this project, Physics Formulas Cheat Sheet, I've created a handy reference guide full of essential physics formulas useful for students, engineers, and anyone interested in physics.</p>
          <ul className="actions">
            <li><a href="https://www.physics-flashcards.raimonvibe.com/" target="_blank" className="button">Visit Physics Flashcards</a></li>
          </ul>
        </article>

        <article>
          <a href="https://retro-monitor.raimonvibe.com/" target="_blank" className="image">
            <Image src="/images/retro.png" alt="A vintage-inspired workspace with a retro typewriter" width={300} height={200} />
          </a>
          <h3>Retro Typewriter Monitor</h3>
          <p>This unique setup combines the nostalgic feel of a vintage typewriter with the modern functionality of a quiz-based application, creating an engaging and interactive experience.</p>
          <ul className="actions">
            <li><a href="https://retro-monitor.raimonvibe.com/" target="_blank" className="button">Visit Retro Monitor</a></li>
          </ul>
        </article>

        <article>
          <a href="https://animalguesses.raimonvibe.com/" target="_blank" className="image">
            <Image src="/images/animalguesses.png" alt="A workspace featuring animal-themed art" width={300} height={200} />
          </a>
          <h3>Animal Riddles</h3>
          <p>An interactive quiz game that combines curiosity with play. Whether you're recognizing sounds, images, or fun clues, each challenge invites you to guess the animal behind the mystery.</p>
          <ul className="actions">
            <li><a href="https://animalguesses.raimonvibe.com/" target="_blank" className="button">Visit Animal Guesses</a></li>
          </ul>
        </article>

        <article>
          <a href="https://www.emf-simulator.raimonvibe.com/" target="_blank" className="image">
            <Image src="/images/emf.png" alt="A visualization of a physics simulator" width={300} height={200} />
          </a>
          <h3>Motional EMF Simulator</h3>
          <p>Explore the principles of electromagnetic induction with this interactive simulator. Adjust variables like displacement, magnetic field, length, and time to see how they affect the induced voltage.</p>
          <ul className="actions">
            <li><a href="https://www.emf-simulator.raimonvibe.com/" target="_blank" className="button">Visit EMF-Simulator</a></li>
          </ul>
        </article>

        <article>
          <a href="https://tetris2.0.raimonvibe.com/" target="_blank" className="image">
            <Image src="/images/tetris.png" alt="A minimalist visualization of a Tetris game interface" width={300} height={200} />
          </a>
          <h3>Tetris 2.0</h3>
          <p>This isn't just a game about blocks — it's about timing, space, and the quiet rhythm of decisions. For those who find peace in patterns, movement in stillness, and clarity in form.</p>
          <ul className="actions">
            <li><a href="https://tetris2.0.raimonvibe.com/" target="_blank" className="button">Visit Tetris 2.0</a></li>
          </ul>
        </article>

        <article>
          <a href="https://periodic-table.raimonvibe.com/" target="_blank" className="image">
            <Image src="/images/periodic-table.png" alt="An interactive periodic table" width={300} height={200} />
          </a>
          <h3>The Periodic Table</h3>
          <p>Not just rows and columns — it's a silent map of everything. Every element has a story: iron in our blood, carbon in our breath, gold in our dreams.</p>
          <ul className="actions">
            <li><a href="https://periodic-table.raimonvibe.com/" target="_blank" className="button">Visit The Periodic Table</a></li>
          </ul>
        </article>

        <article>
          <a href="https://inventory-pro.raimonvibe.com/" target="_blank" className="image">
            <Image src="/images/inventory.png" alt="A sleek interface showcasing inventory tracking" width={300} height={200} />
          </a>
          <h3>Inventory Pro</h3>
          <p>A modern inventory management system designed to streamline stock tracking, supplier coordination, and transaction logging.</p>
          <ul className="actions">
            <li><a href="https://inventory-pro.raimonvibe.com/" target="_blank" className="button">Visit Inventory Pro</a></li>
          </ul>
        </article>

        <article>
          <a href="https://google-login-edu.raimonvibe.com/" target="_blank" className="image">
            <Image src="/images/google.png" alt="A Google Login EDU interface" width={300} height={200} />
          </a>
          <h3>Google Login EDU</h3>
          <p>An authentication system tailored for educational platforms, offering secure, streamlined access through Google accounts.</p>
          <ul className="actions">
            <li><a href="https://google-login-edu.raimonvibe.com/" target="_blank" className="button">Visit Google Login EDU</a></li>
          </ul>
        </article>

        <div>
          <h2>So, have a look around!</h2>
          <p>Feel free to explore these projects and see what you think. I'm always learning and growing, and these sites are a reflection of that journey. Who knows what I'll be working on next? Stay tuned!</p>
        </div>
      </div>
    </section>
  )
}
