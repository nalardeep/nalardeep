import Container from "@/components/container";
import Breadcrumb from "@/components/breadcrumb";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cookies Policy | NalarDeep',
    description: 'Cookies Policy for NalarDeep.',
};

export default function Cookies() {
    return (
        <div className="bg-white min-h-screen pb-24">
            <Container>
                <div className="pt-4">
                    <Breadcrumb
                        items={[
                            { name: 'Beranda', url: 'https://nalardeep.com' },
                            { name: 'Cookies Policy', url: 'https://nalardeep.com/cookies' },
                        ]}
                    />
                </div>
                <div className="pt-6 md:pt-8 pb-16 md:pb-24 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Cookies Policy</h1>
                    <div className="prose prose-lg text-gray-600">
                        <p>Last updated: {new Date().toLocaleDateString()}</p>
                        <p>
                            This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used.
                        </p>
                        <h3>1. What are Cookies?</h3>
                        <p>
                            Cookies are small text files that are sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.
                        </p>
                        <h3>2. How NalarDeep uses Cookies</h3>
                        <p>
                            When you use and access the Service, we may place a number of cookies files in your web browser. We use cookies for the following purposes:
                        </p>
                        <ul>
                            <li>To enable certain functions of the Service.</li>
                            <li>To provide analytics.</li>
                            <li>To store your preferences.</li>
                        </ul>
                        <h3>3. Your Choices Regarding Cookies</h3>
                        <p>
                            If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}
