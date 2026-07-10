'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import Fuse from 'fuse.js';
import SearchResults from './search-results';

type SearchItem = {
    slug: string;
    title: string;
    excerpt: string;
    tags: string[];
    readingTime: string;
    date: string;
};

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [fuse, setFuse] = useState<Fuse<SearchItem> | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        fetch('/api/search-data')
            .then((res) => res.json())
            .then((data: SearchItem[]) => {
                setFuse(new Fuse(data, {
                    keys: [
                        { name: 'title', weight: 2 },
                        { name: 'excerpt', weight: 1 },
                        { name: 'tags', weight: 1.5 },
                    ],
                    threshold: 0.4,
                    includeScore: true,
                    minMatchCharLength: 2,
                }));
                setIsLoaded(true);
            });
    }, []);

    const handleSearch = useCallback((value: string) => {
        setQuery(value);
        if (!value.trim() || !fuse) {
            setResults([]);
            setIsOpen(false);
            return;
        }
        const searchResults = fuse.search(value.trim());
        setResults(searchResults.map((r) => r.item));
        setIsOpen(true);
    }, [fuse]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
                inputRef.current?.blur();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query.trim())}`);
            setIsOpen(false);
            setQuery('');
            inputRef.current?.blur();
        }
    };

    const handleSelect = () => {
        setIsOpen(false);
        setQuery('');
    };

    const handleFocus = () => {
        if (query.trim() && results.length > 0) {
            setIsOpen(true);
        }
    };

    const clearSearch = () => {
        setQuery('');
        setResults([]);
        setIsOpen(false);
        inputRef.current?.focus();
    };

    return (
        <div ref={containerRef} className="relative" role="search">
            <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus-within:border-emerald-400 focus-within:ring-2 focus-within:ring-emerald-100 transition-all duration-200">
                <Search className="w-4 h-4 text-slate-400 shrink-0" />
                <input
                    ref={inputRef}
                    type="search"
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onFocus={handleFocus}
                    placeholder={isLoaded ? 'Cari artikel...' : 'Memuat...'}
                    disabled={!isLoaded}
                    className="w-40 lg:w-56 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 outline-none border-none font-sans"
                    aria-label="Cari artikel"
                    autoComplete="off"
                />
                {query && (
                    <button onClick={clearSearch} className="p-0.5 text-slate-400 hover:text-slate-600 transition-colors" aria-label="Hapus pencarian">
                        <X className="w-3.5 h-3.5" />
                    </button>
                )}
            </div>

            {isOpen && (
                <SearchResults
                    results={results as any}
                    query={query}
                    onSelect={handleSelect}
                />
            )}
        </div>
    );
}
