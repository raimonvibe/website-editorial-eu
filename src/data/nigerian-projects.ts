export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
  alt: string;
  buttonText: string;
}

export const NIGERIAN_PROJECTS: Project[] = [
  {
    id: 'nigerian-tech-opportunities',
    title: 'Nigerian Tech Opportunities',
    description: 'A platform showcasing tech opportunities for Nigerian developers, including job listings, training programs, and startup resources tailored to the local ecosystem.',
    url: 'https://nigerian-tech-opportunities.vercel.app/',
    image: '/images/nigerian-tech.png',
    alt: 'A vibrant workspace with Nigerian developers exploring tech opportunities',
    buttonText: 'Visit Nigerian Tech Opportunities'
  },
  {
    id: 'connection-solution',
    title: 'Connection Solution',
    description: 'Code Quest Academy is a strategic learning platform designed for Nigerian developers dealing with unreliable internet.',
    url: 'https://connection-solution.vercel.app/',
    image: '/images/connection-solution.png',
    alt: 'A digital interface for Nigerian developers dealing with unreliable internet.',
    buttonText: 'Visit Connection Solution'
  },
  {
    id: 'open-ai-api-guide',
    title: 'How to Use Open AI API',
    description: 'A comprehensive guide for Nigerian developers on integrating Open AI APIs into their projects, with examples tailored to local use cases like chatbots and automation.',
    url: 'https://how-to-use-open-ai-api.vercel.app/',
    image: '/images/open-ai-guide.png',
    alt: 'A workspace with code snippets for Open AI API integration',
    buttonText: 'Visit Open AI API Guide'
  },
  {
    id: 'payment-solution-guide',
    title: 'Payment Solution Guide for Nigerians',
    description: 'A resource hub for Nigerian businesses to navigate local and international payment gateways, addressing challenges like currency conversion and transaction fees.',
    url: 'https://payment-solution-guide-for-nigerian.vercel.app/',
    image: '/images/payment-guide.png',
    alt: 'A sleek interface displaying payment solutions for Nigeria',
    buttonText: 'Visit Payment Solution Guide'
  },
  {
    id: 'frontend-job-search',
    title: 'Frontend Developer Job Search Nigeria',
    description: 'A job search platform focused on frontend developer roles in Nigeria, helping tech talent find opportunities in Lagos, Abuja, and beyond.',
    url: 'https://front-end-developer-job-search-nige.vercel.app/',
    image: '/images/frontend-jobs.png',
    alt: 'A job search interface for Nigerian frontend developers',
    buttonText: 'Visit Frontend Job Search'
  },
  {
    id: 'coding-with-ai',
    title: 'Coding with AI Tutorial',
    description: 'An interactive tutorial for Nigerian developers to leverage AI tools for coding, featuring practical examples and local context for better productivity.',
    url: 'https://coding-with-ai-tutorial-lqxj.vercel.app/',
    image: '/images/coding-ai.png',
    alt: 'A workspace with AI-assisted coding tutorials',
    buttonText: 'Visit Coding with AI Tutorial'
  },
  {
    id: 'create-react-app',
    title: 'How to Create a React App',
    description: 'A step-by-step guide for Nigerian developers to build React applications, with tips on optimizing for local hosting and deployment challenges.',
    url: 'https://how-to-create-react-app.vercel.app/',
    image: '/images/react-app.png',
    alt: 'A coding environment for building React apps',
    buttonText: 'Visit Create React App Guide'
  },
  {
    id: 'google-login-edu',
    title: 'Google Login EDU',
    description: 'An authentication system tailored for Nigerian educational platforms, offering secure and streamlined access through Google accounts.',
    url: 'https://google-login-edu.raimonvibe.com/',
    image: '/images/google-login.png',
    alt: 'A Google Login interface for Nigerian education platforms',
    buttonText: 'Visit Google Login EDU'
  },
  {
    id: 'form-education',
    title: 'Form Education',
    description: 'A beginner-friendly guide designed to help Nigerian developers integrate contact forms into their web applications using Formspree, eliminating the need for backend coding.',
    url: 'https://form-education.vercel.app/',
    image: '/images/form-education.png',
    alt: 'A digital form to help Nigerian developers integrate contact forms into their web applications',
    buttonText: 'Visit Form Education'
  },
  {
    id: 'lagos-health-navigator',
    title: 'Lagos Health Navigator',
    description: 'A web-based tool to help Lagos residents find healthcare services, with features like hospital locators and appointment scheduling tailored to local needs.',
    url: 'https://lagos-health-navigator-v2.vercel.app/',
    image: '/images/health-navigator.png',
    alt: 'A health service locator interface for Lagos',
    buttonText: 'Visit Lagos Health Navigator'
  }
];
