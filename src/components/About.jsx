import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-20 bg-neutral-950 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        About <span className="text-cyan-400">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-cyan-500/20 shadow-2xl shadow-cyan-500/10 bg-neutral-900">
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 via-transparent to-transparent z-10" />
                            <img
                                src="/profile.png"
                                alt="Ali Elgendy"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </motion.div>

                    {/* Text Column */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-6 text-gray-300 text-lg leading-relaxed"
                        >
                            <p>
                                I'm a passionate <strong className="text-white">Full Stack Engineer</strong> and <strong className="text-white">Computer Science Student</strong> at Zagazig University, driven by solving complex problems through elegant code.
                            </p>
                            <p>
                                Currently, I'm the Founder of <span className="text-cyan-400">Smart Academy Hub</span>, a SaaS platform revolutionizing sports academy management. I also contribute to the DevOps community by authoring scenarios for <span className="text-purple-400">SadServers.com</span>.
                            </p>
                            <p>
                                My expertise spans the full stack—from architecting secure multi-tenant backends with <span className="text-white">Laravel</span> to crafting immersive frontends with <span className="text-white">React.js</span>. I thrive on building scalable, performance-driven applications that leave a lasting impact.
                            </p>
                        </motion.div>

                        {/* Stats Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4"
                        >
                            <div className="bg-neutral-900/50 p-4 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-colors">
                                <h3 className="text-2xl font-bold text-cyan-400 mb-1">3+</h3>
                                <p className="text-sm text-gray-400">Years of Coding</p>
                            </div>
                            <div className="bg-neutral-900/50 p-4 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors">
                                <h3 className="text-2xl font-bold text-purple-400 mb-1">10+</h3>
                                <p className="text-sm text-gray-400">Projects Completed</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
