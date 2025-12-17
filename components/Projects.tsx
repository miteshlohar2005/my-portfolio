import React from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import { Folder, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Featured Projects" subtitle="Innovative solutions built with modern technology">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-slate-900/50 rounded-2xl border border-slate-800 p-6 md:p-8 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/5 overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="text-cyan-500" size={24} />
            </div>

            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
              <Folder size={24} />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>

            <p className="text-slate-400 mb-6 leading-relaxed flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.technologies.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-900/20 rounded-full border border-cyan-900/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;