"use client";

import Link from 'next/link';
import Image from 'next/image';
import Container from './container';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Artikel', path: '/articles' },
        { name: 'Jasa', path: '/services' },
        { name: 'Kontak', path: '/contact' },
        { name: 'Tentang', path: '/about' },
    ];

    const isActive = (path: string) => {
        if (path === '/articles') {
            return pathname === '/articles' || pathname.startsWith('/posts/') || pathname.startsWith('/tags/');
        }
        return pathname === path;
    };

    return (
        <header className="py-5 border-b-4 border-gray-900 bg-white sticky top-0 z-50">
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
                        <ul className="flex items-center gap-6 text-sm">
                            {navLinks.map((link) => {
                                const active = isActive(link.path);
                                return (
                                    <li key={link.path}>
                                        <Link 
                                            href={link.path} 
                                            className={`px-3 py-1.5 transition-all duration-200 block ${
                                                active
                                                    ? "bg-yellow-300 text-gray-900 font-bold memphis-border memphis-shadow -translate-y-0.5"
                                                    : "text-gray-600 hover:text-primary-500 hover:-translate-y-0.5 hover:font-bold"
                                            }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* CTA Button & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/services"
                            className="hidden md:inline-block bg-emerald-400 text-gray-900 font-bold px-4 py-2 text-xs uppercase tracking-wider memphis-border memphis-shadow hover:memphis-shadow-hover hover:-translate-y-0.5 transition-all duration-200 select-none cursor-pointer"
                        >
                            Eksplorasi Jasa
                        </Link>

                        <button
                            className="md:hidden p-2 text-gray-600 cursor-pointer"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle navigation menu"
                        >
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white border-b-3 border-gray-900 shadow-lg py-6 px-4 flex flex-col items-center gap-4 z-50">
                        {navLinks.map((link) => {
                            const active = isActive(link.path);
                            return (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`w-full text-center py-2.5 text-base font-bold uppercase tracking-wider border-2 transition-all ${
                                        active
                                            ? "bg-yellow-300 text-gray-900 border-gray-900 shadow-[3px_3px_0px_0px_#171717]"
                                            : "text-gray-600 border-transparent hover:border-gray-900 hover:text-gray-900"
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                        {/* Mobile CTA */}
                        <Link
                            href="/services"
                            className="w-full text-center py-3 mt-2 bg-emerald-400 text-gray-900 font-bold uppercase tracking-wider text-xs border-3 border-gray-900 shadow-[4px_4px_0px_0px_#171717] hover:shadow-[5px_5px_0px_0px_#171717] active:translate-y-0.5 transition-all"
                            onClick={() => setIsOpen(false)}
                        >
                            Layanan Jasa AI
                        </Link>
                    </div>
                )}
            </Container>
        </header>
    );
};

export default Header;
