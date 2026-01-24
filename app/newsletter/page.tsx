import Container from "@/components/container";
import Newsletter from "@/components/newsletter";
import { Check, Mail } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Newsletter | NalarDeep',
    description: 'Subscribe to our weekly newsletter for the latest in AI and tech.',
    openGraph: {
        title: 'Newsletter | NalarDeep',
        description: 'Stay smarter than the algorithm. Get weekly AI insights.',
    },
    alternates: {
        canonical: '/newsletter',
    },
};

export default function NewsletterPage() {
    const benefits = [
        "Weekly deep dives into AI trends",
        "Exclusive tutorials and code snippets",
        "Curated list of must-read articles",
        "Early access to new projects",
        "No spam, just value"
    ];

    const pastIssues = [
        { title: "The Rise of Agentic AI", date: "Jan 10, 2025" },
        { title: "Why everyone is moving to Rust", date: "Jan 03, 2025" },
        { title: "Is Generative AI hitting a wall?", date: "Dec 27, 2024" },
    ];

    return (
        <div className="bg-white min-h-screen pb-24">
            <Container>
                {/* Hero Section */}
                <div className="py-20 md:py-32 max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-8">
                        <Mail className="w-8 h-8" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
                        Stay ahead of the curve
                    </h1>
                    <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-12">
                        Join 5,000+ developers receiving our weekly dispatch on Artificial Intelligence, System Design, and Modern Web Development.
                    </p>
                </div>

                {/* Subscription Component Reused */}
                <div className="max-w-5xl mx-auto mb-24">
                    <Newsletter />
                </div>

                {/* Benefits & Past Issues Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
                    {/* Benefits */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Why subscribe?</h3>
                        <ul className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-3.5 h-3.5 font-bold" />
                                    </div>
                                    <span className="text-gray-600 font-medium">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Past Issues Mock */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Recent Issues</h3>
                        <div className="space-y-4">
                            {pastIssues.map((issue, index) => (
                                <div key={index} className="group flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all cursor-pointer">
                                    <span className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                                        {issue.title}
                                    </span>
                                    <span className="text-sm text-gray-400">{issue.date}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
