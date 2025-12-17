import React from 'react';
import Section from './Section';
import { SKILLS, CERTIFICATIONS } from '../constants';
import { Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skills & Certifications" className="bg-slate-900/50">
      
      {/* Skills Grid */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-white mb-8 border-l-4 border-cyan-500 pl-4">Technical Expertise</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 flex flex-col items-center text-center group"
            >
              <div className="p-3 bg-slate-900 rounded-lg mb-4 text-cyan-500 group-hover:text-cyan-400 group-hover:scale-110 transition-transform">
                <skill.icon size={32} />
              </div>
              <h4 className="font-semibold text-slate-200">{skill.name}</h4>
              <div className="w-full bg-slate-700 h-1.5 rounded-full mt-4 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-cyan-600 to-blue-500 h-full rounded-full" 
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications List */}
      <div>
        <h3 className="text-2xl font-semibold text-white mb-8 border-l-4 border-purple-500 pl-4">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-start space-x-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-colors"
            >
              <Award className="text-purple-400 flex-shrink-0 mt-1" size={24} />
              <span className="text-slate-300 font-medium">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>

    </Section>
  );
};

export default Skills;