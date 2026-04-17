import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SOLUTIONS_DATA } from '../constants';
import { Check, Download, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const SolutionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];
  const data = id ? SOLUTIONS_DATA[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Solution Not Found</h2>
          <button onClick={() => navigate('/solutions')} className="text-kof-red underline mt-4">{t.solutions.back}</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back Button */}
        <button
          onClick={() => navigate('/solutions')}
          className="flex items-center text-white/60 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" /> {t.solutions.back}
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-white mb-6">{data.detailTitle[language]}</h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              {data.detailDescription[language]}
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">{t.solutions.modules}</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {data.detailModules[language].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check size={18} className="text-red-400 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {data.detailBenefits && (
                <div className="glass-card p-6 rounded-2xl border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-3">{t.solutions.benefits}</h3>
                  <ul className="space-y-2">
                    {data.detailBenefits[language].map((b, idx) => (
                      <li key={idx} className="text-white/70 text-sm flex items-center before:content-['•'] before:mr-2 before:text-red-400">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/contact?type=demo')}
                className="px-6 py-3 bg-white text-red-900 rounded-lg font-medium hover:bg-red-50 transition-colors shadow-lg shadow-black/20"
              >
                {t.solutions.requestDemo}
              </button>

            </div>
          </motion.div>

          {/* Visual / Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel rounded-3xl p-8 min-h-[400px] flex items-center justify-center border border-white/10 shadow-lg"
          >
            {/* Dynamic Visual based on ID */}
            <div className="w-full max-w-md">
              {/* Central Hub Diagram */}
              <div className="relative flex flex-col items-center justify-center py-10">

                {/* Top Node: The Solution */}
                <div className="z-10 bg-white/10 p-4 rounded-xl shadow-lg border-2 border-white/20 flex flex-col items-center w-48 mb-8 relative backdrop-blur-md">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-2 text-red-400">
                    <Check size={24} />
                  </div>
                  <span className="font-bold text-white text-lg">{data.title}</span>
                  <div className="absolute -bottom-8 left-1/2 w-0.5 h-8 bg-white/30"></div>
                  <div className="absolute -bottom-2 left-1/2 w-2 h-2 bg-white/30 rounded-full -translate-x-1/2"></div>
                </div>

                {/* Middle Layer: Integration */}
                <div className="grid grid-cols-2 gap-8 w-full mb-8 relative z-0">
                  {/* Connection Lines */}
                  <svg className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible">
                    <path d="M 50% 0 L 25% 40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="4 4" />
                    <path d="M 50% 0 L 75% 40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="4 4" />
                  </svg>

                  <div className="bg-white/5 p-3 rounded-lg border border-white/10 text-center text-sm font-medium text-white/80 shadow-sm">
                    API Gateway
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg border border-white/10 text-center text-sm font-medium text-white/80 shadow-sm">
                    Secure Cloud
                  </div>
                </div>

                {/* Core System */}
                <div className="z-10 bg-black/60 text-white p-6 rounded-2xl shadow-xl w-64 text-center relative border border-white/10">
                  <div className="absolute -top-8 left-1/2 w-0.5 h-8 bg-white/30"></div>
                  <div className="font-bold text-lg mb-1">ICMIS Core</div>
                  <div className="text-xs text-white/60">Unified Database & Logic</div>

                  {/* Database Icon Representation */}
                  <div className="mt-4 flex justify-center gap-1">
                    <div className="w-8 h-2 bg-white/20 rounded-full"></div>
                    <div className="w-8 h-2 bg-white/20 rounded-full"></div>
                    <div className="w-8 h-2 bg-white/20 rounded-full"></div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default SolutionDetail;
