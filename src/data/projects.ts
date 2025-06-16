export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
  alt: string;
  buttonText: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'skills-hub',
    title: 'Recommended Stack',
    description: 'This project is about exploring and recommending different technology stacks for web development. It\'s a tool I\'m developing to help developers find the right tools for their projects.',
    url: 'https://skills-hub.raimonvibe.com/',
    image: '/images/skills.png',
    alt: 'A serene setup with a developer exploring technology stacks',
    buttonText: 'Visit SkillsHub'
  },
  {
    id: 'code-review',
    title: 'SaaS Code Review',
    description: 'This is a tool I\'m developing to help developers analyze and improve the quality of their code. It\'s all about detecting potential problems early on, so you can build more robust and reliable software.',
    url: 'https://code-review.raimonvibe.com/',
    image: '/images/code-review.png',
    alt: 'A calm workspace with a developer reviewing code',
    buttonText: 'Visit Code Review'
  },
  {
    id: 'physics-calculator',
    title: 'Speed Calculation',
    description: 'I recently worked on a project called Speed Calculation, designed to make calculating speed, acceleration, and time as simple as possible. With flexible units and a clear interface, it saves time by automatically performing conversions.',
    url: 'https://www.physics-calculator.raimonvibe.com/',
    image: '/images/physics-calc.png',
    alt: 'A minimal workspace with a computer showing a blank screen',
    buttonText: 'Visit Velocity Calculator'
  },
  {
    id: 'physics-flashcards',
    title: 'Physics Formulas Flashcards',
    description: 'In this project, Physics Formulas Cheat Sheet, I\'ve created a handy reference guide full of essential physics formulas useful for students, engineers, and anyone interested in physics.',
    url: 'https://www.physics-flashcards.raimonvibe.com/',
    image: '/images/flashcards.png',
    alt: 'A workspace featuring physics-themed diagrams',
    buttonText: 'Visit Physics Flashcards'
  },
  {
    id: 'retro-monitor',
    title: 'Retro Typewriter Monitor',
    description: 'This unique setup combines the nostalgic feel of a vintage typewriter with the modern functionality of a quiz-based application, creating an engaging and interactive experience.',
    url: 'https://retro-monitor.raimonvibe.com/',
    image: '/images/retro.png',
    alt: 'A vintage-inspired workspace with a retro typewriter',
    buttonText: 'Visit Retro Monitor'
  },
  {
    id: 'animal-guesses',
    title: 'Animal Riddles',
    description: 'An interactive quiz game that combines curiosity with play. Whether you\'re recognizing sounds, images, or fun clues, each challenge invites you to guess the animal behind the mystery.',
    url: 'https://animalguesses.raimonvibe.com/',
    image: '/images/animalguesses.png',
    alt: 'A workspace featuring animal-themed art',
    buttonText: 'Visit Animal Guesses'
  },
  {
    id: 'emf-simulator',
    title: 'Motional EMF Simulator',
    description: 'Explore the principles of electromagnetic induction with this interactive simulator. Adjust variables like displacement, magnetic field, length, and time to see how they affect the induced voltage.',
    url: 'https://www.emf-simulator.raimonvibe.com/',
    image: '/images/emf.png',
    alt: 'A visualization of a physics simulator',
    buttonText: 'Visit EMF-Simulator'
  },
  {
    id: 'tetris',
    title: 'Tetris 2.0',
    description: 'This isn\'t just a game about blocks — it\'s about timing, space, and the quiet rhythm of decisions. For those who find peace in patterns, movement in stillness, and clarity in form.',
    url: 'https://tetris2.0.raimonvibe.com/',
    image: '/images/tetris.png',
    alt: 'A minimalist visualization of a Tetris game interface',
    buttonText: 'Visit Tetris 2.0'
  },
  {
    id: 'periodic-table',
    title: 'The Periodic Table',
    description: 'Not just rows and columns — it\'s a silent map of everything. Every element has a story: iron in our blood, carbon in our breath, gold in our dreams.',
    url: 'https://periodic-table.raimonvibe.com/',
    image: '/images/periodic-table.png',
    alt: 'An interactive periodic table',
    buttonText: 'Visit The Periodic Table'
  },
  {
    id: 'inventory-pro',
    title: 'Inventory Pro',
    description: 'A modern inventory management system designed to streamline stock tracking, supplier coordination, and transaction logging.',
    url: 'https://inventory-pro.raimonvibe.com/',
    image: '/images/inventory.png',
    alt: 'A sleek interface showcasing inventory tracking',
    buttonText: 'Visit Inventory Pro'
  },
  {
    id: 'google-login-edu',
    title: 'Google Login EDU',
    description: 'An authentication system tailored for educational platforms, offering secure, streamlined access through Google accounts.',
    url: 'https://google-login-edu.raimonvibe.com/',
    image: '/images/google.png',
    alt: 'A Google Login EDU interface',
    buttonText: 'Visit Google Login EDU'
  }
];
