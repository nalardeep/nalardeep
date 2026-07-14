import { format, parseISO } from 'date-fns';
import ShareButtons from './share-buttons';
import Breadcrumb from './breadcrumb';
import { Author } from '@/types';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
    title: string;
    date: string;
    coverImage?: string;
    readingTime: string;
    slug: string;
    author?: Author;
    tags?: string[];
};

const PostHeader = ({ title, date, coverImage, readingTime, slug, author, tags }: Props) => {
    return (
        <>
            <div className="max-w-4xl mx-auto text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-gray-900 mb-4">
                    {title}
                </h1>

                <Breadcrumb
                    items={[
                        { name: 'Beranda', url: 'https://nalardeep.com' },
                        { name: 'Artikel', url: 'https://nalardeep.com/articles' },
                        { name: title, url: `https://nalardeep.com/posts/${slug}` },
                    ]}
                />

                <div className="flex flex-wrap items-center gap-4 mt-6 mb-6 text-sm md:text-base text-gray-500 font-medium justify-center md:justify-start">
                    {author && (
                        <div className="flex items-center gap-2 mr-2">
                            <img
                                src={author.picture}
                                alt={author.name}
                                className="w-10 h-10 rounded-full object-cover border border-gray-100"
                            />
                            <span className="text-gray-900 font-bold">{author.name}</span>
                        </div>
                    )}

                    <time dateTime={date} className="text-gray-500">{format(parseISO(date), 'MMMM d, yyyy')}</time>
                    <span className="text-gray-300">•</span>
                    <span>{readingTime}</span>
                </div>

                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 mb-8 justify-center md:justify-start">
                        {tags.map((tag) => (
                            <Link
                                key={tag}
                                href={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                                className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-semibold text-xs px-3.5 py-1.5 rounded-lg border border-emerald-100/50 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                            >
                                #{tag}
                            </Link>
                        ))}
                    </div>
                )}

                <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
                    <ShareButtons title={title} slug={slug} />
                </div>
            </div>

            {coverImage && (
                <div className="max-w-3xl mx-auto mb-12 sm:-mx-5 md:mx-auto">
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-50 border border-slate-100 rounded-2xl shadow-sm mt-8">
                        <Image
                            src={coverImage}
                            alt={`Cover Image for ${title}`}
                            fill
                            className="absolute inset-0 w-full h-full object-cover hover:scale-[1.01] transition-transform duration-700"
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            priority
                        />
                    </div>
                </div>
            )}

            <div className="max-w-2xl mx-auto">
                <div className="block md:hidden mb-6 text-gray-500">
                    <time dateTime={date}>{format(parseISO(date), 'LLLL d, yyyy')}</time>
                </div>
            </div>
        </>
    );
};

export default PostHeader;
