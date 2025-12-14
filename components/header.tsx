"use client";

import Link from 'next/link';
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
                    <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-gray-900 group">
                        <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5c0-2-2-3-4-3-1 2-3 2-3 6 0 5.5 5 10 10 10 6-3 6-7 6-7" /></svg>
                        </div>
                        minggo-commits
                    </Link>

                    {/* Centered Nav (Desktop) */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-8 text-sm font-medium text-gray-600">
                            <li>
                                <Link href="/articles" className="hover:text-primary-500 transition-colors">Articles</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:text-primary-500 transition-colors">Newsletter</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:text-primary-500 transition-colors">About</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* CTA Button & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <button className="hidden md:block bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors">
                            Subscribe
                        </button>

                        {/* Mobile Subscribe (Icon or Mini) - Optional, hiding text for cleaner mobile */}
                        <button className="md:hidden bg-primary-500 hover:bg-primary-600 text-white text-xs font-medium px-4 py-2 rounded-full transition-colors">
                            Subscribe
                        </button>

                        <button
                            className="md:hidden p-2 text-gray-600"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-4 flex flex-col gap-4">
                        <Link href="/articles" className="text-gray-600 hover:text-primary-500 font-medium py-2 block" onClick={() => setIsOpen(false)}>Articles</Link>
                        <Link href="/" className="text-gray-600 hover:text-primary-500 font-medium py-2 block" onClick={() => setIsOpen(false)}>Newsletter</Link>
                        <Link href="/" className="text-gray-600 hover:text-primary-500 font-medium py-2 block" onClick={() => setIsOpen(false)}>About</Link>
                    </div>
                )}
            </Container>
        </header>
    );
};

export default Header;
