import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        role: "Founder & Lead Full Stack Engineer",
        company: "Smart Academy Hub (SaaS Startup)",
        period: "Jan 2025 – Present",
        description: [
            "Architected a Multi-tenant SaaS platform using Laravel 10 & React.js.",
            "Engineered secure tenant isolation with Global Scopes, ensuring 100% data privacy.",
            "Integrated Lemon Squeezy & Tap Payments for recurring subscriptions.",
            "Designed a gamified 'FIFA-style' Player Evaluation System.",
        ],
        tech: ["Laravel", "React.js", "Redis", "MySQL"],
    },
    {
        role: "Scenario Author & Contributor",
        company: "SadServers.com",
        period: "Oct 2025 – Present",
        description: [
            "Authored technical troubleshooting scenarios ('Cairo', 'Alexandria') for DevOps engineers.",
            "Designed complex Linux infrastructure challenges (Docker, Nginx).",
            "Created educational content for debugging real-world server incidents.",
        ],
        tech: ["Linux", "Docker", "Nginx", "DevOps"],
    },
    {
        role: "Freelance Full Stack Developer",
        company: "Interactive Sports Tactical Simulator",
        period: "Nov 2024 – Present",
        description: [
            "Developed a tactical simulation tool using React.js and HTML5 Canvas.",
            "Implemented drag-and-drop interface for players and formations.",
            "Built feature to export tactical sessions as high-quality images.",
        ],
        tech: ["React.js", "HTML5 Canvas", "Tailwind"],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-neutral-900/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Work <span className="text-purple-400">Experience</span>
                    </h2>
                    <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full" />
                </motion.div>

                <div className="relative border-l border-neutral-800 ml-4 md:ml-12 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-12"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50" />

                            <div className="bg-neutral-900/50 p-6 md:p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all hover:bg-neutral-900/80 group">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                                            {exp.role}
                                        </h3>
                                        <p className="text-cyan-400 font-medium">{exp.company}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0 text-sm">
                                        <Calendar size={16} />
                                        <span>{exp.period}</span>
                                    </div>
                                </div>

                                <ul className="space-y-2 mb-6">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm md:text-base">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500/50 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-gray-300 border border-white/5"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
