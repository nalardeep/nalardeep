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
            className="p-1 rounded-md bg-white/[0.06] hover:bg-white/[0.14] transition-all border border-white/[0.06] opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Copy code"
        >
            {isCopied ? (
                <Check className="w-3 h-3 text-emerald-400" />
            ) : (
                <Copy className="w-3 h-3 text-slate-500" />
            )}
        </button>
    );
};
