import React from 'react';
import { motion } from 'framer-motion';
import { Battery, MessageSquare, MapPin, Zap } from 'lucide-react';

export const ProductShowcase: React.FC = () => {
    return (
        <section id="product" className="py-24 bg-primary text-black overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Designed for <span className="text-secondary">Protection</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Beautiful, sleek, durable, and always ready. The ALERTA keychain blends seamlessly into your life while providing powerful security features.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center max-w-6xl mx-auto">

                    {/* Left Column Features */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col items-center lg:items-end text-center lg:text-right"
                        >
                            <div className="p-4 rounded-2xl bg-slate-800/50 backdrop-blur-sm mb-4 border border-slate-700 hover:border-secondary/50 transition-colors duration-300">
                                <Zap className="text-secondary w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Green LED Status</h3>
                            <p className="text-slate-400">Instantly know your device is active and ready to protect.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col items-center lg:items-end text-center lg:text-right"
                        >
                            <div className="p-4 rounded-2xl bg-slate-800/50 backdrop-blur-sm mb-4 border border-slate-700 hover:border-secondary/50 transition-colors duration-300">
                                <Battery className="text-secondary w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Battery Check</h3>
                            <p className="text-slate-400">Easy-to-read indicator ensures you're never caught off guard.</p>
                        </motion.div>
                    </div>

                    {/* Center Image */}
                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/10 blur-[100px] rounded-full -z-10" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <motion.img
                                src="/b.png"
                                alt="Product View"
                                className="w-full max-w-xs mx-auto drop-shadow-2xl rounded-3xl relative z-10"
                            />
                        </motion.div>
                    </div>

                    {/* Right Column Features */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col items-center lg:items-start text-center lg:text-left"
                        >
                            <div className="p-4 rounded-2xl bg-slate-800/50 backdrop-blur-sm mb-4 border border-slate-700 hover:border-secondary/50 transition-colors duration-300">
                                <MessageSquare className="text-secondary w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Instant SMS Alert</h3>
                            <p className="text-slate-400">Send emergency alerts to your contacts holding a 5 seconds button.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col items-center lg:items-start text-center lg:text-left"
                        >
                            <div className="p-4 rounded-2xl bg-slate-800/50 backdrop-blur-sm mb-4 border border-slate-700 hover:border-secondary/50 transition-colors duration-300">
                                <MapPin className="text-secondary w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">GPS Tracking</h3>
                            <p className="text-slate-400">NO tracking your location, only sharing when you press the button.</p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
