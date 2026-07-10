import Link from 'next/link';
import { ChevronRight, House } from 'lucide-react';

type BreadcrumbItem = {
    name: string;
    url: string;
};

type BreadcrumbProps = {
    items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-slate-500 flex-wrap">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li key={item.url} className="flex items-center gap-1.5">
                            {index > 0 && (
                                <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                            )}
                            {isLast ? (
                                <span className="font-medium text-slate-900 truncate max-w-[200px] sm:max-w-xs" aria-current="page">
                                    {index === 0 ? (
                                        <span className="flex items-center gap-1.5">
                                            <House className="w-3.5 h-3.5" />
                                            {item.name}
                                        </span>
                                    ) : (
                                        item.name
                                    )}
                                </span>
                            ) : (
                                <Link
                                    href={item.url}
                                    className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors"
                                >
                                    {index === 0 ? (
                                        <span className="flex items-center gap-1.5">
                                            <House className="w-3.5 h-3.5" />
                                            {item.name}
                                        </span>
                                    ) : (
                                        item.name
                                    )}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
