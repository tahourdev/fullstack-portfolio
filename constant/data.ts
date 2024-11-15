import { IconType } from 'react-icons';
import { BiHomeAlt2 } from 'react-icons/bi';
import { SlGraduation } from 'react-icons/sl';
import { GrServicePlay } from 'react-icons/gr';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { RiQuillPenLine } from 'react-icons/ri';
import { GrContact } from 'react-icons/gr';
import Browser from '../assets/browser.svg';
import Frameworks from '../assets/frontend.svg';
import Responsive from '../assets/responsive.svg';
import Web from '../assets/web-development.svg';
import Performance from '../assets/perform.svg';
import UXUI from '../assets/design.svg';
import Project1 from '../assets/projects/lifetechhub.webp';
import Project2 from '../assets/projects/uminex.webp';
import Project3 from '../assets/projects/snapload.webp';
import Project4 from '../assets/projects/movix.webp';
import { PiPhoneCallThin } from 'react-icons/pi';
import { IoMailOutline, IoLocationOutline } from 'react-icons/io5';
import Blog1 from '../assets/blog/blog-img-1.jpg';
import Blog2 from '../assets/blog/blog-img-2.jpg';
import Blog3 from '../assets/blog/blog-img-3.jpg';
import Blog4 from '../assets/blog/blog-img-4.jpg';
import Blog5 from '../assets/blog/blog-img-5.jpg';
import Blog6 from '../assets/blog/blog-img-6.jpg';
import { StaticImageData } from 'next/image';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { CiLinkedin } from 'react-icons/ci';
import { BsGlobe2 } from 'react-icons/bs';

interface Navbar {
  path: string;
  icon: IconType;
  name: string;
}

export const navTabs: Navbar[] = [
  { path: '/', icon: BiHomeAlt2, name: 'home' },
  { path: '/about', icon: SlGraduation, name: 'about' },
  { path: '/service', icon: GrServicePlay, name: 'service' },
  { path: '/portfolio', icon: MdOutlineWorkOutline, name: 'portfolio' },
  { path: '/blog', icon: RiQuillPenLine, name: 'blog' },
  { path: '/contact', icon: GrContact, name: 'contact' },
];

interface Service {
  id: string;
  title: string;
  icon: string;
  des: string;
}

export const services: Service[] = [
  {
    id: '100',
    title: 'Website Development',
    icon: Web,
    des: 'I specialize in crafting impactful websites with stunning visuals and user-friendly experiences. Using customized solutions and modern technologies, I bring your ideas to life online.',
  },
  {
    id: '101',
    title: 'UI/UX Design',
    icon: UXUI,
    des: "By applying UX and UI design principles, I create digital experiences that meet user needs, align with your brand identity, and bring your digital vision to life. Let's collaborate to make it happen.",
  },
  {
    id: '103',
    title: 'Responsive Web Design',
    icon: Responsive,
    des: 'I specialize in creating responsive web designs that seamlessly adapt across devices. Using modern techniques and frameworks, I ensure an engaging user experience across all screen sizes.',
  },
  {
    id: '104',
    title: 'Frontend Frameworks',
    icon: Frameworks,
    des: 'I specialize in utilizing ReactJS, a powerful frontend framework, to build dynamic and interactive web applications, creating seamless and engaging user experiences.',
  },
  {
    id: '105',
    title: 'Cross-Browser Compatibility',
    icon: Browser,
    des: 'I specialize in cross-browser compatibility, ensuring your website works seamlessly on all browsers for a consistent user experience across platforms.',
  },
  {
    id: '106',
    title: 'Performance Optimization',
    icon: Performance,
    des: 'I specialize in optimizing website performance for fast, seamless user experiences. Through code optimization and asset compression, I provide exceptional loading speed and user experiences.',
  },
];

interface Blog {
  id: string;
  title: string;
  cover: StaticImageData;
  category: string;
  readingTime: string;
  publishedAt: string;
}

export const blogs: Blog[] = [
  {
    id: 'b#001',
    title: 'Want To Upgrade Your Brain? Stop Doing These 7 Things',
    cover: Blog1,
    category: 'development',
    readingTime: '15 min read',
    publishedAt: 'Nov 6, 2023',
  },
  {
    id: 'b#002',
    title: 'Want To Upgrade Your Brain? Stop Doing These 7 Things',
    cover: Blog2,
    category: 'development',
    readingTime: '15 min read',
    publishedAt: 'Nov 6, 2023',
  },
  {
    id: 'b#003',
    title: 'Want To Upgrade Your Brain? Stop Doing These 7 Things',
    cover: Blog3,
    category: 'development',
    readingTime: '15 min read',
    publishedAt: 'Nov 6, 2023',
  },
  {
    id: 'b#004',
    title: 'Want To Upgrade Your Brain? Stop Doing These 7 Things',
    cover: Blog4,
    category: 'development',
    readingTime: '15 min read',
    publishedAt: 'Nov 6, 2023',
  },
  {
    id: 'b#005',
    title: 'Want To Upgrade Your Brain? Stop Doing These 7 Things',
    cover: Blog5,
    category: 'development',
    readingTime: '15 min read',
    publishedAt: 'Nov 6, 2023',
  },
  {
    id: 'b#006',
    title: 'Want To Upgrade Your Brain? Stop Doing These 7 Things',
    cover: Blog6,
    category: 'development',
    readingTime: '15 min read',
    publishedAt: 'Nov 6, 2023',
  },
];

