import Container from '@/components/container';
import TemplateGrid from '@/components/templates/TemplateGrid';
import { getAllTemplates } from '@/lib/templates';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Free Landing Page Templates | KodeMinggo',
    description: 'Download high-quality, professional landing page templates built with Next.js and Tailwind CSS for free.',
    openGraph: {
        title: 'Free Landing Page Templates | KodeMinggo',
        description: 'Download high-quality, professional landing page templates built with Next.js and Tailwind CSS for free.',
        type: 'website',
    },
};

export default function TemplatesPage() {
    const templates = getAllTemplates();

    return (
        <Container>
            <div className="py-16 md:py-24">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                        Free <span className="text-primary-500">Landing Page</span> Templates
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Boost your project with our curated collection of professional, responsive, and SEO-optimized website templates. All templates are open-source and ready to use.
                    </p>
                </div>

                {/* Categories/Filters (Optional future feature) */}
                <div className="flex flex-wrap gap-4 mb-12">
                    {['All', 'SaaS', 'Portfolio', 'Business', 'Personal'].map((cat) => (
                        <button key={cat} className={`px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-sm ${cat === 'All' ? 'bg-primary-500 text-white shadow-primary-500/20' : 'bg-white text-gray-600 border border-gray-100 hover:border-primary-200'}`}>
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <TemplateGrid templates={templates} />

                {/* Call to Action */}
                <div className="mt-24 p-12 bg-gray-900 rounded-3xl text-center text-white overflow-hidden relative">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Want a custom template?</h2>
                        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                            Need something specific for your brand? We offer custom landing page development services in Indonesia.
                        </p>
                        <a href="/contact" className="inline-block px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-xl transition-all shadow-xl shadow-primary-500/20">
                            Let's Talk
                        </a>
                    </div>
                    {/* Abstract background blobs */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary-500/20 blur-[100px] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-primary-500/10 blur-[100px] rounded-full"></div>
                </div>
            </div>
        </Container>
    );
}
