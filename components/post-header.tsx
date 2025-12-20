import { format, parseISO } from 'date-fns';
import ShareButtons from './share-buttons';

type Props = {
    title: string;
    date: string;
    coverImage?: string;
    readingTime: string;
    slug: string;
};

const PostHeader = ({ title, date, coverImage, readingTime, slug }: Props) => {
    return (
        <>
            <div className="max-w-4xl mx-auto text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-gray-900 mb-6">
                    {title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 mb-8 text-sm md:text-base text-gray-500 font-medium">
                    <time dateTime={date} className="text-gray-900">{format(parseISO(date), 'MMMM d, yyyy')}</time>
                    <span className="text-gray-300">•</span>
                    <span>{readingTime}</span>
                    <span className="hidden md:inline text-gray-300">|</span>
                    <div className="flex items-center">
                        <ShareButtons title={title} slug={slug} />
                    </div>
                </div>
            </div>

            {coverImage && (
                <div className="max-w-5xl mx-auto mb-12 sm:-mx-5 md:mx-auto">
                    <div className="relative aspect-[2/1] w-full overflow-hidden sm:rounded-2xl shadow-sm bg-gray-100">
                        <img
                            src={coverImage}
                            alt={`Cover Image for ${title}`}
                            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
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
