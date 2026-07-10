import Container from "@/components/container";
import Breadcrumb from "@/components/breadcrumb";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | NalarDeep',
    description: 'Privacy Policy for NalarDeep.',
};

export default function Privacy() {
    return (
        <div className="bg-white min-h-screen pb-24">
            <Container>
                <div className="pt-4">
                    <Breadcrumb
                        items={[
                            { name: 'Beranda', url: 'https://nalardeep.com' },
                            { name: 'Privacy Policy', url: 'https://nalardeep.com/privacy' },
                        ]}
                    />
                </div>
                <div className="pt-6 md:pt-8 pb-16 md:pb-24 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
                    <div className="prose prose-lg text-gray-600">
                        <p>Last updated: {new Date().toLocaleDateString()}</p>
                        <p>
                            Welcome to NalarDeep. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                        </p>
                        <h3>1. Information We Collect</h3>
                        <p>
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                        </p>
                        <ul>
                            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data</strong> includes email address and telephone number.</li>
                            <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                        </ul>
                        <h3>2. How We Use Your Personal Data</h3>
                        <p>
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul>
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal or regulatory obligation.</li>
                        </ul>
                        <h3>3. Data Security</h3>
                        <p>
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                        </p>
                        <h3>4. Contact Us</h3>
                        <p>
                            If you have requirements regarding your personal data, please contact us at: hello@nalardeep.com
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}
