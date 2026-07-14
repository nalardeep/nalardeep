"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Tag, X } from "lucide-react";
import { TagWithCount } from "@/lib/api";

interface CategoryFilterProps {
    tags: TagWithCount[];
    currentTag?: string;
}

export default function CategoryFilter({ tags, currentTag }: CategoryFilterProps) {
    const [isOpen, setIsOpen] = useState(false);

    // Limit to top 6 tags for the main bar
    const popularLimit = 6;
    const popularTags = tags.slice(0, popularLimit);
    const otherTags = tags.slice(popularLimit);

    const isAllActive = !currentTag;
    
    // Check if the current active tag is in the "otherTags" list
    const isActiveInOthers = currentTag ? otherTags.some(t => t.slug === currentTag) : false;
    const activeOtherTag = currentTag ? otherTags.find(t => t.slug === currentTag) : null;

    return (
        <div className="mb-12 relative z-30">
            {/* Horizontal scrollable wrapper for mobile responsiveness */}
            <div className="flex flex-nowrap md:flex-wrap items-center gap-3 border-b border-slate-100 pb-6 overflow-x-auto scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
                {/* All / Semua Tab */}
                <Link
                    href="/articles"
                    className={`shrink-0 px-4.5 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 ${
                        isAllActive
                            ? "bg-emerald-50 text-emerald-600 border border-emerald-100/50 shadow-sm"
                            : "bg-white text-slate-600 hover:text-emerald-500 border border-slate-100 hover:border-slate-200 hover:-translate-y-0.5"
                    }`}
                >
                    Semua ({tags.reduce((acc, curr) => acc + curr.count, 0)})
                </Link>

                {/* Popular Tags */}
                {popularTags.map((tag) => {
                    const isActive = currentTag === tag.slug;
                    return (
                        <Link
                            key={tag.slug}
                            href={`/tags/${tag.slug}`}
                            className={`shrink-0 px-4.5 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 ${
                                isActive
                                    ? "bg-emerald-50 text-emerald-600 border border-emerald-100/50 shadow-sm"
                                    : "bg-white text-slate-600 hover:text-emerald-500 border border-slate-100 hover:border-slate-200 hover:-translate-y-0.5"
                            }`}
                        >
                            {tag.name} ({tag.count})
                        </Link>
                    );
                })}

                {/* Button for Other Tags (Triggers Pop-up Modal) */}
                {otherTags.length > 0 && (
                    <div className="shrink-0">
                        <button
                            onClick={() => setIsOpen(true)}
                            className={`flex items-center gap-1.5 px-4.5 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer select-none ${
                                isActiveInOthers
                                    ? "bg-emerald-50 text-emerald-600 border border-emerald-100/50 shadow-sm"
                                    : "bg-white text-slate-600 hover:text-emerald-500 border border-slate-100 hover:border-slate-200 hover:-translate-y-0.5"
                            }`}
                        >
                            <span>
                                {isActiveInOthers && activeOtherTag ? `${activeOtherTag.name} (${activeOtherTag.count})` : "Kategori Lain"}
                            </span>
                            <ChevronDown className="w-3.5 h-3.5 shrink-0 text-emerald-500" />
                        </button>

                        {/* Modal Pop-up */}
                        {isOpen && (
                            <div className="fixed top-[92px] inset-x-0 bottom-0 z-40 flex items-center justify-center p-6 md:p-8">
                                {/* Dark semi-transparent backdrop overlay below navbar */}
                                <div 
                                    className="absolute inset-0 bg-slate-900/40 cursor-default animate-fade-in" 
                                    onClick={() => setIsOpen(false)}
                                ></div>
                                
                                {/* Modal Content Box */}
                                <div className="relative w-full max-w-md bg-white p-6 border border-slate-100 rounded-2xl shadow-md z-10 max-h-full flex flex-col animate-zoom-in">
                                    {/* Modal Header */}
                                    <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                                        <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                                            <Tag className="w-4 h-4 text-emerald-500" />
                                            Kategori Lainnya
                                        </h3>
                                        <button 
                                            onClick={() => setIsOpen(false)}
                                            className="p-1 hover:bg-slate-50 border border-transparent rounded-lg transition-all cursor-pointer"
                                            aria-label="Tutup"
                                        >
                                            <X className="w-5 h-5 text-slate-500" />
                                        </button>
                                    </div>
                                    
                                    {/* Modal Body */}
                                    <div className="overflow-y-auto pr-2 flex-1 scrollbar-thin">
                                        <div className="grid grid-cols-2 gap-3 pb-2">
                                            {otherTags.map((tag) => {
                                                const isActive = currentTag === tag.slug;
                                                return (
                                                    <Link
                                                        key={tag.slug}
                                                        href={`/tags/${tag.slug}`}
                                                        onClick={() => setIsOpen(false)}
                                                        className={`flex items-center justify-between p-3 text-xs font-semibold uppercase tracking-wide border rounded-xl transition-all ${
                                                            isActive
                                                                ? "bg-emerald-50 text-emerald-600 border-emerald-100/50 shadow-sm"
                                                                : "bg-white text-slate-600 border-slate-100 hover:border-slate-200 hover:shadow-sm"
                                                        }`}
                                                    >
                                                        <span className="truncate flex items-center gap-1.5 mr-2">
                                                            <Tag className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                                            {tag.name}
                                                        </span>
                                                        <span className="text-slate-500 text-[10px] bg-slate-50 px-2 py-0.5 border border-slate-100 rounded shrink-0">
                                                            {tag.count}
                                                        </span>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
