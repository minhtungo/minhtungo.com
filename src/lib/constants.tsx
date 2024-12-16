import { GithubIcon, Linkedin, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Drizzle from '/public/static/images/tech/drizzle.png';
import Express from '/public/static/images/tech/express.svg';
import Medusa from '/public/static/images/tech/medusa.jpg';
import Next from '/public/static/images/tech/next.svg';
import NodeJS from '/public/static/images/tech/nodejs.png';
import Radix from '/public/static/images/tech/radix.png';
import React from '/public/static/images/tech/react.svg';
import Redux from '/public/static/images/tech/redux.svg';
import Svelte from '/public/static/images/tech/svelte.svg';
import Tailwind from '/public/static/images/tech/tailwind.svg';
import TRPC from '/public/static/images/tech/trpc.png';
import TypeScript from '/public/static/images/tech/typescript.svg';
import Prisma from '/public/static/images/tech/prisma.svg';
import ReactQuery from '/public/static/images/tech/react-query.webp';
import Jotai from '/public/static/images/tech/jotai.png';
import PayloadCMS from '/public/static/images/tech/payloadcms.png';
import AuthJS from '/public/static/images/tech/authjs.webp';

export const EMAIL_ADDRESS = 'mn.minhtungo@gmail.com';

export const CONTACT_INFO = [
  {
    icon: <Mail className='size-4 md:size-[18px] shrink-0' />,
    href: `mailto:${EMAIL_ADDRESS}`,
    text: 'mn.minhtungo@gmail.com',
  },
  {
    icon: <Phone className='size-4 md:size-[18px] shrink-0' />,
    href: 'tel:613-453-6449',
    text: '613-453-6449',
  },
];

export const SOCIAL_INFO = [
  {
    icon: <GithubIcon className='size-[18px]' />,
    href: 'https://github.com/minhtungo',
    text: 'Github',
  },
  {
    icon: <Linkedin className='size-[18px]' />,
    href: 'https://linkedin.com/in/minhtungo/',
    text: 'Linkedin',
  },
  // {
  //   icon: <Mail className='size-[18px]' />,
  //   href: `mailto:${EMAIL_ADDRESS}`,
  //   text: 'mn.minhtungo@gmail.com',
  // },
];

export const FAVORITE_TECHS = [
  {
    name: 'React',
    icon: <Image src={React} alt='react' className='size-8 object-contain' />,
  },
  {
    name: 'Next.js',
    icon: <Image src={Next} alt='Next.js' className='size-8 object-contain' />,
  },
  {
    name: 'SvelteKit',
    icon: <Image src={Svelte} alt='Svelte' className='size-8 object-contain' />,
  },
  {
    name: 'Jotai',
    icon: <Image src={Jotai} alt='Jotai' className='size-8 object-contain' />,
  },
  {
    name: 'Redux',
    icon: <Image src={Redux} alt='redux' className='size-8 object-contain' />,
  },
  {
    name: 'React Query',
    icon: <Image src={ReactQuery} alt='React Query' className='size-8 object-contain' />,
  },
  {
    name: 'Node.js',
    icon: <Image src={NodeJS} alt='nodejs' className='size-8 object-contain' />,
  },
  {
    name: 'Express',
    icon: <Image src={Express} alt='express' className='size-8 object-contain' />,
  },
  {
    name: 'Medusa.js',
    icon: <Image src={Medusa} alt='medusa' className='size-8 object-contain' />,
  },
  {
    name: 'Drizzle ORM',
    icon: <Image src={Drizzle} alt='Drizzle' className='size-8 object-contain' />,
  },
  {
    name: 'Prisma',
    icon: <Image src={Prisma} alt='Prisma' className='size-8 object-contain' />,
  },
  {
    name: 'Auth.js',
    icon: <Image src={AuthJS} alt='AuthJS' className='size-8 object-contain' />,
  },
  {
    name: 'PayloadCMS',
    icon: <Image src={PayloadCMS} alt='PayloadCMS' className='size-8 object-contain' />,
  },
  {
    name: 'tRPC',
    icon: <Image src={TRPC} alt='trpc' className='size-8 object-contain' />,
  },
  {
    name: 'Tailwind',
    icon: <Image src={Tailwind} alt='tailwind' className='size-8 object-contain' />,
  },
  {
    name: 'Radix UI',
    src: '/static/images/tech/radix.png',
    icon: <Image src={Radix} alt='radix' className='size-8 object-contain' />,
  },
  {
    name: 'TypeScript',
    icon: <Image src={TypeScript} alt='typescript' className='size-8 object-contain' />,
  },
];

export const EXPERIENCES = [
  {
    title: 'Web Developer',
    description:
      'Develop an AI-powered tutoring platform to assist students with their studies, enhancing their critical thinking skills rather than providing direct solutions.',

    href: 'https://lumi-ai.vercel.app',
    company: 'Lumi',
    location: 'Remote',
    time: 'May 2024 – Present',
    techs: ['React', 'Next.js', 'Jotai', 'Tailwind', 'Drizzle ORM', 'React Query', 'Express', 'Node.js', 'TypeScript'],
  },
  {
    title: 'Web Developer',
    href: 'https://websitedesignkingston.com',
    description:
      'Built and maintained multiple WordPress websites, specializing in the creation of responsive and user-centric online experiences.',
    company: 'Website Design Kingston',
    location: 'Remote',
    time: 'Aug 2023 – Present',
    techs: ['Gatsby', 'JavaScript', 'HTML', 'CSS', 'WordPress', 'PHP'],
  },
  {
    title: 'Full Stack Developer',
    description:
      'Built a full stack eCommerce platform with a tailor-made CMS using Next.js for the front end and Medusa.js for a scalable, headless commerce backend.',
    href: 'http://vietify.shop',
    company: 'Vietify',
    location: 'Remote',
    time: 'Jul 2023 – Jan 2024',
    techs: ['React', 'Next.js', 'Medusa.js', 'Tailwind', 'TypeScript', 'Node.js', 'Prisma'],
  },
  {
    title: 'Front End Developer',
    href: 'https://taubyte.com',
    description:
      'Developed a cloud platform designed to enable developers to swiftly architect and deploy robust web applications.',
    company: 'Taubyte',
    location: 'Remote',
    time: 'Sep 2021 – Apr 2022',
    techs: ['Vue.js', 'Sass', 'JavaScript', 'HTML', 'CSS'],
  },
];

export const PROJECTS = [
  {
    title: 'Lumi',
    description: `An AI-powered tutoring platform, enhancing students' critical thinking skills rather than providing direct solutions.`,
    href: 'https://lumi-ai.vercel.app',
    techs: ['React', 'Next.js', 'Jotai', 'Tailwind', 'React Query', 'Express', 'Node.js', 'Drizzle ORM', 'TypeScript'],
    imageHref: '/static/images/projects/lumi.png',
  },
  {
    title: 'Vietify',
    description: `A US-based online Vietnamese bookstore using Medusa.js for a scalable, headless commerce backend.`,
    href: 'http://vietify.shop',
    techs: ['React', 'Next.js', 'Medusa.js', 'Node.js', 'Tailwind', 'Prisma', 'TypeScript'],
    imageHref: '/static/images/projects/vietify.png',
  },
  {
    title: 'Similarity-API',
    description: `A full-stack API service website to easily determine the similarity between two pieces of text.`,
    href: 'https://similarity-api-sandy.vercel.app',
    techs: ['React', 'Next.js', 'Tailwind', 'OpenAI', 'TypeScript'],
    imageHref: '/static/images/projects/similarity-api.png',
  },
  {
    title: 'Job Board',
    description: `Built a minimalist job board to learn Next.js 14 new features.`,
    href: 'https://job-board-minhtungo.vercel.app/',
    techs: ['React', 'Next.js', 'Tailwind', 'TypeScript'],
    imageHref: '/static/images/projects/job-board.webp',
  },
  {
    title: 'Kanban Board',
    description: `A Kanban app that features drag and drop, allowing users to easily organize and prioritize tasks.`,
    href: 'https://minh-kanban.netlify.app/',
    techs: ['React', 'Express', 'Node.js', 'MongoDB'],
    imageHref: '/static/images/projects/kanban.png',
  },
  {
    title: 'Job Tracker',
    description: `A web app for job seekers to keep track of job applications during the job search.`,
    href: 'https://minh-job-tracking.vercel.app/',
    techs: ['React', 'Express', 'Node.js', 'MongoDB'],
    imageHref: '/static/images/projects/job-tracker.png',
  },
  {
    title: 'CineCity',
    description: `A movie web app including features such as the ability for users to add reviews, favourite movies, and change passwords and profile pictures.`,
    href: 'https://cine-city.vercel.app',
    techs: ['React', 'Redux', 'Express', 'Node.js', 'MongoDB', 'Firebase'],
    imageHref: '/static/images/projects/cine-city.jpg',
  },
];

export type Project = (typeof PROJECTS)[number];

export const REPOS = [
  {
    title: 'SC2 Build Order Manager',
    description: `Learning T3 Stack by building a simple app to manage build order in StarCraft II`,
    href: 'https://github.com/minhtungo/starcraft-build-order',
    techs: ['Next.js', 'React', 'Tailwind', 'tRPC', 'Prisma'],
  },
  {
    title: 'ChatGPT Clone',
    description: `A backup solution for me when the original ChatGPT becomes unavailable or congested.`,
    href: 'https://github.com/minhtungo/chat-gpt-clone',
    techs: ['Next.js', 'React', 'Tailwind', 'Firebase'],
  },
  {
    title: 'AI Image Generator',
    description: `Generate images from text input. Powered by OpenAI.`,
    href: 'https://ai-image-generation-theta.vercel.app/',
    techs: ['React', 'Tailwind', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'minhtungo.com (v1)',
    description: `BUilt a website for a local restaurant.`,
    href: 'https://minhtungo-v1.netlify.app',
    techs: ['React', 'Bootstrap'],
  },
  {
    title: 'Pho Chopstix',
    description: `My old portfolio.`,
    href: 'https://www.phochopstix.ca',
    techs: ['React', 'Bootstrap'],
  },
];

export type Repo = (typeof REPOS)[number];

export const USED_TECHS = [
  {
    name: 'Next.js',
    icon: <Image src={Next} alt='Next.js' className='size-5 object-contain' />,
  },
  {
    name: 'React',
    icon: <Image src={React} alt='react' className='size-5 object-contain' />,
  },
  {
    name: 'Tailwind',
    icon: <Image src={Tailwind} alt='tailwind' className='size-5 object-contain' />,
  },
  {
    name: 'Radix UI',
    icon: <Image src={Radix} alt='radix' className='size-5 object-contain' />,
  },
  {
    name: 'Drizzle ORM',
    icon: <Image src={Drizzle} alt='Drizzle' className='size-5 object-contain' />,
  },
];

export const ABOUT_ME = [
  {
    description: `My journey in web development began with the classic "Hello World" console output, which ignited a deep passion for creating exceptional web experiences. Since then, I have continually strived to learn and get feedback to make myself better and improve.`,
  },
  {
    description: ` I am focused on being a valuable part of any team I am on and I love working with dedicated teams to create amazing web applications to make the internet a better place.`,
  },
  {
    description: `I am constantly looking for new opportunities to learn and grow as a developer. If you're looking for a driven and enthusiastic team player to help create amazing web applications, let's work together!`,
  },
];

export const TYPING_CONTENT = [
  'Welcome to my site.',
  1000,
  'I Love Building Things For The Web.',
  1000,
  `Let's connect and have a chat!`,
  1000,
  '',
];

//uses
const OFFICE_ITEMS = [
  {
    imageHref: '/static/images/uses/laptop.png',
    name: 'Dell G15 5525',
    description: '15.6" Laptop',
    href: 'https://www.dell.com/support/manuals/en-us/g-series-15-5525-laptop/dell-g15-5525-setup-and-specifications/display?guid=guid-57f3fe94-a77a-4c15-a28d-891f6e2f333a&lang=en-us',
  },
  {
    imageHref: '/static/images/uses/monitor.png',
    name: 'Dell S3221QS Monitor',
    description: '32" Curved 4K UHD',
    href: 'https://dell.com/en-ca/shop/dell-32-curved-4k-uhd-monitor-s3221qs/apd/210-axkm/monitors-monitor-accessories',
  },
  {
    imageHref: '/static/images/uses/samsung-monitor.png',
    name: 'Samsung 24" Monitor',
    description: '24" Full HD',
    href: 'https://www.samsung.com/ca/monitors/flat/flat-fhd-monitor-with-borderless-design-24-inch-lf24t350fhnxza/',
  },
  {
    imageHref: '/static/images/uses/keyboard.png',
    name: 'ASUS ROG Falchion',
    description: 'Wireless 65% Mechanical Keyboard',
    href: 'https://rog.asus.com/keyboards/keyboards/compact/rog-falchion-model/',
  },
  {
    imageHref: '/static/images/uses/mouse.png',
    name: 'HyperX Pulsefire Haste',
    description: 'Ultra-Lightweight Mouse',
    href: 'https://row.hyperx.com/products/hyperx-pulsefire-haste-gaming-mouse?variant=40909066731725',
  },
  {
    imageHref: '/static/images/uses/headphone.png',
    name: 'Sennheiser CX 300S',
    description: 'In Ear Headphone',
    href: 'https://www.amazon.ca/Sennheiser-CX-300S-Black/dp/B07Q6NW778',
  },
  {
    imageHref: '/static/images/uses/blueyeti-mic.png',
    name: 'Blue Yeti ',
    description: 'USB Streaming Microphone',
    href: 'https://www.logitechg.com/en-ca/products/streaming-gear/yeti-premium-usb-microphone.988-000100.html',
  },
  {
    imageHref: '/static/images/uses/webcam.png',
    name: 'Logitech Webcam C925e',
    description: '24" 144hz Monitor',
    href: 'https://logitech.com/en-ca/products/webcams/c925e-business-webcam.960-001075.html',
  },
  {
    imageHref: '/static/images/uses/lamp.png',
    name: 'Quntis Computer Monitor Lamp',
    description: 'Monitor Light Bar',
    href: 'https://www.amazon.ca/Quntis-Computer-Auto-Dimming-Adjustment-Reading/dp/B08DKQ3JG1',
  },
  {
    imageHref: '/static/images/uses/chair.png',
    name: 'Ergohuman Chair',
    description: 'High Back with Headrest and Mesh',
    href: 'https://ergohuman.com/ergohuman-chair-me7erg-high-back-with-headrest-and-mesh/',
  },
];

const CODING = [
  {
    imageHref: '/static/images/uses/vscode.png',
    name: 'Visual Studio Code',
    description: 'Editor',
    href: 'https://code.visualstudio.com/',
  },
  {
    imageHref: '/static/images/uses/theme.png',
    name: 'Night Owl',
    description: 'VSCode Theme',
    href: 'https://marketplace.visualstudio.com/items?itemName=sdras.night-owl',
  },
  {
    imageHref: '/static/images/uses/hyper.png',
    name: 'Hyper',
    description: 'Terminal',
    href: 'https://hyper.is/',
  },
];

const OTHER_TECH = [
  {
    imageHref: '/static/images/uses/s24-phone.png',
    name: 'Samsung Galaxy S24',
    description: '256GB - 8GB RAM',
    href: 'https://www.samsung.com/ca/smartphones/galaxy-s24/',
  },
  {
    imageHref: '/static/images/uses/buds.png',
    name: 'Samsung Galaxy Buds2 Pro',
    description: 'Graphite',
    href: 'https://samsung.com/ca/audio-sound/galaxy-buds/galaxy-buds2-pro-graphite-sm-r510nzaaxac/',
  },
  {
    imageHref: '/static/images/uses/purifier.png',
    name: 'RENPHO Air Purifier',
    description: 'Black',
    href: 'https://amazon.ca/RENPHO-Purifier-Allergies-Eliminator-Bacteria/dp/B0823L8NVN',
  },
];

export const TECH_ITEM_LIST = [
  { title: 'Office', items: OFFICE_ITEMS },
  { title: 'Coding', items: CODING },
  { title: 'Other Tech', items: OTHER_TECH },
];

export type TechItemList = (typeof TECH_ITEM_LIST)[number];
export type TechItem = (typeof OFFICE_ITEMS)[number];

export const RESUME_HREF = 'https://drive.google.com/file/d/1QrTshKgEXGyM31S67JwCV1M-EpSgm3Za/view?usp=sharing';
