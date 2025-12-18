import Link from 'next/link';
import Container from '@/components/container';

export default function NotFound() {
    return (
        <Container>
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center py-20">
                <h1 className="text-9xl font-bold text-gray-200 mb-8">404</h1>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Page not found</h2>
                <p className="text-gray-500 max-w-md mx-auto mb-8 text-lg">
                    Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
                </p>
                <Link
                    href="/"
                    className="bg-primary-500 hover:bg-primary-600 text-white font-medium px-8 py-3 rounded-full transition-colors inline-flex items-center gap-2"
                >
                    Back to Home
                </Link>
            </div>
        </Container>
    );
}
