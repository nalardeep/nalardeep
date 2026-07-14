'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 400);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className={`fixed bottom-8 right-8 z-40 p-3 rounded-xl bg-emerald-500 text-white shadow-md hover:shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 ${
                visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
            }`}
        >
            <ArrowUp className="w-5 h-5" />
        </button>
    );
}
