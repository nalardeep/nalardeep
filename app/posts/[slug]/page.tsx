import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/api";
import Container from "@/components/container";
import PostBody from "@/components/post-body";
import PostHeader from "@/components/post-header";
import TableOfContents from "@/components/table-of-contents";
import RelatedPosts from "@/components/related-posts";
import BreadcrumbSchema from "@/components/breadcrumb-schema";
import Breadcrumb from "@/components/breadcrumb";
import BackToTop from "@/components/back-to-top";
import ReadingProgress from "@/components/reading-progress";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const BASE_URL = "https://nalardeep.com";

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    const relatedPosts = getRelatedPosts(slug);

    if (!post) {
        return notFound();
    }

    const blogPostingSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        datePublished: post.date,
        dateModified: post.date,
        description: post.excerpt,
        image: post.coverImage ? [post.coverImage] : [],
        url: `${BASE_URL}/posts/${post.slug}`,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${BASE_URL}/posts/${post.slug}`,
        },
        author: {
            '@type': 'Person',
            name: post.author.name,
            image: post.author.picture,
        },
        publisher: {
            '@type': 'Organization',
            name: 'NalarDeep',
            logo: {
                '@type': 'ImageObject',
                url: `${BASE_URL}/logo.png`,
            },
        },
    };

    return (
        <Container>
            <ReadingProgress />
            {/* BlogPosting Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
            />

            {/* Breadcrumb Structured Data: Home > Artikel > [Judul] */}
            <BreadcrumbSchema
                items={[
                    { name: 'Beranda', url: BASE_URL },
                    { name: 'Artikel', url: `${BASE_URL}/articles` },
                    { name: post.title, url: `${BASE_URL}/posts/${post.slug}` },
                ]}
            />

            <article className="mb-32">
                <PostHeader
                    title={post.title}
                    date={post.date}
                    coverImage={post.coverImage}
                    readingTime={post.readingTime}
                    slug={post.slug}
                    author={post.author}
                    tags={post.tags}
                />

                <div className="flex flex-col xl:flex-row gap-12">
                    <div className="flex-1 min-w-0">
                        <PostBody content={post.content} />
                        <RelatedPosts posts={relatedPosts} />
                    </div>

                    {/* Sidebar with Table of Contents */}
                    <aside className="hidden xl:block w-[250px] shrink-0">
                        <TableOfContents />
                    </aside>
                </div>
            </article>
            <BackToTop />
        </Container>
    );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return notFound();
    }

    const title = `${post.title} | NalarDeep`;
    const description = post.excerpt;
    const ogImage = post.coverImage;
    const images = ogImage ? [ogImage] : [];

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime: post.date,
            url: `${BASE_URL}/posts/${slug}`,
            images: images,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: images,
        },
        alternates: {
            canonical: `/posts/${slug}`,
        },
    };
}

export async function generateStaticParams() {
    const posts = getAllPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}
