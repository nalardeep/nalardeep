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
            icon: <BookOpen className="w-6 h-6 text-emerald-500" />,
            action: "Baca Artikel",
            href: "/articles",
            bg: "bg-emerald-50/20 border-emerald-100/20",
            text: "text-emerald-800",
            image: "/assets/blog/cara-menjalankan-llm-di-laptop-kentang/cara-menjalankan-llm-di-laptop-kentang.webp"
        }
    ];

    return (
        <section className="relative pt-10 pb-24 md:pt-16 md:pb-32 bg-white overflow-hidden">
            {/* Memphis Background Decorations */}
            <div className="absolute inset-0 z-0 bg-dots opacity-[0.03] pointer-events-none"></div>

            <Container>
                <div className="relative max-w-5xl mx-auto flex flex-col items-center z-10">

                    {/* Carousel Section (Top) */}
                    <div className="w-full mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
                        <div className="overflow-hidden bg-white border border-slate-100 rounded-2xl shadow-sm" ref={emblaRef}>
                            <div className="flex">
                                {highlights.map((item, index) => (
                                    <div key={index} className="flex-[0_0_100%] min-w-0">
                                        <div className={`grid md:grid-cols-2 gap-8 p-8 md:p-10 ${item.bg} h-full items-center`}>

                                            {/* Text Content */}
                                            <div className="flex flex-col items-start gap-4">
                                                <div className="p-3 bg-white border border-slate-100 rounded-xl shadow-sm w-fit text-emerald-500">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <h3 className={`text-2xl md:text-3xl font-bold ${item.text} mb-3 tracking-tight`}>{item.title}</h3>
                                                    <p className="text-slate-600 mb-8 text-base leading-relaxed">{item.desc}</p>

                                                    {item.href !== '#' ? (
                                                        <Link href={item.href} className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-100 text-slate-800 font-semibold rounded-lg shadow-sm hover:shadow-md hover:border-emerald-200 hover:-translate-y-0.5 transition-all text-sm">
                                                            {item.action} <span aria-hidden="true" className="text-emerald-500">→</span>
                                                        </Link>
                                                    ) : (
                                                        <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-50 text-slate-400 font-semibold border border-slate-100 rounded-lg cursor-not-allowed text-sm">
                                                            {item.action}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Image Content */}
                                            <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[4/3] overflow-hidden bg-slate-50 border border-slate-100 rounded-xl shadow-sm">
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
                                                    <div className="w-full h-full flex items-center justify-center bg-slate-50">
                                                        <Rocket className="w-24 h-24 text-slate-300 opacity-50" />
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
                        <div className="inline-flex items-center gap-2 bg-emerald-50/80 border border-emerald-100/50 px-4 py-1.5 rounded-full text-xs font-semibold text-emerald-600 mb-6 shadow-sm">
                            <Sparkles className="w-3.5 h-3.5 fill-emerald-100 text-emerald-500" />
                            <span className="font-semibold">Semoga bermanfaat</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
                            Eksplorasi, <span className="text-emerald-600">Eksperimen</span> dan Evaluasi
                        </h1>

                        <p className="text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
                            Artikel terbaru tentang AI. Mulai dari implementasi MCP, otomatisasi n8n, pengembangan chatbot, RAG, LLM dan banyak lagi.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
