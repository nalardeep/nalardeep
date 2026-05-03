"use client";

import Link from 'next/link';
import Image from 'next/image';
import Container from './container';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="py-5 border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <Container>
                <div className="flex items-center justify-between h-12">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <Image
                            src="/logo.png"
                            alt="NalarDeep Logo"
                            width={240}
                            height={64}
                            className="h-16 w-auto object-contain"
                            priority
                            unoptimized
                        />
                    </Link>

                    {/* Centered Nav (Desktop) */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-8 text-sm font-medium text-gray-600">
                            <li>
                                <Link href="/articles" className="hover:text-primary-500 transition-colors">Artikel</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-primary-500 transition-colors">Kontak</Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-primary-500 transition-colors">Tentang</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* CTA Button & Mobile Toggle */}
                    <div className="flex items-center gap-4">


                        <button
                            className="md:hidden p-2 text-gray-600"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle navigation menu"
                        >
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-4 flex flex-col items-center gap-4">
                        <Link href="/articles" className="text-gray-600 hover:text-primary-500 font-medium py-2 block" onClick={() => setIsOpen(false)}>Artikel</Link>
                        <Link href="/contact" className="text-gray-600 hover:text-primary-500 font-medium py-2 block" onClick={() => setIsOpen(false)}>Kontak</Link>
                        <Link href="/about" className="text-gray-600 hover:text-primary-500 font-medium py-2 block" onClick={() => setIsOpen(false)}>Tentang</Link>
                    </div>
                )}
            </Container>
        </header>
    );
};

export default Header;
