'use client'

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks, siteConfig, uiLabels } from '../../constants'

export default function Header() {
    const [isTransparent, setIsTransparent] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuButtonRef = useRef<HTMLButtonElement>(null);

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

    useEffect(() => {
        if (!isMenuOpen) return;

        // Escape cierra el menú y devuelve el foco al botón
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
                menuButtonRef.current?.focus();
            }
        };

        // Si la ventana pasa a desktop con el menú abierto, se cierra
        const desktopQuery = window.matchMedia('(min-width: 768px)');
        const handleBreakpoint = (event: MediaQueryListEvent) => {
            if (event.matches) setIsMenuOpen(false);
        };

        document.addEventListener('keydown', handleKeyDown);
        desktopQuery.addEventListener('change', handleBreakpoint);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            desktopQuery.removeEventListener('change', handleBreakpoint);
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

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
                    ref={menuButtonRef}
                    type="button"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? uiLabels.closeMenu : uiLabels.openMenu}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                    className="md:hidden -mr-2 flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                    {/* Tres barras que se transforman en una X */}
                    <span aria-hidden="true" className="relative block h-4 w-6">
                        <span className={`absolute left-0 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-out ${isMenuOpen ? 'top-[7px] rotate-45' : 'top-0'}`} />
                        <span className={`absolute left-0 top-[7px] h-0.5 rounded-full bg-current transition-all duration-300 ease-out ${isMenuOpen ? 'w-0 opacity-0' : 'w-4 opacity-100'}`} />
                        <span className={`absolute left-0 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-out ${isMenuOpen ? 'top-[7px] -rotate-45' : 'top-[14px]'}`} />
                    </span>
                </button>

                {/* Navegación desktop */}
                <ul className="hidden md:flex md:items-center md:gap-4">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className="underline-hover inline-block py-2">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Navegación mobile */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            key="backdrop"
                            aria-hidden="true"
                            onClick={closeMenu}
                            className="md:hidden fixed inset-x-0 bottom-0 top-16 -z-10 bg-black/60 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        />
                        <motion.div
                            key="panel"
                            id="mobile-menu"
                            className="md:hidden absolute top-full left-0 right-0 overflow-hidden rounded-b-2xl border-t border-white/10 bg-[#3E3B3C] shadow-2xl"
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                        >
                            <motion.ul
                                className="container mx-auto flex flex-col px-4 py-3"
                                initial="hidden"
                                animate="visible"
                                variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } } }}
                            >
                                {navLinks.map((link) => (
                                    <motion.li
                                        key={link.href}
                                        className="border-b border-white/10 last:border-b-0"
                                        variants={{
                                            hidden: { opacity: 0, x: -12 },
                                            visible: { opacity: 1, x: 0 },
                                        }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={closeMenu}
                                            className="group flex items-center justify-between rounded-lg px-2 py-4 text-lg font-medium text-white/90 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                                        >
                                            {link.label}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    )
}
