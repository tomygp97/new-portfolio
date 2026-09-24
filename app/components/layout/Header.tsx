'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link'
import { navLinks, siteConfig, uiLabels } from '../../constants'

export default function Header() {
    const [isTransparent, setIsTransparent] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Pasa a fondo opaco al superar el 75% del alto de la ventana
            const threshold = window.innerHeight * 0.75;
            setIsTransparent(window.scrollY <= threshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    const isHeaderTransparent = isTransparent && !isMenuOpen;

    return (
        <header className={`fixed top-0 left-0 right-0 text-white py-2 z-50 transition-colors duration-300 ${isHeaderTransparent ? 'bg-transparent' : 'bg-[#3E3B3C]'}`}>
            <nav aria-label="Main" className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold py-2">
                    {siteConfig.name}
                </Link>
                <button
                    type="button"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? uiLabels.closeMenu : uiLabels.openMenu}
                    aria-expanded={isMenuOpen}
                    aria-controls="main-menu"
                    className="md:hidden -mr-2 flex h-11 w-11 items-center justify-center rounded"
                >
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
                <ul
                    id="main-menu"
                    className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row md:items-center md:gap-4 absolute md:static top-full left-0 w-full md:w-auto bg-[#3E3B3C] md:bg-transparent pb-4 md:pb-0 shadow-lg md:shadow-none`}
                >
                    {navLinks.map((link) => (
                        <li key={link.href} className="text-center">
                            <Link
                                href={link.href}
                                onClick={closeMenu}
                                className="underline-hover inline-block py-3 md:py-2"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
