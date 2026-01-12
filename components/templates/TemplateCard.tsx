import Link from 'next/link';
import Image from 'next/image';
import { Template } from '@/lib/templates';

export default function TemplateCard({ template }: { template: Template }) {
    return (
        <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden bg-gray-100">
                <Image
                    src={template.thumbnail}
                    alt={template.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                    {template.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-primary-600 rounded-full shadow-sm">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors">
                    {template.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-6 flex-grow">
                    {template.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                    <Link
                        href={`/templates/${template.slug}`}
                        className="text-sm font-semibold text-gray-900 hover:text-primary-500 transition-colors"
                    >
                        Learn More →
                    </Link>
                    <a
                        href={template.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-bold rounded-lg transition-colors shadow-lg shadow-primary-500/20"
                    >
                        Live Preview
                    </a>
                </div>
            </div>
        </div>
    );
}
