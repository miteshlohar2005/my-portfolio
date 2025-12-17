import React from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, Linkedin, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Brand & Summary */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-serif font-bold text-white mb-6">
              Mitesh <span className="text-cyan-500">Lohar</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              A CS Engineering student passionate about data, AI, and continuous learning. 
              Open to opportunities in Data Analytics and Machine Learning.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Get in Touch</h3>
            <div className="space-y-4">
              <a href={`mailto:${PERSONAL_INFO.emailPrimary}`} className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center mr-3 group-hover:bg-cyan-900/30 transition-colors">
                  <Mail size={18} />
                </div>
                {PERSONAL_INFO.emailPrimary}
              </a>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors group">
                 <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center mr-3 group-hover:bg-cyan-900/30 transition-colors">
                  <Phone size={18} />
                </div>
                {PERSONAL_INFO.phone}
              </a>
              <div className="flex items-center text-slate-400">
                 <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center mr-3">
                  <MapPin size={18} />
                </div>
                {PERSONAL_INFO.location}
              </div>
            </div>
          </motion.div>

          {/* Social / Links */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
          >
             <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Social</h3>
             <a 
               href={PERSONAL_INFO.linkedin}
               target="_blank"
               rel="noreferrer"
               className="inline-flex items-center space-x-3 px-6 py-3 bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors text-white border border-slate-800 group"
             >
               <Linkedin size={20} className="text-blue-500 group-hover:scale-110 transition-transform" />
               <span>Connect on LinkedIn</span>
               <ExternalLink size={14} className="opacity-50" />
             </a>
          </motion.div>
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-600 text-sm"
        >
          <p>&copy; {new Date().getFullYear()} Mitesh Ramesh Lohar. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with React & Tailwind</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Contact;