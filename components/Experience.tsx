import React from 'react';
import Section from './Section';
import { EXPERIENCE } from '../constants';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience" subtitle="My professional journey and internships">
      <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
        {EXPERIENCE.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] md:-left-[9px] top-0 w-3 h-3 md:w-5 md:h-5 rounded-full bg-cyan-500 border-4 border-slate-950 shadow-[0_0_0_4px_rgba(30,41,59,1)]"></div>
            
            <div className="bg-slate-900/50 p-6 md:p-8 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors group">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center text-cyan-500 font-medium mt-1">
                    <Briefcase size={16} className="mr-2" />
                    {exp.company}
                  </div>
                </div>
                <div className="flex flex-col md:items-end text-sm text-slate-400 space-y-1 mt-2 md:mt-0">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-2" />
                    {exp.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2" />
                    {exp.location}
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2 mt-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-slate-300 flex items-start text-sm md:text-base leading-relaxed">
                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-slate-500 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;