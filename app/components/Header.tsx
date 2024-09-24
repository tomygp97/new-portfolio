import Link from 'next/link'

export default function Header() {
    return (
        <header className="sticky top-0 bg-gray-800 text-white py-4 z-50">
            <nav className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                {/* TG */}
                    Tomás Gutiérrez
                </Link>
                <ul className="flex space-x-4">
                    <li><Link href="#home" className="hover:text-gray-300">Home</Link></li>
                    <li><Link href="#technologies" className="hover:text-gray-300">Technologies</Link></li>
                    <li><Link href="#experience" className="hover:text-gray-300">Experience</Link></li>
                    <li><Link href="#contact" className="hover:text-gray-300">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}