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
