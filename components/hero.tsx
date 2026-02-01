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
            type: "article",
            title: "Deep-Dive AI Tutorials",
            desc: "Master LLMs and Generative AI with our step-by-step guides.",
            icon: <BookOpen className="w-6 h-6 text-blue-500" />,
            action: "Read Articles",
            href: "/articles",
            bg: "bg-blue-50 border-blue-100",
            text: "text-blue-700",
            image: "/assets/blog/cara-menjalankan-llm-di-laptop-kentang/cara-menjalankan-llm-di-laptop-kentang.webp"
        },
        {
            type: "future",
            title: "Tools & Courses (Coming Soon)",
            desc: "Interactive AI tools and comprehensive courses are on the way.",
            icon: <Rocket className="w-6 h-6 text-purple-500" />,
            action: "Stay Tuned",
            href: "#",
            bg: "bg-purple-50 border-purple-100",
            text: "text-purple-700",
            image: null
        }
    ];

    return (
        <section className="relative pt-10 pb-24 md:pt-16 md:pb-32 bg-white overflow-hidden">
            {/* Background Gradients - Subtle */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-3xl mix-blend-multiply filter animate-blob" />
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary-200/40 rounded-full blur-3xl mix-blend-multiply filter animate-blob animation-delay-2000" />
            </div>

            <Container>
                <div className="relative max-w-5xl mx-auto flex flex-col items-center z-10">

                    {/* Carousel Section (Top) */}
                    <div className="w-full mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
                        <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-2xl shadow-gray-200/50 bg-white" ref={emblaRef}>
                            <div className="flex">
                                {highlights.map((item, index) => (
                                    <div key={index} className="flex-[0_0_100%] min-w-0">
                                        <div className={`grid md:grid-cols-2 gap-8 p-8 md:p-10 ${item.bg} h-full items-center`}>

                                            {/* Text Content */}
                                            <div className="flex flex-col items-start gap-4">
                                                <div className="p-3 bg-white rounded-xl shadow-sm w-fit">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <h3 className={`text-2xl md:text-3xl font-bold ${item.text} mb-3`}>{item.title}</h3>
                                                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">{item.desc}</p>

                                                    {item.href !== '#' ? (
                                                        <Link href={item.href} className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-bold rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                                                            {item.action} <span aria-hidden="true">→</span>
                                                        </Link>
                                                    ) : (
                                                        <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 text-gray-500 font-bold rounded-xl cursor-not-allowed">
                                                            {item.action}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Image Content */}
                                            <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-white ring-4 ring-white/50">
                                                {item.image ? (
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        fill
                                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                                        sizes="(max-width: 768px) 100vw, 50vw"
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
                        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-bold text-gray-600 mb-6 shadow-sm">
                            <Sparkles className="w-3.5 h-3.5 fill-yellow-400 text-yellow-500" />
                            <span className="font-semibold">Your Hub for AI Excellence</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
                            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-sky-500">Deep-Dive</span> AI Articles
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
