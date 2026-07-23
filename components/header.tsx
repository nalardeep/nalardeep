"use client";

import Link from 'next/link';
import Image from 'next/image';
import Container from './container';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import SearchBar from './search-bar';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Artikel', path: '/articles' },
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
        <header className="py-4 border-b border-slate-100 bg-white sticky top-0 z-50">
            <Container>
                <div className="flex items-center justify-start h-12">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <Image
                            src="/logo.png"
                            alt="NalarDeep Logo"
                            width={240}
                            height={64}
                            className="h-12 w-auto object-contain"
                            priority
                            unoptimized
                        />
                    </Link>

                    {/* Centered Nav (Desktop) */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-4 text-sm">
                            {navLinks.map((link) => {
                                const active = isActive(link.path);
                                return (
                                    <li key={link.path}>
                                        <Link 
                                            href={link.path} 
                                            className={`px-3.5 py-2 rounded-lg transition-all duration-300 block font-medium text-sm ${
                                                active
                                                    ? "bg-emerald-500  text-white font-semibold border border-emerald-100/50 "
                                                    : " hover:text-emerald-500 transition-colors"
                                            }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Desktop Search + CTA Button & Mobile Toggle */}
                    <div className="flex ml-auto gap-3">
                        <div className="hidden md:block">
                            <SearchBar />
                        </div>
                        <Link
                            href="/services"
                            className="hidden md:inline-block bg-emerald-500 text-white font-semibold px-4.5 py-2.5 text-xs uppercase tracking-wider rounded-lg select-none cursor-pointer"
                        >
                            Eksplorasi Jasa
                        </Link>

                        <button
                            className="md:hidden p-2 text-slate-600 rounded-lg cursor-pointer"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle navigation menu"
                        >
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl py-6 px-4 flex flex-col items-center gap-4 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
                        <div className="w-full md:hidden">
                            <SearchBar />
                        </div>
                        {navLinks.map((link) => {
                            const active = isActive(link.path);
                            return (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`w-full text-center py-2.5 text-sm font-semibold uppercase tracking-wider rounded-lg transition-all ${
                                        active
                                            ? "bg-emerald-500 text-emerald-600 text-white border border-emerald-100/50"
                                            : "text-slate-600 border border-transparent"
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
                            className="w-full text-center py-3 mt-2 bg-emerald-500 text-white font-semibold uppercase tracking-wider text-xs rounded-lg"
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
