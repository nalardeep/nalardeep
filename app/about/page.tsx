import Container from "@/components/container";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | KodeMinggo',
    description: 'Learn about our mission to democratize tech education.',
};

export default function About() {
    return (
        <div className="bg-white min-h-screen pb-24">
            <Container>
                {/* Header */}
                <div className="py-16 md:py-24 max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
                        About KodeMinggo
                    </h1>
                    <p className="text-xl text-primary-600 leading-relaxed max-w-2xl">
                        We are dedicated to making complex technology accessible, understandable, and actionable for everyone.
                    </p>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-8 space-y-8 text-lg text-gray-600 leading-relaxed">
                        <p>
                            Founded in 2024, KodeMinggo started with a simple idea: that artificial intelligence shouldn't be a black box reserved for experts. We believe that with the right explanation, anyone can understand the mechanisms that are reshaping our world.
                        </p>
                        <p>
                            Our team of engineers, writers, and designers work together to break down the latest papers, frameworks, and tools into easy-to-digest articles and tutorials.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Our Mission</h2>
                        <ul className="space-y-4 list-disc pl-5 marker:text-primary-500">
                            <li><strong>Democratize Knowledge:</strong> Free, high-quality tech education for all.</li>
                            <li><strong>Practical Focus:</strong> Real-world examples over abstract theory.</li>
                            <li><strong>Community First:</strong> Learning is better when we do it together.</li>
                        </ul>
                    </div>

                    {/* Sidebar / Stats */}
                    <div className="md:col-span-4">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-6">Quick Stats</h3>
                            <div className="space-y-6">
                                <div>
                                    <div className="text-3xl font-bold text-primary-500">50+</div>
                                    <div className="text-sm text-gray-500 font-medium">Detailed Tutorials</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-primary-500">10k+</div>
                                    <div className="text-sm text-gray-500 font-medium">Monthly Readers</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-primary-500">100%</div>
                                    <div className="text-sm text-gray-500 font-medium">Open Source</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
