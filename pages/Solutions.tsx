import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { SOLUTIONS_DATA } from '../constants';
import { ArrowRight, LayoutGrid, Smartphone, FileText, CreditCard, Network } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const icons = {
  icmis: LayoutGrid,
  kosmart: Smartphone,
  iaccount: FileText,
  imembership: Network,
  ilms: CreditCard
};

const Solutions: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen pt-40 pb-20 relative overflow-hidden">
      {/* Background Blobs Removed */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative">
          {/* Cyber accents */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-slate-800/20 blur-[100px] rounded-full pointer-events-none"></div>

          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-kof-accent to-white drop-shadow-lg tracking-wider">
            {t.solutions.pageTitle}
          </h1>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto text-lg leading-relaxed mix-blend-highlight">
            {t.solutions.pageSubtitle}
          </p>
        </div>

        <div className="space-y-8">
          {Object.values(SOLUTIONS_DATA).map((sol, index) => {
            const Icon = icons[sol.id as keyof typeof icons] || LayoutGrid;

            return (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(sol.link)}
                className="group cursor-pointer rounded-xl p-8 border border-white/10 shadow-sm transition-all duration-300 relative hover:border-sky-500/50 hover:shadow-lg "
                style={{
                  background: "rgba(15, 23, 42, 0.9)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Cyber Line Connector Visual */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-sky-600 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Techy background pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-kof-accent via-transparent to-transparent pointer-events-none scale-150 group-hover:scale-100 transition-transform duration-700"></div>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
                  <div className="p-4 bg-sky-500/5 rounded-xl border border-sky-500/20 group-hover:bg-sky-600 group-hover:text-black transition-colors text-sky-500 group-hover:border-sky-500 group-hover:shadow-lg">
                    <Icon size={32} />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white group-hover:text-sky-500 transition-colors tracking-wider">{sol.title}</h2>
                    <p className="text-white/70 mt-3 leading-relaxed text-lg">{sol.description[language]}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {sol.features[language].map((f, i) => (
                        <span key={i} className="px-3 py-1 bg-sky-500/5 border border-sky-500/20 rounded-none text-xs text-sky-500 tracking-widest font-mono uppercase shadow-lg">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="hidden md:flex items-center text-sky-500 uppercase text-sm tracking-widest font-bold opacity-0 group-hover:opacity-100 transform translate-x-[-20px] group-hover:translate-x-0 transition-all duration-500">
                    {t.solutions.learnMore} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
