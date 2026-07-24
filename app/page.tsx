import Container from "@/components/container";
import PostPreview from "@/components/post-preview";
import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import { ArrowRight, Sparkles, BookOpen } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  description: "Eksplorasi tutorial AI terlengkap, mulai dari implementasi MCP, otomatisasi n8n, hingga pengembangan chatbot cerdas dan RAG untuk mengakselerasi proyek Anda.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "NalarDeep - Portal Ekosistem AI",
    description: "Eksplorasi tutorial AI terlengkap, mulai dari implementasi MCP, otomatisasi n8n, hingga pengembangan chatbot cerdas dan RAG untuk mengakselerasi proyek Anda.",
  },
};

export default function Home() {
  const allPosts = getAllPosts();

  return (
    <>
      {/* Hero Section - Clean & Minimal */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0 bg-dots opacity-[0.03] pointer-events-none"></div>
        
        <Container>
          <div className="relative max-w-4xl mx-auto text-center z-10">
            {/* <div className="inline-flex items-center gap-2 bg-emerald-50/80 border border-emerald-100/50 px-4 py-1.5 rounded-full text-xs font-semibold text-emerald-600 mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 fill-emerald-100 text-emerald-500" />
              <span>Portal Ekosistem AI</span>
            </div> */}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
              Nalar <span className="text-emerald-600">Deep</span>
            </h1>
            
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10">
              Artikel terbaru tentang AI dan programming. Mulai dari python, implementasi MCP, otomatisasi n8n, pengembangan chatbot, RAG, LLM dan banyak lagi.
            </p>
            
            <div className="flex items-center justify-center gap-4">
              <Link href="/articles" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all text-sm font-semibold">
                <BookOpen className="w-4 h-4" />
                Mulai Membaca
              </Link>
              <Link href="/about" className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-xl shadow-sm hover:shadow-md hover:border-emerald-200 transition-all text-sm font-semibold">
                Tentang Kami
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Articles Section */}
      <div className="py-16 md:py-24 bg-slate-50/50 relative">
        <div className="absolute inset-0 z-0 bg-dots opacity-[0.03] pointer-events-none"></div>
        <Container>
          <div className="relative z-10">
            {/* Section Header */}
            <div className="flex items-end justify-between mb-12">
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full text-xs font-semibold text-emerald-600 mb-4">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  Terbaru
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Artikel Terbaru</h2>
              </div>
              <Link href="/articles" className="hidden md:flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md hover:border-emerald-200 hover:-translate-y-0.5 transition-all text-sm font-semibold">
                Lihat semua <ArrowRight className="w-4 h-4 text-emerald-500" />
              </Link>
            </div>

            {/* Article Grid */}
            {allPosts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {allPosts.map((post, index) => (
                  <div key={post.slug} className={index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}>
                    <PostPreview post={post} />
                  </div>
                ))}
              </div>
            )}
            
            {/* Mobile CTA */}
            <div className="mt-12 md:hidden flex justify-center relative z-10">
              <Link href="/articles" className="flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-xl shadow-sm hover:bg-emerald-600 transition-all text-sm font-semibold">
                Lihat semua artikel <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
