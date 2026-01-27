import Container from "@/components/container";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | NalarDeep',
    description: 'Terms of Service for NalarDeep.',
};

export default function Terms() {
    return (
        <div className="bg-white min-h-screen pb-24">
            <Container>
                <div className="py-16 md:py-24 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Terms of Service</h1>
                    <div className="prose prose-lg text-gray-600">
                        <p>Last updated: {new Date().toLocaleDateString()}</p>
                        <p>
                            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the NalarDeep website (the "Service") operated by NalarDeep ("us", "we", or "our").
                        </p>
                        <h3>1. Conditions of Use</h3>
                        <p>
                            We will provide their services to you, which are subject to the conditions stated below in this document. Every time you visit this website, use its services or make a purchase, you accept the following conditions. This is why we urge you to read them carefully.
                        </p>
                        <h3>2. Privacy Policy</h3>
                        <p>
                            Before you continue using our website, we advise you to read our privacy policy regarding our user data collection. It will help you better understand our practices.
                        </p>
                        <h3>3. Intellectual Property</h3>
                        <p>
                            You agree that all materials, products, and services provided on this website are the property of NalarDeep, its affiliates, directors, officers, employees, agents, suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and other intellectual property. You also agree that you will not reproduce or redistribute the NalarDeep’s intellectual property in any way, including electronic, digital, or new trademark registrations.
                        </p>
                        <h3>4. Applicable Law</h3>
                        <p>
                            By visiting this website, you agree that the laws of Indonesia, without regard to principles of conflict laws, will govern these Terms of Service, or any dispute of any sort that might come between NalarDeep and you, or its business partners and associates.
                        </p>
                        <h3>5. Disputes</h3>
                        <p>
                            Any dispute related in any way to your visit to this website or to products you purchase from us shall be arbitrated by state or federal court Indonesia and you consent to exclusive jurisdiction and venue of such courts.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}
