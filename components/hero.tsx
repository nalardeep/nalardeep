"use client";

import { useState, useMemo } from 'react';
import Container from './container';
import { Search, Sparkles } from 'lucide-react';
import { Post } from '@/types';
import Fuse from 'fuse.js';
import SearchResults from './search-results';

interface HeroProps {
    posts?: Post[];
}

const SUGGESTIONS = [
    "Generative AI",
    "LLM Tutorials",
    "Ethics",
    "Future Tech"
];

const Hero = ({ posts = [] }: HeroProps) => {
    const [query, setQuery] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    // Initialize Fuse
    // Safe check if posts is undefined
    const safePosts = posts || [];

    const fuse = useMemo(() => {
        return new Fuse(safePosts, {
            keys: ['title', 'excerpt'],
            threshold: 0.3,
        });
    }, [safePosts]);

    const results = useMemo(() => {
        if (!query) return [];
        return fuse.search(query).map(result => result.item).slice(0, 5);
    }, [query, fuse]);

    return (
        <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 bg-white">
            {/* Background Gradients - Subtle */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-3xl mix-blend-multiply filter animate-blob" />
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary-200/40 rounded-full blur-3xl mix-blend-multiply filter animate-blob animation-delay-2000" />
            </div>

            <Container>
                <div className="relative max-w-3xl mx-auto text-center flex flex-col items-center z-10">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 px-3 py-1 rounded-full text-xs font-bold text-primary-600 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <Sparkles className="w-3.5 h-3.5 fill-primary-600" />
                        <span>AI Knowledge Engine</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                        Hari ini mau ngulik <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-sky-600 pr-2">AI apa?</span>
                    </h1>

                    <p className="text-lg text-gray-500 mb-10 max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                        Jelajahi gudang tutorial lengkap dan langsung praktik aja.
                    </p>

                    {/* Search Interface */}
                    <div className="w-full max-w-2xl relative animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                        <div className={`relative transition-all duration-300 ${isFocused ? 'scale-[1.02] shadow-2xl shadow-primary-500/10' : 'shadow-xl shadow-gray-200/50'}`}>
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                <Search className={`w-5 h-5 transition-colors ${isFocused ? 'text-primary-500' : 'text-gray-400'}`} />
                            </div>
                            <input
                                type="text"
                                className="w-full h-16 pl-12 pr-4 rounded-xl border border-gray-200 bg-white text-lg placeholder:text-gray-400 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all"
                                placeholder="Cari artikel, topik, atau kata kunci..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setTimeout(() => setIsFocused(false), 200)} // Delay to allow click
                            />

                            {/* Live Results Dropdown */}
                            {isFocused && (
                                <SearchResults
                                    results={results}
                                    query={query}
                                    onSelect={() => setIsFocused(false)}
                                />
                            )}
                        </div>
                    </div>

                    {/* Suggestions */}
                    <div className="mt-8 flex flex-wrap justify-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
                        <span className="text-sm text-gray-400 font-medium py-1.5">Try searching:</span>
                        {SUGGESTIONS.map((suggestion) => (
                            <button
                                key={suggestion}
                                onClick={() => setQuery(suggestion)}
                                className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-sm font-medium text-gray-600 hover:border-primary-200 hover:text-primary-600 hover:bg-primary-50/50 transition-all"
                            >
                                {suggestion}
                            </button>
                        ))}
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default Hero;