export interface LinkProps {
  type: string;
  href: string;
  icon: IconType;
}

interface Project {
  id: string;
  title: string;
  proImg: StaticImageData;
  video: string;
  href: string;
  links: LinkProps[];
  desc: string;
  technology: string[];
}

export const projects: Project[] = [
  {
    id: '1002',
    title: 'Lifetechhubs Blog',
    proImg: Project1,
    video: '',
    href: 'https://lifetechhub.vercel.app/',
    links: [
      {
        type: 'Website',
        href: 'https://lifetechhub.vercel.app',
        icon: BsGlobe2,
      },
    ],
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    technology: ['Nextjs', 'Graphql', 'Tailwindcss'],
  },
  {
    id: '1006',
    title: 'Umix Clone UI',
    proImg: Project2,
    video: '',
    href: 'https://uminex-two.vercel.app',
    links: [
      {
        type: 'Website',
        href: 'https://uminex-two.vercel.app',
        icon: BsGlobe2,
      },
    ],
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    technology: ['React', 'React Router Dom', 'Tailwindcss'],
  },

  {
    id: '1008',
    title: 'Snapload',
    proImg: Project3,
    video: '',
    href: 'https://snaploading.vercel.app/',
    links: [
      {
        type: 'Website',
        href: 'https://snaploading.vercel.app/',
        icon: BsGlobe2,
      },
    ],
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    technology: ['React', 'Redux', 'Tailwindcss'],
  },
  {
    id: '1009',
    title: 'Movix',
    proImg: Project4,
    video: '',
    href: 'https://movixapi.netlify.app/',
    links: [
      {
        type: 'Website',
        href: 'https://snaploading.vercel.app/',
        icon: BsGlobe2,
      },
    ],
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    technology: ['React', 'Redux', 'Tailwindcss'],
  },
];

interface ContactDetail {
  link: string;
  contact: string;
}

export interface ContactProps {
  icon: IconType;
  title: string;
  contacts: ContactDetail[];
}

export const contact: ContactProps[] = [
  {
    icon: PiPhoneCallThin,
    title: 'Contact Phone',
    contacts: [
      { link: 'https://t.me/tahourdev', contact: '+855 176 073 29' },
      { link: 'https://t.me/SambathTB', contact: '+855 975 724 665' },
    ],
  },
  {
    icon: IoMailOutline,
    title: 'Contact Email',
    contacts: [
      {
        link: 'mailto:enghourh5@gmail.com',
        contact: 'enghourh5@gmail.com',
      },
      { link: 'mailto:enghourheng26@gmail.com', contact: 'enghourheng26@gmail.com' },
    ],
  },
  {
    icon: IoLocationOutline,
    title: 'Contact Location',
    contacts: [
      {
        link: 'https://maps.google.com/maps/dir//Wat+Ounalom+Monastery+Cambodia+Samdach+Sothearos+Boulevard+Phnom+Penh+Preah+Ang+Eng+St.+(13)+Phnom+Penh+12206/@11.5683468,104.9298964,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x31095148fdcefea3:0xeef02689cbfb683f',
        contact: 'Sangkat Phsar Kandal Ti Muoy, Phnom Penh',
      },
    ],
  },
];

interface PersonalInfo {
  label: string;
  value: string;
}

export const personalInfo: PersonalInfo[] = [
  { label: 'Name', value: 'Heng Keanghor' },
  { label: 'Nationality', value: 'Cambodia' },
  { label: 'Phone', value: '(+855)176 073 29' },
  { label: 'Email', value: 'enghourh5@gmail.com' },
  { label: 'Freelance', value: 'Available' },
  { label: 'Language', value: 'Khmer, English' },
];

interface SocialIcons {
  icon: IconType;
  link: string;
}

export const socialIcons: SocialIcons[] = [
  {
    icon: FaFacebookF,
    link: 'https://www.facebook.com/eng.hout.94',
  },
  { icon: FaXTwitter, link: 'https://twitter.com/keanghorcoder' },
  { icon: FaInstagram, link: '/https://instagram.com' },
  { icon: CiLinkedin, link: 'https://linkedin.com' },
];
