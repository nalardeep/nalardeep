import Container from "@/components/container";
import BreadcrumbSchema from "@/components/breadcrumb-schema";
import Breadcrumb from "@/components/breadcrumb";
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Github, GraduationCap } from 'lucide-react';
import { getAllAuthors } from '@/data/authors';

const BASE_URL = "https://nalardeep.com";

export const metadata: Metadata = {
    title: 'Penulis',
    description: 'Kenali para penulis NalarDeep yang aktif mengeksplorasi dan mendokumentasikan tutorial AI, MCP, otomatisasi n8n, chatbot, RAG, dan LLM berdasarkan eksperimen dan evaluasi.',
    alternates: {
        canonical: '/authors',
    },
};

export default function Authors() {
    const authors = getAllAuthors();

    return (
        <div className="bg-white min-h-screen pb-24 relative">
            <div className="absolute inset-0 z-0 bg-dots opacity-[0.05] pointer-events-none"></div>
            <div className="relative z-10">
                {/* Breadcrumb Structured Data: Home > Authors */}
                <BreadcrumbSchema
                    items={[
                        { name: 'Beranda', url: BASE_URL },
                        { name: 'Penulis', url: `${BASE_URL}/authors` },
                    ]}
                />
                <Container>
                    <div className="pt-4">
                        <Breadcrumb
                            items={[
                                { name: 'Beranda', url: BASE_URL },
                                { name: 'Penulis', url: `${BASE_URL}/authors` },
                            ]}
                        />
                    </div>

                    {/* Header */}
                    <div className="pt-6 md:pt-8 pb-16 md:pb-24 max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
                            Penulis
                        </h1>
                        <p className="text-xl text-black leading-relaxed max-w-2xl">
                            Kenali para penulis di balik artikel-artikel NalarDeep. Setiap konten yang kami sajikan telah melalui proses eksperimen, pengujian, dan evaluasi untuk memastikan kualitas dan relevansi.
                        </p>
                    </div>

                    {/* Authors Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                        <div className="md:col-span-8 space-y-12">
                            {authors.map((author) => (
                                <div
                                    key={author.name}
                                    className="group bg-white p-8 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300"
                                >
                                    <div className="flex flex-col sm:flex-row items-start gap-6">
                                        {/* Avatar */}
                                        <div className="shrink-0">
                                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-emerald-50 shadow-sm group-hover:border-emerald-200 transition-colors duration-300">
                                                <Image
                                                    src={author.picture}
                                                    alt={author.fullName}
                                                    fill
                                                    className="object-cover"
                                                    unoptimized
                                                />
                                            </div>
                                        </div>

                                        {/* Info */}
                                        <div className="flex-1 min-w-0">
                                            <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-3">
                                                {author.fullName}
                                            </h2>
                                            <p className="text-gray-600 leading-relaxed mb-5">
                                                {author.bio}
                                            </p>

                                            {/* Social Links */}
                                            <div className="flex items-center gap-4">
                                                {author.github && author.github !== '#' && (
                                                    <Link
                                                        href={author.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-emerald-600 transition-colors"
                                                    >
                                                        <Github className="w-4 h-4" />
                                                        <span>GitHub</span>
                                                    </Link>
                                                )}
                                                {author.googleScholar && author.googleScholar !== '#' && (
                                                    <Link
                                                        href={author.googleScholar}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-emerald-600 transition-colors"
                                                    >
                                                        <GraduationCap className="w-4 h-4" />
                                                        <span>Google Scholar</span>
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Sidebar */}
                        <div className="md:col-span-4">
                            <div className="bg-white p-8 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300 sticky top-28">
                                <h3 className="font-bold text-slate-900 mb-6 tracking-tight">Tentang Penulis</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                    Para penulis NalarDeep adalah praktisi dan enthusiast AI yang aktif melakukan eksperimen, riset, dan evaluasi terhadap teknologi AI terkini untuk menyajikan tutorial yang akurat dan relevan.
                                </p>
                                <div className="space-y-4">
                                    <div className="border-l-3 border-emerald-500 pl-4">
                                        <div className="text-lg font-extrabold text-emerald-600">{authors.length}</div>
                                        <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-0.5">Penulis Aktif</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
