import Link from 'next/link';
import Container from '@/components/container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Halaman Tidak Ditemukan',
    description: 'Maaf, halaman yang Anda cari tidak ditemukan atau telah dipindahkan.',
    robots: {
        index: false,
        follow: true,
    },
};

export default function NotFound() {
    return (
        <Container>
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center py-20">
                <h1 className="text-9xl font-bold text-gray-200 mb-8">404</h1>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Halaman tidak ditemukan</h2>
                <p className="text-gray-500 max-w-md mx-auto mb-8 text-lg">
                    Maaf, kami tidak dapat menemukan halaman yang Anda cari. Mungkin telah dipindahkan atau tidak ada.
                </p>
                <Link
                    href="/"
                    className="bg-primary-500 hover:bg-primary-600 text-white font-medium px-8 py-3 rounded-full transition-colors inline-flex items-center gap-2"
                >
                    Kembali ke Beranda
                </Link>
            </div>
        </Container>
    );
}
