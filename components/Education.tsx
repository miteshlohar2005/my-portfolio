import React from 'react';
import Section from './Section';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <div className="max-w-4xl mx-auto">
        {EDUCATION.map((edu, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 shadow-xl relative overflow-hidden transition-all"
          >
             {/* Decorative Background Icon */}
             <GraduationCap 
                className="absolute -right-8 -bottom-8 text-slate-700/20 transform -rotate-12" 
                size={200} 
             />
             
             <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                   <h3 className="text-2xl font-bold text-white mb-2">{edu.school}</h3>
                   <p className="text-xl text-cyan-400 font-medium mb-1">{edu.degree}</p>
                   <p className="text-slate-400 italic">"{edu.note}"</p>
                </div>
                <div className="bg-slate-950/50 px-6 py-3 rounded-lg border border-slate-800 text-center min-w-[120px]">
                   <span className="block text-sm text-slate-500 uppercase tracking-wider">Year</span>
                   <span className="text-2xl font-bold text-white">{edu.year}</span>
                </div>
             </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Education;