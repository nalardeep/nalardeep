"use client";

import Image from 'next/image';
import Container from './container';
import { Sparkles, BookOpen, Rocket } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';

const Hero = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

    // Feature Highlights for Carousel
    const highlights = [
        {
            type: "Artikel",
            title: "Tutorial AI",
            desc: "Tutorial LLMs, chatbot, N8N, LM Studio, MCP dan masih banyak lagi",
            icon: <BookOpen className="w-6 h-6 text-blue-500" />,
            action: "Baca Artikel",
            href: "/articles",
            bg: "bg-blue-50 border-blue-100",
            text: "text-blue-700",
            image: "/assets/blog/cara-menjalankan-llm-di-laptop-kentang/cara-menjalankan-llm-di-laptop-kentang.webp"
        }
        // {
        //     type: "Project",
        //     title: "Prompt Labs",
        //     desc: "Panduan open source komprehensif untuk menguasai teknik, template, dan orkestrasi Prompt Engineering AI.",
        //     icon: <Sparkles className="w-6 h-6 text-amber-500" />,
        //     action: "Kunjungi Prompt Labs",
        //     href: "https://prompt-labs-nine.vercel.app/",
        //     bg: "bg-amber-50 border-amber-100",
        //     text: "text-amber-700",
        //     image: "/assets/blog/thumb-caresoul/prompt-labs-mockup.png"
        // }
        // ,
        // {
        //     type: "Tools",
        //     title: "Tahap Pengembangan",
        //     desc: "Tahap Pengambangan.",
        //     icon: <Rocket className="w-6 h-6 text-purple-500" />,
        //     action: "Stay Tuned",
        //     href: "#",
        //     bg: "bg-purple-50 border-purple-100",
        //     text: "text-purple-700",
        //     image: null
        // }
    ];

    return (
        <section className="relative pt-10 pb-24 md:pt-16 md:pb-32 bg-white overflow-hidden">
            {/* Memphis Background Decorations */}
            <div className="absolute inset-0 z-0 bg-dots opacity-[0.05] pointer-events-none"></div>
            
            <div className="absolute top-20 left-10 hidden md:block animate-pulse duration-1000">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round">
                    <path d="M10 20 L30 20 M20 10 L20 30" />
                </svg>
            </div>
            
            <div className="absolute top-40 right-10 hidden md:block animate-bounce duration-1000" style={{ animationDelay: '0.5s' }}>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="#eab308" stroke="#171717" strokeWidth="3">
                    <circle cx="15" cy="15" r="10" />
                </svg>
            </div>
            
            <div className="absolute bottom-20 left-20 hidden md:block animate-bounce duration-1000">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#3b82f6" strokeWidth="3">
                    <path d="M5 20 Q 12 5, 20 20 T 35 20" />
                </svg>
            </div>

            <div className="absolute bottom-40 right-20 hidden md:block animate-pulse duration-1000" style={{ animationDelay: '0.3s' }}>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="#10b981" stroke="#171717" strokeWidth="3">
                    <rect x="5" y="5" width="20" height="20" />
                </svg>
            </div>


            <Container>
                <div className="relative max-w-5xl mx-auto flex flex-col items-center z-10">

                    {/* Carousel Section (Top) */}
                    <div className="w-full mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
                        <div className="overflow-hidden bg-white memphis-border memphis-shadow" ref={emblaRef}>
                            <div className="flex">
                                {highlights.map((item, index) => (
                                    <div key={index} className="flex-[0_0_100%] min-w-0">
                                        <div className={`grid md:grid-cols-2 gap-8 p-8 md:p-10 ${item.bg} h-full items-center`}>

                                            {/* Text Content */}
                                            <div className="flex flex-col items-start gap-4">
                                                <div className="p-3 bg-white memphis-border memphis-shadow w-fit">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <h3 className={`text-2xl md:text-3xl font-bold ${item.text} mb-3`}>{item.title}</h3>
                                                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">{item.desc}</p>

                                                    {item.href !== '#' ? (
                                                        <Link href={item.href} className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-bold memphis-border memphis-shadow hover:memphis-shadow-hover hover:-translate-y-1 transition-all">
                                                            {item.action} <span aria-hidden="true">→</span>
                                                        </Link>
                                                    ) : (
                                                        <span className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-500 font-bold memphis-border cursor-not-allowed">
                                                            {item.action}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Image Content */}
                                            <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[4/3] overflow-hidden bg-white memphis-border memphis-shadow-hover">
                                                {item.image ? (
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        fill
                                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                                        sizes="(max-width: 768px) 100vw, 50vw"
                                                        priority={index === 0}
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-gray-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
                                                        <Rocket className="w-24 h-24 text-gray-300 opacity-50" />
                                                    </div>
                                                )}
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Headline */}
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 bg-yellow-300 memphis-border px-4 py-2 text-sm font-bold text-gray-900 mb-6 memphis-shadow">
                            <Sparkles className="w-3.5 h-3.5 fill-yellow-400 text-yellow-500" />
                            <span className="font-semibold">Semoga bermanfaat</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
                            Eksplorasi, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-sky-500">Eksperimen</span> dan Evaluasi
                        </h1>

                        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            Berita terbaru tentang AI. Mulai dari implementasi MCP, otomatisasi n8n, pengembangan chatbot, RAG, LLM dan banyak lagi.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
