import type { ContactItem, Experience, Project, SiteConfig, Technology } from "../types/content"

import comerciosanJuanBackground from "../../assets/projects/comerciosj-background.webp"
import jobifyBackground from "../../assets/projects/jobify-background.webp"
import lavappBackground from "../../assets/projects/lavapp-background.webp"
import bottoBackground from "../../assets/projects/botto-background.webp"

export const siteConfig: SiteConfig = {
    url: 'https://tomasgdev.com.ar',
    name: 'Tomás Gutiérrez',
    title: 'Tomás Gutiérrez | Full Stack Developer',
    description: 'Full Stack Developer specializing in Golang, Laravel, Next.js, React and Node.js. Building scalable and efficient web applications with a strong focus on backend development.',
    locale: 'en_US',
}

export const technologies: Technology[] = [
    { name: 'Golang', icon: '/golang-svgrepo-com.svg' },
    { name: 'Laravel', icon: '/laravel-svgrepo-com.svg' },
    { name: 'Php', icon: '/php-svgrepo-com.svg' },
    { name: 'Express.js', icon: '/express-svgrepo-com.svg' },
    { name: 'MySQL', icon: '/mysql-logo-svgrepo-com.svg' },
    { name: 'MongoDB', icon: '/mongodb-svgrepo-com.svg' },
    { name: 'Next.js', icon: '/nextjs-fill-svgrepo-com.svg' },
    { name: 'React', icon: '/react.svg' },
    { name: 'TypeScript', icon: '/typescript-official-svgrepo-com.svg' },
    { name: 'JavaScript', icon: '/javascript.svg' },
    { name: 'Redux', icon: '/redux-svgrepo-com.svg' },
    { name: 'Node.js', icon: '/node-js-svgrepo-com.svg' },
    { name: 'AWS', icon: '/aws-svgrepo-com.svg' },
    { name: 'Firebase', icon: '/firebase-svgrepo-com.svg' },
    { name: 'Postman', icon: '/postman-icon-svgrepo-com.svg' },
    { name: 'Docker', icon: '/docker-svgrepo-com.svg' },
    { name: 'Redis', icon: '/redis-svgrepo-com.svg' },
    { name: 'Git', icon: '/git-icon-svgrepo-com.svg' },
]

export const experiences: Experience[] = [
    {
        company: 'Nodos Hub',
        role: 'Backend Developer',
        period: 'Oct 2024 - Present',
        description: "I am participating in a backend development internship at Nodos Hub, a software factory based in San Juan, Argentina. My responsibilities include designing and implementing RESTful APIs and optimizing database structures using Laravel.",
    },
    {
        company: 'Victor Botto Maquinarias',
        role: 'Fullstack Developer',
        period: 'Nov 2024 - Dec 2024',
        description: "I developed corporate website to showcase its products and services effectively. I was responsible for the full development and design of the website. I worked directly with the company to identify their needs, ensuring the website accurately represented their values and business model.",
    },
    {
        company: 'Stock Control',
        role: 'Fullstack Developer',
        period: 'May 2024 - Aug 2024',
        description: "I developed a comprehensive web application for stock and sales management. This application was designed to optimize inventory and sales operations for a company, providing detailed and accurate financial reports. My role included developing server-side services, building the client-side user interface, and managing the entire database.",
    },
    {
        company: 'Tstyle',
        role: 'Fullstack Developer',
        period: 'Jan 2024 - May 2024',
        description: "I developed an e-commerce platform for managing stock and sales for Tstyle, an automotive aesthetics business in San Juan, Argentina. The platform was built using the Medusa.js framework and the MERN stack, providing a seamless solution for inventory management and sales tracking. My responsibilities included developing server-side services, designing the client-side interface, and managing the backend database to ensure efficient operations and accurate sales reporting.",
    },
    {
        company: 'LavApp',
        role: 'Fullstack Developer',
        period: 'Oct 2023 - Jan 2024',
        description: "I developed a comprehensive web application from scratch for the organization of a car wash located in Buenos Aires, Argentina. This application encompassed the development of both the backend, frontend services, and user interface, as well as the management of the database. I implemented a responsive design that allowed the application to be used on various devices with the same user experience.",
    },
    {
        company: 'ComercioSJ',
        role: 'Fullstack Developer',
        period: 'Nov 2022 - Nov 2023',
        description: "I developed a marketplace specifically designed to meet the needs of local businesses in San Juan, Argentina, as well as the expectations of their customers. As part of my experience as a full-stack developer, I led the creation of a complete web application from scratch, encompassing the implementation of server-side services, building the client-side user interface, and comprehensive database",
    },
]

export const contactInfo: ContactItem[] = [
    {
        icon: '/linkedin-svgrepo-com.svg',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/tomas-gutierrez-parra-818731233',
        // username: 'tomas-gutierrez-parra-818731233',
        username: '',
    },
    {
        icon: '/github-svgrepo-com.svg',
        label: 'GitHub',
        href: 'https://github.com/tomygp97',
        // username: 'tomygp97',
        username: '',
    },
    {
        icon: '/gmail-svgrepo-com.svg',
        label: 'Email',
        href: 'mailto:tomasgp1997@gmail.com',
        username: 'tomasgp1997@gmail.com',
    },
]

export const projects: Project[] = [
    {
        title: "ComercioSJ",
        description: "marketplace specifically designed to meet the needs of local businesses in San Juan, Argentina.",
        technologies: ["React.js 18", "Next.js 13", "Material-UI", "Firebase", "Redux"],
        githubUrl: "https://github.com/nico98gon/comercio-san-juan-nextjs",
        demoUrl: "https://comercio-san-juan-nextjs-git-main-nico98gon.vercel.app/",
        // demoUrl: "https://www.comerciosanjuan.ar/",
        image: comerciosanJuanBackground
    },
    {
        title: "LavApp",
        description: "web application for the organization of a car wash located in Buenos Aires.",
        technologies: ["React.js 18", "Next.js 14", "Node.js", "Express.js", "MongoDB"],
        githubUrl: "https://github.com/tomygp97/lavadero", //TODO: Agregar URL real del repo
        demoUrl: "https://lavadero-eta.vercel.app/", //TODO: Agregar URL real del demo
        image: lavappBackground
    },
    {
        title: "Jobify",
        description: "platform designed to allow users to search for and create job listings.",
        technologies: ["React.js 18", "Next.js 14", "Node.js", "Express.js", "MongoDB"],
        githubUrl: "https://github.com/tomygp97/Jobify",
        demoUrl: "https://jobify-082g.onrender.com/",
        image: jobifyBackground
    },
    {
        title: "Botto Maquinarias",
        description: "Corporate Website development for an agricultural machinery company in Santa Fe, Argentina.",
        technologies: ["React.js 18", "Next.js 14", "email.js", "Framer Motion", "Git LFS"],
        githubUrl: "https://github.com/tomygp97/botto-maquinarias",
        demoUrl: "https://www.bottomaquinarias.com.ar/",
        image: bottoBackground
    },
    // Add more projects as needed
]