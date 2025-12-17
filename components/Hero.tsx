import React from 'react';
import { ArrowDown, Download, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#about');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Gradient Blob */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3], 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3], 
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif leading-tight">
              Mitesh <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Ramesh Lohar
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-8 font-light">
              CS Engineering | Data Analytics | AI/ML
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10 text-sm text-slate-400">
               <div className="flex items-center gap-2">
                 <MapPin size={16} className="text-cyan-500" />
                 {PERSONAL_INFO.location}
               </div>
               <div className="flex items-center gap-2">
                 <Mail size={16} className="text-cyan-500" />
                 {PERSONAL_INFO.emailPrimary}
               </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                onClick={handleScrollToContact}
                className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-lg transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2 cursor-pointer"
              >
                <Mail size={18} />
                Contact Me
              </a>
              <a 
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-all border border-slate-700 flex items-center gap-2 cursor-pointer"
              >
                <Download size={18} />
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
             <div className="w-full aspect-square relative rounded-2xl overflow-hidden border-2 border-slate-800 bg-slate-900 shadow-2xl">
                 <img 
                   src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop" 
                   alt="Generative AI Abstract Art" 
                   className="w-full h-full object-cover opacity-80"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                 <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-slate-900/90 backdrop-blur p-6 rounded-xl border border-slate-700">
                      <p className="text-slate-300 italic">"{PERSONAL_INFO.summary.split('.')[0]}."</p>
                    </div>
                 </div>
             </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">
        <a href="#about" onClick={handleScrollToAbout} aria-label="Scroll down" className="cursor-pointer">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;