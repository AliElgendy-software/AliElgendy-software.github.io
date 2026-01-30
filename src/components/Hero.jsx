import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-neutral-950 to-neutral-950" />
            <div className="absolute inset-0 opacity-20"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6 border border-cyan-500/20">
                        Available for Hire
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        Building Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Experiences</span>
                        <br />
                        That Matter
                    </h1>
                    <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                        Hi, I'm <strong className="text-white">Ali Elgendy</strong>. A Full Stack Engineer specializing in building exceptional SaaS products and digital solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#projects"
                            className="group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all text-lg"
                        >
                            View Work
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/resume.pdf" // Placeholder path
                            className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-3 rounded-full font-medium transition-all text-lg"
                        >
                            Download CV
                            <Download className="w-5 h-5" />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Blur */}
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
        </section>
    );
};

export default Hero;
