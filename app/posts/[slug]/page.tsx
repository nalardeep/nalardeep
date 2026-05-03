import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/api";
import Container from "@/components/container";
import PostBody from "@/components/post-body";
import PostHeader from "@/components/post-header";
import TableOfContents from "@/components/table-of-contents";
import RelatedPosts from "@/components/related-posts";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    const relatedPosts = getRelatedPosts(slug);

    if (!post) {
        return notFound();
    }

    return (
        <Container>
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
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify([
                                {
                                    '@context': 'https://schema.org',
                                    '@type': 'BlogPosting',
                                    headline: post.title,
                                    datePublished: post.date,
                                    dateModified: post.date,
                                    description: post.excerpt,
                                    image: post.coverImage ? [post.coverImage] : [],
                                    url: `https://nalardeep.com/posts/${post.slug}`,
                                    mainEntityOfPage: {
                                        '@type': 'WebPage',
                                        '@id': `https://nalardeep.com/posts/${post.slug}`,
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
                                            url: 'https://nalardeep.com/logo.png',
                                        },
                                    },
                                },
                                {
                                    '@context': 'https://schema.org',
                                    '@type': 'BreadcrumbList',
                                    itemListElement: [
                                        {
                                            '@type': 'ListItem',
                                            position: 1,
                                            name: 'Beranda',
                                            item: 'https://nalardeep.com',
                                        },
                                        {
                                            '@type': 'ListItem',
                                            position: 2,
                                            name: 'Artikel',
                                            item: 'https://nalardeep.com/articles',
                                        },
                                        {
                                            '@type': 'ListItem',
                                            position: 3,
                                            name: post.title,
                                            item: `https://nalardeep.com/posts/${post.slug}`,
                                        },
                                    ],
                                },
                            ]),
                        }}
                    />
                </div>

            </article>
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
            url: `https://nalardeep.com/posts/${slug}`,
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
