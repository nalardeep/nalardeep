import { format, parseISO } from 'date-fns';

type Props = {
    title: string;
    date: string;
    coverImage?: string;
    readingTime: string;
};

const PostHeader = ({ title, date, coverImage, readingTime }: Props) => {
    return (
        <>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
                {title}
            </h1>
            <div className="hidden md:flex items-center justify-center gap-4 mb-12 text-gray-500 font-medium">
                <time dateTime={date}>{format(parseISO(date), 'LLLL d, yyyy')}</time>
                <span>•</span>
                <span>{readingTime}</span>
            </div>

            {coverImage && (
                <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
                    <img
                        src={coverImage}
                        alt={`Cover Image for ${title}`}
                        className="w-full max-h-[600px] object-cover sm:rounded-2xl shadow-lg"
                    />
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
