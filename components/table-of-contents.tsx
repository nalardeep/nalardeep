"use client";

import { useEffect, useState, useRef } from 'react';
import { AlignLeft } from 'lucide-react';

interface Heading {
    id: string;
    text: string;
    level: number;
}

export default function TableOfContents() {
    const [headings, setHeadings] = useState<Heading[]>([]);
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const elements = Array.from(document.querySelectorAll('.prose h2, .prose h3'))
            .map((element) => ({
                id: element.id,
                text: element.textContent || '',
                level: Number(element.tagName.charAt(1)),
            }));
        setHeadings(elements);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '0px 0px -80% 0px' }
        );

        elements.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const navRef = useRef<HTMLDivElement>(null);

    // Auto-scroll the TOC to keep the active item in view
    useEffect(() => {
        if (!activeId || !navRef.current) return;

        const activeLink = navRef.current.querySelector(`a[href="#${activeId}"]`);
        if (activeLink) {
            activeLink.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest', // Keeps it in view without jarring jumps
            });
        }
    }, [activeId]);

    if (headings.length === 0) return null;

    return (
        <div
            ref={navRef}
            className="hidden xl:block sticky top-32 h-fit max-h-[calc(100vh-9rem)] overflow-y-auto max-w-[250px] pb-4"
        >
            <div className="flex items-center gap-2 mb-4 text-gray-900 font-bold">
                <AlignLeft className="w-4 h-4" />
                <span className="text-sm uppercase tracking-wider">On this page</span>
            </div>
            <nav className="relative border-l border-gray-100">
                <ul className="space-y-3 text-sm">
                    {headings.map((heading, index) => (
                        <li key={heading.id || index}
                            className={`pl-4 relative transition-colors ${heading.level === 3 ? 'ml-4' : ''}`}
                        >
                            <a
                                href={`#${heading.id}`}
                                className={`block transition-colors hover:text-primary-600 ${activeId === heading.id
                                    ? 'text-primary-600 font-bold'
                                    : 'text-gray-500'
                                    }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const element = document.getElementById(heading.id);
                                    if (element) {
                                        const y = element.getBoundingClientRect().top + window.scrollY - 100; // 100px offset for header
                                        window.scrollTo({ top: y, behavior: 'smooth' });
                                    }
                                    setActiveId(heading.id);
                                }}
                            >
                                {heading.text}
                            </a>
                            {/* Active indicator line */}
                            {activeId === heading.id && (
                                <div className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-primary-500 rounded-full transition-all duration-300" />
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

// Note: The indicator line logic above is simplified.
// A cleaner active state is just highlighting the text border-left instead of a moving slider for simplicity and robustness.
