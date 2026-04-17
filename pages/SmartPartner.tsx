import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, TrendingUp, Users, CreditCard } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const SmartPartner: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];

  const icons = [Users, CreditCard, TrendingUp];

  return (
    <div className="min-h-screen pt-40 pb-20 relative overflow-hidden">
      {/* Background Blobs Removed */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-500/10 blur-[120px] rounded-full pointer-events-none"></div>

          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-kof-accent to-white drop-shadow-lg tracking-wider">
            {t.smartPartner.pageTitle}
          </h1>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto text-lg leading-relaxed mix-blend-highlight">
            {t.smartPartner.pageSubtitle}
          </p>
        </div>

        {/* 3 Steps / Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {t.smartPartner.steps.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-8 rounded-xl text-center relative group overflow-hidden border border-sky-500/20 transition-all hover:border-sky-500/60 hover:shadow-lg "
                style={{ background: "rgba(15, 23, 42, 0.8)", backdropFilter: "blur(10px)" }}
              >
                {/* Neon bottom line */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                <div className="inline-flex p-4 bg-sky-500/10 text-sky-500 rounded-xl mb-6 border border-sky-500/30 shadow-lg group-hover:bg-sky-600 group-hover:text-black transition-colors duration-300">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wider group-hover:text-sky-500 transition-colors">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Detailed Breakdown */}
        <div 
          className="rounded-xl p-10 md:p-16 text-white relative overflow-hidden border border-sky-500/20 shadow-lg"
          style={{ background: "rgba(15, 23, 42, 0.9)", backdropFilter: "blur(20px)" }}
        >
          {/* Internal Grid overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0, 242, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 242, 255, 1) 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

          <div className="relative z-10 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 tracking-widest">{t.smartPartner.benefitsTitle}</h2>
              <ul className="space-y-4">
                {t.smartPartner.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start group">
                    <div className="mr-4 mt-1 border border-sky-500/50 p-1 flex-shrink-0 bg-sky-500/10">
                      <CheckCircle2 className="text-sky-500 group-hover:shadow-lg transition-all" size={16} />
                    </div>
                    <span className="text-white/80 text-lg leading-relaxed group-hover:text-white transition-colors">{benefit}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigate('/contact?type=partner')}
                className="mt-10 px-8 py-4 bg-sky-600 text-white font-bold text-sm tracking-widest hover:bg-white transition-all shadow-lg uppercase"
              >
                {t.smartPartner.joinNow}
              </button>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-black/80 p-8 rounded-xl border border-sky-500/30 w-full max-w-sm relative shadow-lg">
                {/* Techy corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-sky-500"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-sky-500"></div>
                
                <h3 className="text-center font-bold text-xl mb-8 text-sky-500 tracking-widest uppercase">{t.smartPartner.potentialTitle}</h3>
                <div className="space-y-6">
                  <div className="flex justify-between border-b border-white/5 pb-3">
                    <span className="text-white/60 font-mono text-sm tracking-wider uppercase">100 Users</span>
                    <span className="font-mono font-bold text-white shadow-lg">RM 500</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-3">
                    <span className="text-white/60 font-mono text-sm tracking-wider uppercase">1,000 Users</span>
                    <span className="font-mono font-bold text-white shadow-lg">RM 5,000</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-white/80 font-mono text-sm tracking-wider uppercase">10,000 Users</span>
                    <span className="font-bold text-sky-500 text-2xl drop-shadow-lg">RM 50,000</span>
                  </div>
                </div>
                <p className="text-[10px] text-center text-white/40 mt-8 font-mono">{t.smartPartner.disclaimer}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SmartPartner;
