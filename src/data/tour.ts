/*
  Guided tour content — a first-visit walkthrough of raimonvibe.eu.

  Modelled on the tour in raimonvibe/responsive_web_design: one continuous
  journey that crosses pages, spotlighting a real element on each stop.

  target:   CSS selector on that page. Omit for a centred step with no spotlight.
  minWidth: only include the step at this viewport width and up.
  cta:      replaces the primary button with a link out.
*/

export interface TourStep {
  /** Route the step lives on. Written without a trailing slash. */
  page: string;
  target?: string;
  title: string;
  /** Simple HTML — paragraphs and <strong>. */
  body: string;
  minWidth?: number;
  cta?: { label: string; href: string; external?: boolean };
  restart?: boolean;
}

export const TOUR: TourStep[] = [
  {
    page: '/',
    target: '#banner .content',
    title: 'Welcome to raimonvibe',
    body: '<p>A one-person research company in the technology field — four years of studying, building and writing things down.</p><p>This short tour walks you through the research: what was studied, what got built with it, and where it ended up. About a minute.</p>',
  },
  {
    page: '/',
    target: '.features',
    title: 'What the research covers',
    body: '<p>Data science and visualisation, AI with TensorFlow, server and hosting work, and the everyday craft of front-end development.</p><p>Breadth is the point — the aim is understanding how the pieces fit, not collecting one specialism.</p>',
  },
  {
    page: '/',
    target: '.posts',
    title: 'Where it all lives',
    body: '<p>Each of these opens a different side of the work.</p><p>The tour visits them in the order the research actually happened, so you can just keep pressing <strong>Next</strong>.</p>',
  },
  {
    page: '/about',
    target: 'header.main',
    title: 'Why it exists',
    body: '<p>The reasoning behind the research: curiosity first, discipline second.</p><p>Some days the discipline is there more than others — and that turns out to be fine.</p>',
  },
  {
    page: '/certificates',
    target: '.posts',
    title: 'Foundations: the study path',
    body: '<p>Python, JavaScript, Java, C#, Flutter — each studied end to end rather than skimmed.</p><p>These are the real certificates, kept as proof of the groundwork the rest of the tour builds on.</p>',
  },
  {
    page: '/projects',
    target: '.posts',
    title: 'The lab',
    body: '<p>This is where the study material got tested: live, working applications, each one built to find out whether the theory actually held.</p><p>Every card here links to something running right now.</p>',
  },
  {
    page: '/models',
    target: '.posts',
    title: 'Research in three dimensions',
    body: '<p>Where the work leaves the screen — 3D modelling and printing treated as its own field of study.</p><p>Same instinct as the software: design it, make it, learn from what breaks.</p>',
  },
  {
    page: '/scripture-readers',
    target: '.posts',
    title: 'Text as data',
    body: '<p>Ancient texts approached as a data problem: structure, search, and interfaces that stay readable at length.</p><p>Several complete readers, each built around authentic source texts.</p>',
  },
  {
    page: '/nigeria',
    target: '.posts',
    title: 'Research in context',
    body: '<p>What changes when you build for unreliable internet and a different tech ecosystem.</p><p>Constraints like these tend to teach more than ideal conditions ever do.</p>',
  },
  {
    page: '/services',
    target: 'header.main',
    title: 'Sharing the work',
    body: '<p>Writing it down on Medium and filming it for YouTube — the step that turns private research into something other people can use.</p>',
  },
  {
    page: '/services',
    target: '#commercial-site',
    title: 'The commercial site',
    body: '<p>Further down this page is the commercial side of the work — where research turns into something you can hire or buy.</p><p>At <strong>raimonvibe.com</strong> you can browse what I sell: websites for businesses and the services behind them.</p>',
    cta: {
      label: 'Visit raimonvibe.com',
      href: 'https://www.raimonvibe.com/',
      external: true,
    },
  },
  {
    page: '/contact',
    target: '#main form',
    title: 'Get in touch',
    body: '<p>If any of what you’ve seen sparked something, this form reaches me directly.</p><p>Questions, feedback, or a project idea — whatever brought you here.</p>',
  },
  {
    page: '/contact',
    title: 'That’s the tour',
    body: '<p>You’ve seen the foundations, the software, the 3D work, the writing, and where to find the commercial site.</p><p>That’s the full picture. Explore at your own pace — or press <strong>Restart</strong> to walk through it again.</p>',
    restart: true,
  },
];

export const TOUR_LENGTH = TOUR.length;

/** Normalise a pathname for comparison — the site is exported with trailing slashes. */
export function normalisePath(path: string): string {
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1);
  return path;
}

/** Index of the first step belonging to a page, or -1. */
export function firstStepOnPage(path: string, steps: TourStep[] = TOUR): number {
  const target = normalisePath(path);
  return steps.findIndex((step) => step.page === target);
}
