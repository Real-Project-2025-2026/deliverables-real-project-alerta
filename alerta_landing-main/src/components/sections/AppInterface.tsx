

const AppInterface = () => {
    return (
        <section className="py-24 bg-black text-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Left Column: Image */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                            <img
                                src="/4.png"
                                alt="App Configuration Interface"
                                className="relative w-full max-w-md rounded-2xl shadow-2xl border border-white/10"
                            />
                        </div>
                    </div>

                    {/* Right Column: Insights */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl font-bold text-primary mb-4">Configuration Insights</h2>

                        <div className="space-y-6 text-gray-400 text-lg">
                            <p>
                                This is our mobile app for configuring with the device. To use it, you need to connect via eSIM to the device and set up your contact numbers. All relevant information is displayed in a simple and user-friendly way.
                            </p>
                            <p>
                                You can count on support or assistance if you have any questions or would like to learn more information. Below, we present the main features of the app.
                            </p>
                            <ul className="list-disc list-inside space-y-2 pt-4 text-gray-300">
                                <li>Set up up to three trusted numbers to receive your alert.</li>
                                <li>View basic settings, your simple profile, device ID, and technical options.</li>
                                <li>Get the premium version for 24/7 personal support service.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </section>
    );
};

export default AppInterface;
