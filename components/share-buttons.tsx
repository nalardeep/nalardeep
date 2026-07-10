"use client";

import { Twitter, Linkedin, Link2, Check } from "lucide-react";
import { useState } from "react";

const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-1.099-1.006-1.84-2.247-2.056-2.627-.217-.38-.023-.585.163-.775.165-.168.371-.387.557-.58.183-.193.247-.33.371-.55.124-.22.062-.412-.025-.566-.087-.154-.67-1.614-.917-2.212-.24-.583-.604-.597-.83-.604-.215-.006-.462-.007-.706-.007-.244 0-.614.088-.936.442-.322.353-1.225 1.197-1.225 2.92 0 1.722 1.254 3.383 1.43 3.617.176.234 2.474 3.777 5.996 5.297 2.392 1.064 3.32 1.13 4.502.92 1.098-.19 1.788-.78 2.026-1.296.238-.517.238-.956.166-1.127-.07-.17-.262-.27-.559-.42z" />
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.88.518 3.64 1.418 5.144L2.09 21.91l4.766-1.328A9.954 9.954 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.823 0-3.53-.62-4.89-1.656l-.35-.266-2.84.792.758-2.76-.22-.373A7.96 7.96 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
    </svg>
);

const TelegramIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.24-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
);

interface ShareButtonsProps {
    title: string;
    slug: string;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
    const [copied, setCopied] = useState(false);
    const url = `https://nalardeep.com/posts/${slug}`;
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const fullText = `${title} ${url}`;

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

            <a
                href={`https://wa.me/?text=${encodeURIComponent(fullText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-[#25D366] hover:text-white transition-all duration-300"
                aria-label="Share on WhatsApp"
            >
                <WhatsAppIcon />
            </a>

            <a
                href={`https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-[#0088cc] hover:text-white transition-all duration-300"
                aria-label="Share on Telegram"
            >
                <TelegramIcon />
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
