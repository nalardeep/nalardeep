import { format, parseISO } from 'date-fns';

type Props = {
    title: string;
    date: string;
};

const PostHeader = ({ title, date }: Props) => {
    return (
        <>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
                {title}
            </h1>
            <div className="hidden md:block md:mb-12 text-gray-500">
                <time dateTime={date}>{format(parseISO(date), 'LLLL d, yyyy')}</time>
            </div>
            <div className="max-w-2xl mx-auto">
                <div className="block md:hidden mb-6 text-gray-500">
                    <time dateTime={date}>{format(parseISO(date), 'LLLL d, yyyy')}</time>
                </div>
            </div>
        </>
    );
};

export default PostHeader;
