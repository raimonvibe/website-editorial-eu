export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
  alt: string;
  buttonText: string;
  siteUrl?: string;
  siteButtonText?: string;
}

export const PROJECTS: Project[] = [

   //  {
   //  id: 'prayer-chat',
   //  title: 'Prayer-Chat',
   //  description: 'Christian AI chatbots with biblical wisdom. Transform your ministry or business website into an intelligent assistant rooted in Christian values.',
   //  url: 'https://www.prayer-chat.com/',
   //  image: '/images/prayer-chat.png',
   //  alt: 'A serene Christian AI chatbot interface with biblical elements',
   //  buttonText: 'Visit Prayer-Chat'
   // },
{
  id: 'amsterdammetro',
  title: 'Amsterdam Metro Live',
  description: 'A 3D, orbitable live map of Amsterdam’s GVB metro. Real trains move on real track geometry using GTFS-realtime data, with live delays, station departure boards, clickable trains, motion trails, and dark/light themes.',
  url: 'https://amsterdammetro.nl/',
  image: '/images/amsterdammetro.webp',
  alt: '3D live Amsterdam metro map with real-time trains',
  buttonText: 'Open Amsterdam Metro Live'
},
{
  id: 'wondersandhope',
  title: 'Wonders and Hope',
  description:
    'An offline Bible app of 178 wonders and miracles, each with its passage beside the card. Read or listen with highlighted scrolling text, keep verses with colour and notes, share quote images, and browse the full World English Bible — no account, no ads, no tracking.',
  url: 'https://play.google.com/store/apps/details?id=com.raimonvibe.wonders',
  image: '/images/wondersandhope.webp',
  alt: 'Wonders and Hope Bible app with miracle cards and highlighted scripture',
  buttonText: 'Get it on Play Store',
  siteUrl: '/apps/wonders-and-hope',
  siteButtonText: 'App info & privacy',
},
{
  id: 'aramigo',
  title: 'AramiGo',
  description: 'Beginner-friendly Classical Syriac Aramaic learning web app. Short scene-based lessons, script-first approach, word chips, listen mode (Hebrew system voice as stand-in), guest + Google sign-in progress sync. Built with Next.js + Spring Boot.',
  url: 'https://aramaic.eu/',
  image: '/images/aramigo.webp',
  alt: 'AramiGo Classical Syriac beginners learning path with Greetings lesson',
  buttonText: 'Open AramiGo'
},
{
  id: 'courses-free-with-certificate',
  title: 'Free Courses with Certificates',
  description: 'A curated collection of 34 completely free software development courses that issue certificates on completion. Organized by topic (Frontend, Backend, Security, Data Science, Cloud, DevOps, ML/AI and more) from freeCodeCamp, Microsoft Learn, AWS and others.',
  url: 'https://courses-free-with-certificate.vercel.app/',
  image: '/images/courses.webp',
  alt: 'Free software development courses with certificates collection',
  buttonText: 'Browse Free Courses'
},
  {
  id: 'elevenup',
  title: 'ElevenUp',
  description: 'A card game against the computer — empty your hand first to win. Simple ranked-ladder rules, single draw pile, and a clean wood-table interface. Free to play, no ads.',
  url: 'https://www.elevenup.eu/',
  image: '/images/elevenup.webp',
  alt: 'ElevenUp card game interface',
  buttonText: 'Play ElevenUp'
},
      {
      id: 'change-my-image',
      title: 'Change-My Image Converter',
      description: 'A modern, ad-free image converter supporting formats like JPG, PNG, WEBP, HEIC, and more. Fast, secure, and privacy-friendly — built for individuals and creators who value simplicity.',
      url: 'https://www.change-my.com/',
      image: '/images/change-my.png',
      alt: 'Change-My Image Converter interface',
      buttonText: 'Visit Change-My.com'
    },
{
  id: 'digital-marketing-course',
  title: 'Digital Marketing & E-commerce',
  description: 'A self-built, browser-only course with 11 modules and 15 real tools. Hands-on missions on free tiers (SEO, email, Canva, Shopify, Analytics & more), quizzes, and local progress tracking. No account, no ads — just learn by doing.',
  url: 'https://digital-marketing-ten-snowy.vercel.app/en/',
  image: '/images/marketing.webp',
  alt: 'Digital Marketing & E-commerce course interface',
  buttonText: 'Start the Course'
},
   {
     id: 'skills-hub',
     title: 'Recommended Stack',
     description: 'This project is about exploring and recommending different technology stacks for web development. It\'s a tool I\'m developing to help developers find the right tools for their projects.',
     url: 'https://raimon.pythonanywhere.com/',
     image: '/images/skills.png',
     alt: 'A serene setup with a developer exploring technology stacks',
     buttonText: 'Visit SkillsHub'
  },
{
  id: 'taskflow',
  title: 'TaskFlow',
  description: 'A full-stack task management app with JWT auth, CRUD tasks, and a dashboard of visual stats. Built as a complete DevOps learning project (React + Node/Express + PostgreSQL) covering Docker, Kubernetes, Terraform, CI/CD and monitoring — all free-tier friendly.',
  url: 'https://taskflow-frontend-a4e8.onrender.com/',
  image: '/images/taskflow.webp',
  alt: 'TaskFlow task management dashboard',
  buttonText: 'Open TaskFlow'
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
  title: 'Animal Guesses',
  description:
    'Free educational animal quiz for kids and families. 21 animals, photos and sounds, true/false questions — no ads, no in-app purchases.',
  url: 'https://play.google.com/store/apps/details?id=com.raimonvibe.animalguesses2',
  image: '/images/animal_guesses.webp',
  alt: 'Animal Guesses app on Google Play',
  buttonText: 'Get it on Play Store',
  siteUrl: '/apps/animal-guesses',
  siteButtonText: 'App info & privacy',
},
{
  id: 'music-guesses',
  title: 'Music Guesses',
  description:
    'Free educational music quiz for Android. Listen to instrument sounds, look at pictures, and answer true/false questions — no ads, no in-app purchases.',
  url: 'https://play.google.com/store/apps/details?id=com.raimonvibe.musicguesses',
  image: '/images/music_guesses.webp',
  alt: 'Music Guesses app on Google Play',
  buttonText: 'Get it on Play Store',
  siteUrl: '/apps/music-guesses',
  siteButtonText: 'App info & privacy',
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
    id: 'unsmoke',
    title: 'Unsmoke',
    description: 'A supportive quit-smoking and vaping tracker that helps you take back control of your health. Log your quit date, track your progress, and stay motivated on your journey to a smoke-free life — all stored privately in your browser.',
    url: 'https://unsmoke-five.vercel.app/',
    image: '/images/leafs-background.webp',
    alt: 'Unsmoke app interface with a green sprout logo and quit smoking tracker',
    buttonText: 'Visit Unsmoke'
  },
  {
    id: 'rootwork',
    title: 'Rootwork',
    description: 'A compassionate resource platform helping people build confidence and success in the world of work. Rootwork explores how early experiences shape our professional lives and offers practical guidance for moving forward.',
    url: 'https://rootwork-teal.vercel.app/',
    image: '/images/rootwork.webp',
    alt: 'Rootwork hero section with the tagline You\'ve come a long way. Now let\'s move forward.',
    buttonText: 'Visit Rootwork'
  },
  {
    id: 'beautiful-words',
    title: 'Beautiful Words',
    description: 'A lexicon of lovely language — rare, rich words explained the way a friend would explain them, not a dictionary. Browse by category, favorite the ones you love, or let a word of the day surprise you.',
    url: 'https://beautiful-words.vercel.app/',
    image: '/images/words.webp',
    alt: 'Beautiful Words lexicon interface showing a word of the day',
    buttonText: 'Visit Beautiful Words'
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
