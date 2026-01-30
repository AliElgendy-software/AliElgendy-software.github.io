import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Languages",
        skills: ["PHP (Laravel)", "JavaScript (React.js)", "Python", "SQL (MySQL)", "HTML5", "CSS3"],
        color: "cyan"
    },
    {
        title: "Frameworks & Tools",
        skills: ["Laravel 10", "Next.js", "Electron", "Tailwind CSS", "Bootstrap", "Git"],
        color: "purple"
    },
    {
        title: "DevOps & Concepts",
        skills: ["Docker Basics", "Linux Admin", "Redis", "SaaS Architecture", "RESTful APIs", "OOP"],
        color: "green"
    }
];

const Skills = () => {
    return (
        <section className="py-20 bg-neutral-900/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Technical <span className="text-green-400">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-green-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-neutral-950 p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors"
                        >
                            <h3 className={`text-xl font-bold mb-6 text-${category.color}-400`}>
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1.5 bg-neutral-900 text-sm text-gray-300 rounded-lg border border-white/5 hover:border-white/20 transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
