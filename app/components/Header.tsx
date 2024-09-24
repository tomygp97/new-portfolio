'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link'

export default function Header() {
    const [isTransparent, setIsTransparent] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Cambiar a fondo opaco al hacer scroll
            // Cambia el umbral a una fracción de la altura de la ventana (por ejemplo, 0.1 significa 10%)
            const threshold = window.innerHeight * 0.75; // Cambia este valor según sea necesario
            if (window.scrollY > threshold) {
                setIsTransparent(false);
            } else {
                setIsTransparent(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        // <header className="sticky top-0 bg-gray-800 text-white py-4 z-50">
        <header className={`fixed top-0 left-0 right-0 text-white py-4 z-50 transition-colors duration-300 ${isTransparent ? 'bg-transparent' : 'bg-[#3E3B3C] '}`}>
            <nav className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                {/* TG */}
                    Tomás Gutiérrez
                </Link>
                <div className="md:hidden flex items-center">
                    {/* Botón de menú hamburguesa */}
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>
                {/* <ul className="flex space-x-4"> */}
                <ul className={`md:flex space-x-4 ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row md:items-center absolute md:static top-full right-0 w-full md:w-auto ${isMenuOpen ? 'bg-[#3E3B3C]' : 'md:bg-transparent'}`}>
                    <li className="text-center"><Link href="#home" className="underline-hover py-2">Home</Link></li>
                    <li className="text-center"><Link href="#technologies" className="underline-hover py-2">Technologies</Link></li>
                    <li className="text-center"><Link href="#experience" className="underline-hover py-2">Experience</Link></li>
                    <li className="text-center"><Link href="#contact" className="underline-hover py-2">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}