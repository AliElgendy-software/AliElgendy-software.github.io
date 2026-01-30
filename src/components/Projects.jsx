import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";

const projects = [
    {
        title: "Custom Sales CRM",
        description: "A specialized CRM featuring a dynamic Kanban Board for tracking sales pipelines. Includes complex ER diagrams for client-lead relationships and a detailed interaction logging system.",
        tech: ["Laravel", "MySQL", "JavaScript"],
        links: { github: "#", live: "#" }, // Placeholders
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Offline-First Gym Management",
        description: "Desktop application designed for gyms with limited internet. Features an offline-first architecture with local SQLite database and automated membership validity tracking.",
        tech: ["Python", "Electron", "SQLite"],
        links: { github: "#", live: "#" },
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Smart Academy Hub",
        description: "Comprehensive Multi-tenant SaaS platform for sports academies. Handles subscriptions, player evaluations, and analytics with a secure tenant isolation system.",
        tech: ["Laravel", "React.js", "Redis"],
        links: { github: "#", live: "#" },
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1000&auto=format&fit=crop"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-neutral-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured <span className="text-cyan-400">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-neutral-950/50 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-2 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Links removed
                                <div className="flex items-center gap-4">
                                </div>
                                */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
