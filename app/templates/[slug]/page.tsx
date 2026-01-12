import Container from '@/components/container';
import { getTemplateBySlug, getAllTemplates } from '@/lib/templates';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ChevronLeft, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const template = getTemplateBySlug(slug);

    if (!template) return {};

    return {
        title: `${template.title} - Free Landing Page Template | KodeMinggo`,
        description: template.description,
        openGraph: {
            title: template.title,
            description: template.description,
            images: [template.thumbnail],
        },
    };
}

export async function generateStaticParams() {
    const templates = getAllTemplates();
    return templates.map((t) => ({ slug: t.slug }));
}

export default async function TemplateDetail({ params }: Props) {
    const { slug } = await params;
    const template = getTemplateBySlug(slug);

    if (!template) {
        return notFound();
    }

    return (
        <Container>
            <div className="py-12 md:py-16">
                {/* Back Button */}
                <Link
                    href="/templates"
                    className="inline-flex items-center text-sm font-semibold text-gray-500 hover:text-primary-500 mb-8 transition-colors group"
                >
                    <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                    Back to templates
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Image/Showcase */}
                    <div className="space-y-6">
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 shadow-2xl">
                            <Image
                                src={template.thumbnail}
                                alt={template.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: Info */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 bg-primary-50 text-primary-600 text-xs font-bold rounded-full uppercase tracking-wider font-mono">
                                    {template.category}
                                </span>
                                <span className="text-gray-400 text-sm italic">Free Download</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                                {template.title}
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {template.longDescription}
                            </p>
                        </div>

                        {/* Features List */}
                        <div>
                            <h2 className="text-lg font-bold text-gray-900 mb-4">Core Features</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {template.features.map((feature) => (
                                    <div key={feature} className="flex items-center gap-2 text-gray-600">
                                        <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a
                                href={template.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-xl transition-all shadow-xl shadow-primary-500/20"
                            >
                                Live Preview
                                <ExternalLink className="w-5 h-5" />
                            </a>
                            {template.githubUrl && (
                                <a
                                    href={template.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold rounded-xl transition-all"
                                >
                                    Source Code
                                    <Github className="w-5 h-5" />
                                </a>
                            )}
                        </div>

                        {/* SEO/Details Info Box */}
                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 italic text-sm text-gray-500 leading-relaxed">
                            Note: This template is licensed under MIT. Feel free to use it for personal or commercial projects. Attribution is appreciated but not required.
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
