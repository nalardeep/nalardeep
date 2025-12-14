const Newsletter = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-5">
                <div className="bg-gray-50 rounded-3xl p-8 md:p-16 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12 border border-gray-100">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Stay smarter than the algorithm
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Get weekly updates on the latest in AI research, tools, and ethical debates directly to your inbox.
                        </p>
                    </div>
                    <div className="w-full max-w-md">
                        <form className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                            />
                            <button
                                type="button"
                                className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-lg transition-colors shadow-lg shadow-primary-500/20"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="mt-3 text-xs text-gray-400 text-center sm:text-left">
                            No spam. Unsubscribe anytime.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
