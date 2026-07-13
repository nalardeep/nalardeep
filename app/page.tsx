import Container from "@/components/container";
import PostPreview from "@/components/post-preview";
import { getAllPosts } from "@/lib/api";

import Hero from "@/components/hero";
import LogoStrip from "@/components/logo-strip";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
      <Hero />
      <LogoStrip />

      <div className="py-24 bg-white relative">
        {/* Memphis background element */}
        <div className="absolute inset-0 z-0 bg-dots opacity-[0.05] pointer-events-none"></div>
        <Container>
          <div className="relative z-10 flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Artikel Terbaru</h2>
              <p className="text-base text-slate-500">Kumpulan konten edukasi dan dokumentasi eksperimen AI.</p>
            </div>
            <Link href="/articles" className="hidden md:flex items-center gap-2 bg-white border border-slate-100 text-slate-800 px-5 py-2.5 rounded-lg shadow-glow-sm hover:shadow-glow-md hover:border-emerald-200 hover:-translate-y-0.5 transition-all text-sm font-semibold">
              Lihat semua <ArrowRight className="w-4 h-4 text-emerald-500" />
            </Link>
          </div>

          {allPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {allPosts.map((post) => (
                <PostPreview key={post.slug} post={post} />
              ))}
            </div>
          )}
          <div className="mt-12 md:hidden flex justify-center relative z-10">
            <Link href="/articles" className="flex items-center gap-2 bg-white border border-slate-100 text-slate-800 px-5 py-3 rounded-lg shadow-glow-sm hover:shadow-glow-md hover:border-emerald-200 transition-all text-sm font-semibold">
              Lihat semua <ArrowRight className="w-4 h-4 text-emerald-500" />
            </Link>
          </div>
        </Container>
      </div>

    </>
  );
}
