import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-neutral-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get In <span className="text-cyan-400">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold mb-6">Let's build something amazing together</h3>
                        <p className="text-gray-400 text-lg mb-8">
                            I'm currently available for freelance projects and job opportunities. If you have a project that needs some creative touch, I'd love to hear about it.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:alielg866@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors">
                                <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center border border-white/5">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <p className="font-medium">alielg866@gmail.com</p>
                                </div>
                            </a>

                            <a href="tel:+201274398125" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors">
                                <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center border border-white/5">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Phone</p>
                                    <p className="font-medium">+20 127 439 8125</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center border border-white/5">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="font-medium">Egypt, Remote</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-8">
                            <a href="https://github.com/elw000" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center border border-white/5 hover:bg-cyan-500 hover:text-white transition-all">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com/in/elw00" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center border border-white/5 hover:bg-purple-500 hover:text-white transition-all">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-neutral-900/50 p-8 rounded-2xl border border-white/5"
                    >
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input type="text" className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input type="email" className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea rows={4} className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors" placeholder="Tell me about your project..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-medium py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
