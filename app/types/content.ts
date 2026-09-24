import type { StaticImageData } from 'next/image'

export type SiteConfig = {
    url: string
    name: string
    title: string
    description: string
    locale: string
}

export type Technology = {
    name: string
    // Ruta del ícono dentro de /public
    icon: string
}

export type Experience = {
    company: string
    role: string
    period: string
    description: string
}

export type ContactItem = {
    label: string
    href: string
    username: string
    // Ruta del ícono dentro de /public
    icon: string
}

export type Project = {
    title: string
    description: string
    technologies: string[]
    githubUrl: string
    demoUrl: string
    image: StaticImageData
}

export type Hero = {
    role: string
    pitch: string
    photo: { src: string; alt: string }
    resume: { href: string; label: string }
}

export type NavLink = {
    href: string
    label: string
}

export type SectionTitles = {
    technologies: string
    projects: string
    experience: string
    contact: string
}

export type UiLabels = {
    github: string
    liveDemo: string
    copyEmail: string
    emailCopied: string
    emailCopiedAnnouncement: string
    openMenu: string
    closeMenu: string
    copyright: string
}
