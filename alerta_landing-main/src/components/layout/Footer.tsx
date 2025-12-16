import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-black py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <img src="/log.png" alt="ALERTA Logo" className="h-10 w-auto" />
                            <span className="text-2xl font-jenson font-bold text-white">Alerta</span>
                        </div>
                        <p className="text-slate-400">
                            Your safety, our priority. Advanced protection technology in your pocket.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4 text-white">Product</h3>
                        <ul className="space-y-2 text-slate-400">
                            <li><a href="#" className="hover:text-secondary">Features</a></li>
                            <li><a href="#" className="hover:text-secondary">Technology</a></li>
                            <li><a href="#" className="hover:text-secondary">Pricing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4 text-white">Company</h3>
                        <ul className="space-y-2 text-slate-400">
                            <li><a href="#" className="hover:text-secondary">About Us</a></li>
                            <li><a href="#" className="hover:text-secondary">Contact</a></li>
                            <li><a href="#" className="hover:text-secondary">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4 text-white">Connect</h3>
                        <div className="flex gap-4">
                            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-secondary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-secondary transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-secondary transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-secondary transition-colors"><Mail size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">
                    <p>&copy; {new Date().getFullYear()} ALERTA. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
