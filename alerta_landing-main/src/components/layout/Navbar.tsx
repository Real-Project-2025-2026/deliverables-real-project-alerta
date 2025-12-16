import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src="/log.png" alt="ALERTA Logo" className="h-10 w-auto" />
                    <span className="text-2xl font-jenson font-bold text-primary">Alerta</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#features" className="text-primary hover:text-secondary transition-colors">Features</a>
                    <a href="#product" className="text-primary hover:text-secondary transition-colors">Product</a>
                    <a href="#about" className="text-primary hover:text-secondary transition-colors">About</a>
                    <a href="#contact" className="text-primary hover:text-secondary transition-colors">Contact</a>
                    <Button variant="primary" size="sm">Get Protected</Button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            <a href="#features" className="text-primary hover:text-secondary" onClick={() => setIsOpen(false)}>Features</a>
                            <a href="#product" className="text-primary hover:text-secondary" onClick={() => setIsOpen(false)}>Product</a>
                            <a href="#about" className="text-primary hover:text-secondary" onClick={() => setIsOpen(false)}>About</a>
                            <Button variant="primary" className="w-full">Get Protected</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
