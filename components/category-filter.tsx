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
            <div className="flex flex-nowrap md:flex-wrap items-center gap-4 border-b-3 border-gray-900 pb-6 overflow-x-auto scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
                {/* All / Semua Tab */}
                <Link
                    href="/articles"
                    className={`shrink-0 px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-200 memphis-border ${
                        isAllActive
                            ? "bg-emerald-400 text-gray-900 memphis-shadow -translate-y-0.5"
                            : "bg-white text-gray-700 hover:bg-gray-50 hover:memphis-shadow hover:-translate-y-0.5"
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
                            className={`shrink-0 px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-200 memphis-border ${
                                isActive
                                    ? "bg-emerald-400 text-gray-900 memphis-shadow -translate-y-0.5"
                                    : "bg-white text-gray-700 hover:bg-gray-50 hover:memphis-shadow hover:-translate-y-0.5"
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
                            className={`flex items-center gap-2 px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-200 memphis-border cursor-pointer select-none ${
                                isActiveInOthers
                                    ? "bg-emerald-400 text-gray-900 memphis-shadow -translate-y-0.5"
                                    : "bg-yellow-300 text-gray-900 hover:bg-yellow-400 hover:memphis-shadow hover:-translate-y-0.5"
                            }`}
                        >
                            <span>
                                {isActiveInOthers && activeOtherTag ? `${activeOtherTag.name} (${activeOtherTag.count})` : "Kategori Lain"}
                            </span>
                            <ChevronDown className="w-4 h-4 shrink-0" />
                        </button>

                        {/* Modal Pop-up */}
                        {isOpen && (
                            <div className="fixed top-[92px] inset-x-0 bottom-0 z-40 flex items-center justify-center p-6 md:p-8">
                                {/* Dark semi-transparent backdrop overlay below navbar */}
                                <div 
                                    className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-default animate-fade-in" 
                                    onClick={() => setIsOpen(false)}
                                ></div>
                                
                                {/* Modal Content Box */}
                                <div className="relative w-full max-w-md bg-white p-6 border-4 border-gray-900 shadow-[8px_8px_0px_0px_#171717] z-10 max-h-full flex flex-col animate-zoom-in">
                                    {/* Modal Header */}
                                    <div className="flex items-center justify-between pb-4 border-b-2 border-gray-900 mb-6">
                                        <h3 className="text-lg font-extrabold text-gray-900 uppercase tracking-wide flex items-center gap-2">
                                            <Tag className="w-5 h-5 text-emerald-500" />
                                            Kategori Lainnya
                                        </h3>
                                        <button 
                                            onClick={() => setIsOpen(false)}
                                            className="p-1 hover:bg-gray-100 border-2 border-transparent hover:border-gray-900 transition-all cursor-pointer"
                                            aria-label="Tutup"
                                        >
                                            <X className="w-6 h-6 text-gray-900" />
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
                                                        className={`flex items-center justify-between p-3 text-xs font-bold uppercase tracking-wide border-2 transition-all ${
                                                            isActive
                                                                ? "bg-emerald-100 text-emerald-950 border-gray-900 shadow-[3px_3px_0px_0px_#171717]"
                                                                : "bg-white text-gray-700 border-gray-300 hover:border-gray-900 hover:shadow-[3px_3px_0px_0px_#171717]"
                                                        }`}
                                                    >
                                                        <span className="truncate flex items-center gap-1.5 mr-2">
                                                            <Tag className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                                                            {tag.name}
                                                        </span>
                                                        <span className="text-gray-500 text-[10px] bg-gray-100 px-2 py-0.5 border border-gray-200 shrink-0">
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
