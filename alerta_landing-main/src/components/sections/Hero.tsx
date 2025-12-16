import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Shield, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 py-20">
            <div className="container mx-auto px-4 flex flex-col items-center gap-12 text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative order-1"
                >
                    <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full transform translate-y-10" />
                    <motion.img
                        src="/a.png"
                        alt="ALERTA Device"
                        className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl rounded-3xl"
                        animate={{ y: [0, -20, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 4,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-6 order-2"
                >
                    <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mx-auto">
                        <Shield size={16} />
                        <span>Advanced Personal Security</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
                        Safety in Your <span className="text-secondary">Pocket</span>
                    </h1>

                    <p className="text-xl text-slate-600 max-w-lg mx-auto">
                        ALERTA is the smart keychain that keeps you connected to help when you need it most. Instant, fast, simple alerts to your personal contacts, and peace of mind.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact">
                            <Button size="lg" className="gap-2">
                                Pre-order now <ArrowRight size={20} />
                            </Button>
                        </a>
                        <a href="#features">
                            <Button variant="outline" size="lg">
                                Learn More
                            </Button>
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
