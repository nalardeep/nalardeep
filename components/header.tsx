import Link from 'next/link';
import Container from './container';

const Header = () => {
    return (
        <header className="py-6 border-b border-gray-100 mb-10">
            <Container>
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900 group">
                        minggo-commits<span className="text-primary-500 group-hover:text-primary-600 transition-colors">.</span>
                    </Link>
                    <nav>
                        <ul className="flex items-center gap-6 text-sm font-medium text-gray-600">
                            <li>
                                <Link href="/" className="hover:text-primary-500 transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:text-primary-500 transition-colors">About</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Container>
        </header>
    );
};

export default Header;
