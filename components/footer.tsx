import Container from './container';

const Footer = () => {
    return (
        <footer className="py-10 border-t border-gray-100 mt-20">
            <Container>
                <div className="flex flex-col items-center justify-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
                    <p className="mt-2">
                        Built with Next.js and Tailwind CSS.
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
