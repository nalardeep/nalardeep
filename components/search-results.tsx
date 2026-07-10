import Link from 'next/link';
import { Post } from '@/types';
import { FileText, ArrowRight } from 'lucide-react';

interface SearchResultsProps {
    results: Post[];
    query: string;
    onSelect: () => void;
}

export default function SearchResults({ results, query, onSelect }: SearchResultsProps) {
    if (!query) return null;

    if (results.length === 0) {
        return (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 p-4 z-50 animate-in fade-in slide-in-from-top-2">
                <p className="text-gray-500 text-center text-sm py-2">Tidak ditemukan untuk "{query}"</p>
            </div>
        );
    }

    return (
        <div
            onMouseDown={(e) => e.preventDefault()}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 max-h-[60vh] overflow-y-auto text-left"
        >
            <div className="p-2">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 py-2">Artikel Terkait</h3>
                {results.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/posts/${post.slug}`}
                        onClick={onSelect}
                        className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                        <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center text-primary-500 shrink-0 group-hover:bg-primary-100 transition-colors">
                            <FileText className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-gray-900 group-hover:text-primary-600 truncate transition-colors">
                                {post.title}
                            </h4>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-[10px] uppercase font-bold text-primary-600 bg-primary-50 px-1.5 py-0.5 rounded">
                                    {post.readingTime}
                                </span>
                                <p className="text-xs text-gray-500 line-clamp-1">
                                    {post.excerpt}
                                </p>
                            </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary-500 self-center transition-colors" />
                    </Link>
                ))}
            </div>
            <div className="bg-gray-50 p-2 text-center border-t border-gray-100">
                <Link href={`/search?q=${encodeURIComponent(query)}`} className="text-xs font-medium text-primary-500 hover:text-primary-600">
                    Lihat semua hasil &rarr;
                </Link>
            </div>
        </div>
    );
}
