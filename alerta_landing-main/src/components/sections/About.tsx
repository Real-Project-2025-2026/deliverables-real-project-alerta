import React from 'react';
import { motion } from 'framer-motion';


export const About: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2"
                    >
                        <div className="relative inline-block">
                            <img
                                src="/c.jpeg"
                                alt="Our Mission"
                                className="rounded-2xl shadow-2xl w-full max-w-sm mx-auto"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2 space-y-6"
                    >
                        <h2 className="text-4xl font-bold text-primary">Our Mission: <span className="text-secondary">Safety for All</span></h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            At ALERTA, we believe that personal safety is a fundamental right. We founded our company with a simple goal: to create accessible, reliable, and effective security solutions for everyone.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Our team of engineers and security experts work tirelessly to integrate the latest technology into simple, everyday objects. The ALERTA keychain is just the beginning of our journey to make the world a safer place.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
