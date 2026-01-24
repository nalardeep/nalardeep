"use client";

import { Twitter, Linkedin, Link2, Check } from "lucide-react";
import { useState } from "react";

interface ShareButtonsProps {
    title: string;
    slug: string;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
    const [copied, setCopied] = useState(false);
    const url = `https://nalardeep.com/posts/${slug}`;
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    const handleCopy = () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-gray-500 uppercase tracking-wider mr-2">Share:</span>

            <a
                href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-black hover:text-white transition-all duration-300"
                aria-label="Share on Twitter"
            >
                <Twitter className="w-4 h-4" />
            </a>

            <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-[#0077b5] hover:text-white transition-all duration-300"
                aria-label="Share on LinkedIn"
            >
                <Linkedin className="w-4 h-4" />
            </a>

            <button
                onClick={handleCopy}
                className={`p-2 rounded-full transition-all duration-300 ${copied
                    ? "bg-green-100 text-green-600"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                aria-label="Copy Link"
            >
                {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
            </button>
        </div>
    );
}
