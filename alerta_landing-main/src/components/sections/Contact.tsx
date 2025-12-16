
import { Mail, MessageSquare, Send, User } from 'lucide-react';

export const Contact = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-slate-900 to-black text-white relative overflow-hidden" id="contact">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                            Get in Touch
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Have questions about Alerta? We're here to help.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 text-gray-300">
                                        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Email us at</p>
                                            <p className="font-medium">support@alerta.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 text-gray-300">
                                        <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                                            <MessageSquare className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Support</p>
                                            <p className="font-medium">24/7 Emergency Support</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="space-y-6 bg-slate-900/30 p-8 rounded-2xl border border-white/10">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm text-gray-400 pl-1">Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm text-gray-400 pl-1">Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm text-gray-400 pl-1">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-black/50 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
                            >
                                Send Message
                                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </section>
    );
};
