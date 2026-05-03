'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CopyButtonProps {
    text: string;
}

export const CopyButton = ({ text }: CopyButtonProps) => {
    const [isCopied, setIsCopied] = useState(false);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <button
            onClick={copy}
            className="absolute right-4 top-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all border border-white/10 opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Copy code"
        >
            {isCopied ? (
                <Check className="w-4 h-4 text-green-400" />
            ) : (
                <Copy className="w-4 h-4 text-gray-400" />
            )}
        </button>
    );
};
