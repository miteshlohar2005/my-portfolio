import React from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me" className="bg-slate-900/50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-6 text-slate-300 text-lg leading-relaxed">
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
           >
             I am <span className="text-cyan-400 font-semibold">{PERSONAL_INFO.name}</span>, a passionate Computer Science Engineering student based in {PERSONAL_INFO.location}. 
             My journey in technology is driven by a desire to learn something new every day.
           </motion.p>
           
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.1 }}
           >
             With a strong foundation in <span className="text-white font-medium">Data Analytics</span> and <span className="text-white font-medium">Artificial Intelligence</span>, 
             I have actively sought out internships and simulations to apply my theoretical knowledge to real-world scenarios. 
             From analyzing datasets with IBM SkillsBuild to exploring Generative AI with YBI Foundation, I am constantly expanding my technical toolkit.
           </motion.p>
           
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
           >
             Beyond technical skills, I am deeply committed to social service and leadership through my role as Vice President of the Red Ribbon Club (NSS Unit). 
             These experiences have honed my adaptability, communication, and organizational capabilities, making me a well-rounded professional ready for new challenges.
           </motion.p>
        </div>

        <div className="md:col-span-1">
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 h-full flex flex-col justify-center space-y-6">
            <h3 className="text-xl font-semibold text-white mb-2">Key Highlights</h3>
            <ul className="space-y-4">
               <li className="flex items-start">
                 <span className="w-2 h-2 mt-2 bg-cyan-500 rounded-full mr-3 flex-shrink-0"></span>
                 <span className="text-slate-300">Ex-Intern @ IBM SkillsBuild</span>
               </li>
               <li className="flex items-start">
                 <span className="w-2 h-2 mt-2 bg-cyan-500 rounded-full mr-3 flex-shrink-0"></span>
                 <span className="text-slate-300">NSS Vice President (RRC)</span>
               </li>
               <li className="flex items-start">
                 <span className="w-2 h-2 mt-2 bg-cyan-500 rounded-full mr-3 flex-shrink-0"></span>
                 <span className="text-slate-300">Data Analytics Enthusiast</span>
               </li>
               <li className="flex items-start">
                 <span className="w-2 h-2 mt-2 bg-cyan-500 rounded-full mr-3 flex-shrink-0"></span>
                 <span className="text-slate-300">Oracle Certified Associate</span>
               </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;