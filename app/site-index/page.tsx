import Container from "@/components/container";
import BreadcrumbSchema from "@/components/breadcrumb-schema";
import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import { Metadata } from "next";

const BASE_URL = "https://nalardeep.com";

export const metadata: Metadata = {
    title: "Site Index | KodeMinggo",
    description: "Overview of all pages and articles on KodeMinggo.",
};

export default function SiteIndexPage() {
    const allPosts = getAllPosts();

    // Group posts by year
    const postsByYear = allPosts.reduce((acc, post) => {
        const year = new Date(post.date).getFullYear();
        if (!acc[year]) {
            acc[year] = [];
        }
        acc[year].push(post);
        return acc;
    }, {} as Record<number, typeof allPosts>);

    const years = Object.keys(postsByYear).sort((a, b) => Number(b) - Number(a));

    const mainPages = [
        { name: "Home", path: "/" },
        { name: "Articles", path: "/articles" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Newsletter", path: "/newsletter" },
    ];

    return (
        <div className="bg-white min-h-screen py-16 md:py-24">
            {/* Breadcrumb Structured Data: Home > Site Index */}
            <BreadcrumbSchema
                items={[
                    { name: 'Beranda', url: BASE_URL },
                    { name: 'Site Index', url: `${BASE_URL}/site-index` },
                ]}
            />
            <Container>
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">Site Index</h1>

                    {/* Main Pages Section */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">
                            Pages
                        </h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {mainPages.map((page) => (
                                <li key={page.path}>
                                    <Link
                                        href={page.path}
                                        className="text-lg text-gray-600 hover:text-primary-600 hover:underline transition-colors"
                                    >
                                        {page.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Articles Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">
                            Articles
                        </h2>
                        <div className="space-y-8">
                            {years.map((year) => (
                                <div key={year}>
                                    <h3 className="text-xl font-semibold text-gray-400 mb-4">{year}</h3>
                                    <ul className="space-y-3">
                                        {postsByYear[Number(year)].map((post) => (
                                            <li key={post.slug}>
                                                <Link
                                                    href={`/posts/${post.slug}`}
                                                    className="group flex flex-col sm:flex-row sm:items-baseline gap-1"
                                                >
                                                    <span className="text-lg text-gray-700 font-medium group-hover:text-primary-600 group-hover:underline transition-colors">
                                                        {post.title}
                                                    </span>
                                                    <span className="text-sm text-gray-400 hidden sm:inline-block">
                                                        — {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric" })}
                                                    </span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
