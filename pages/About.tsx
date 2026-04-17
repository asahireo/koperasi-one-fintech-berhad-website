import React from 'react';
import { Users, Target, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen pt-40 pb-20 relative overflow-hidden">
      {/* Background Blobs Removed to reveal global gradient */}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

        <div className="text-center mb-16 relative">
          {/* Cyber accents */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-sky-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-kof-accent to-white drop-shadow-lg">
            {t.about.pageTitle}
          </h1>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto text-lg leading-relaxed mix-blend-highlight">
            {t.about.pageSubtitle}
          </p>
        </div>

        <div className="prose prose-lg mx-auto text-white/80 mb-16">
          <p>{t.about.desc1}</p>
          <p className="mt-4">{t.about.desc2}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20 relative z-10">
          {/* Vision Card */}
          <div 
            className="p-8 rounded-xl relative group overflow-hidden transition-all duration-500 hover:-translate-y-2"
            style={{
              background: "rgba(30, 41, 59, 0.8)",
              backdropFilter: "blur(20px) saturate(180%)",
              border: "1px solid rgba(0, 242, 255, 0.2)",
              boxShadow: "0 0 32px 0 rgba(0, 242, 255, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
            }}
          >
            <div className="absolute top-0 left-0 w-16 h-[2px] bg-sky-600 shadow-lg"></div>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-sky-500/10 text-sky-500 rounded-xl border border-sky-500/20 shadow-lg mr-4">
                <Target size={28} />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-wider">{t.about.visionTitle}</h2>
            </div>
            <p className="text-white/70 leading-relaxed text-lg">{t.about.visionDesc}</p>
          </div>

          {/* Mission Card */}
          <div 
            className="p-8 rounded-xl relative group overflow-hidden transition-all duration-500 hover:-translate-y-2 "
            style={{
              background: "rgba(30, 41, 59, 0.8)",
              backdropFilter: "blur(20px) saturate(180%)",
              border: "1px solid rgba(0, 242, 255, 0.2)",
              boxShadow: "0 0 32px 0 rgba(0, 242, 255, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
            }}
          >
            <div className="absolute bottom-0 right-0 w-16 h-[2px] bg-sky-600 shadow-lg"></div>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-sky-500/10 text-sky-500 rounded-xl border border-sky-500/20 shadow-lg mr-4">
                <ShieldCheck size={28} />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-wider">{t.about.missionTitle}</h2>
            </div>
            <p className="text-white/70 leading-relaxed text-lg">{t.about.missionDesc}</p>
          </div>
        </div>

        <div className="mb-20 relative z-10">
          <h2 className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 mb-12 text-center drop-shadow-lg">
            {t.about.objectivesTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 relative">
            {/* Ambient background glow for objectives */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-sky-500/5 blur-[120px] pointer-events-none"></div>
            
            {t.about.objectives.map((obj, i) => (
              <div 
                key={i} 
                className="flex items-start p-6 rounded-xl border border-sky-500/20 transition-all duration-300 hover:border-sky-500/60 hover:shadow-lg group relative overflow-hidden"
                style={{
                  background: "rgba(15, 23, 42, 0.8)",
                  backdropFilter: "blur(10px)",
                }}
              >
                {/* Cyber Hover Effect */}
                <div className="absolute left-0 top-0 w-1 h-full bg-sky-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
                
                <div className="relative z-10 mr-4 mt-1">
                  <div className="h-2 w-2 rounded-full bg-sky-600 shadow-lg mt-2"></div>
                </div>
                <span className="text-white/80 text-lg leading-relaxed relative z-10 group-hover:text-white transition-colors">{obj}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
