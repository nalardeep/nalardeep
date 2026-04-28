import Container from "@/components/container";
import PostPreview from "@/components/post-preview";
import { getAllPosts } from "@/lib/api";

import Hero from "@/components/hero";
import LogoStrip from "@/components/logo-strip";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const allPosts = getAllPosts();

  return (
    <>
      <Hero />
      <LogoStrip />

      <div className="py-24 bg-white">
        <Container>
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Artikel Terbaru</h2>
              <p className="text-lg text-gray-500">List Artikel Terbaru.</p>
            </div>
            <Link href="/articles" className="hidden md:flex items-center gap-2 text-primary-500 font-bold hover:text-primary-600 transition-colors">
              Lihat semua <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {allPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {allPosts.map((post) => (
                <PostPreview key={post.slug} post={post} />
              ))}
            </div>
          )}
          <div className="mt-12 md:hidden flex justify-center">
            <Link href="/" className="flex items-center gap-2 text-primary-500 font-bold hover:text-primary-600 transition-colors">
              Lihat semua <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </div>

    </>
  );
}
