import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Database,
  GitBranch,
  Laptop,
  Globe,
  Sparkles,
  Boxes,
} from "lucide-react";

const technologies = [
  {
    category: "Frontend",
    icon: <Layout className="w-8 h-8 text-blue-400" />,
    items: ["React.js", "Node.js", "TypeScript", "HTML5/CSS3"],
  },
  { 
    category: "Styling",
    icon: <Sparkles className="w-8 h-8 text-purple-400" />,
    items: ["Tailwind CSS", "SCSS", "Styled Components"],
  },
  {
    category: "Development",
    icon: <Code2 className="w-8 h-8 text-green-400" />,
    items: ["Git", "REST APIs", "Performance Optimization"],
  },
  {
    category: "Tools",
    icon: <Boxes className="w-8 h-8 text-yellow-400" />,
    items: ["VS Code", "Figma", "Chrome DevTools"],
  },
];

export function About() {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/30 to-gray-900" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Laptop className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              About Me
            </h2>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2070&q=80"
              alt="Developer Workspace"
              className="w-full h-64 object-cover rounded-xl mb-8 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
          </motion.div>

          <motion.p
            className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Experienced Senior Frontend Developer with nearly 4 years of expertise in delivering high-performance web solutions. Skilled in leading teams, optimizing complex systems, and creating user-centric interfaces for both open-source and proprietary platforms. Focused on driving innovation, scalability, and providing outstanding user experiences. Proficient in React and Node.js, with a strong emphasis on building efficient and scalable web applications.
          </motion.p>
        </div>

        {/* Tech Stack Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                {tech.icon}
                <h3 className="text-xl font-bold text-white">
                  {tech.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {tech.items.map((item) => (
                  <li
                    key={item}
                    className="text-gray-400 flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Call-to-Action */}
        <motion.div
          className="text-center relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          </div>
          <a
            href="#contact"
            className="relative inline-flex items-center gap-2 px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-500 transition group"
          >
            <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
