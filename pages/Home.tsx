import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2, AlertCircle, DollarSign, Wallet, TrendingUp, Shield, Cloud, Banknote } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SOLUTIONS_DATA, PAIN_POINTS, PRICING_TIERS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import DataCoreModel from '../components/DataCoreModel';
import { publicAsset } from '../utils/assets';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 10]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
        {/* Animated Blobs */}


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center lg:items-start lg:w-[55%]"
          >
            <motion.div
              variants={itemVariants}
              className="inline-block mb-6 px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 backdrop-blur-md shadow-sm "
            >
              <span className="text-sky-500 font-rajdhani font-bold text-sm tracking-widest uppercase">The Future of AI-Driven Finance</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-none drop-shadow-lg "
            >
              {t.hero.headline}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-white/80 font-rajdhani max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-md"
            >
              {t.hero.subheadline}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 242, 255, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-4 bg-sky-600 text-white font-bold text-lg rounded-xl hover:bg-white transition-all duration-300 flex items-center gap-3"
              >
                {t.hero.btnSolution} <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                onClick={() => navigate('/smart-partner')}
                whileHover={{ scale: 1.05, borderColor: 'rgba(189, 0, 255, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-transparent border-2 border-kof-purple/30 text-slate-300 font-bold text-lg hover:bg-slate-800 hover:text-white transition-all duration-300 shadow-lg backdrop-blur-md rounded-xl"
              >
                {t.hero.btnPartner}
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
            className="hidden lg:block lg:w-[45%] relative z-10"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Decorative glows behind the 3D model */}
              <div className="absolute inset-0 bg-sky-500/20 blur-[100px] rounded-full mix-blend-screen scale-150 pointer-events-none"></div>
              <div className="absolute inset-10 bg-slate-400/10 blur-[50px] rounded-full mix-blend-overlay pointer-events-none"></div>
              
              <DataCoreModel />
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. SUPPORTED LOGOS (Glass Strip) */}
      <section className="py-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-4"
        >
          <div className="glass-panel rounded-2xl p-8 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 hover:shadow-2xl hover:shadow-black/20">
            <p className="text-sm font-semibold text-white/60 uppercase tracking-widest">Trusted By</p>
            <div className="flex gap-12 items-center opacity-80 hover:opacity-100 transition-all duration-500">
              <a href="https://tfp.com.my/" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-white hover:text-red-400 transition-colors">TFP Solutions Berhad</a>
              <div className="h-6 w-px bg-white/20 hidden md:block"></div>
              <a href="https://www.mobilityone.com.my/v7/" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-white hover:text-red-400 transition-colors">MobilityOne Sdn Bhd</a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. PAIN POINTS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">{t.painPoints.title}</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-kof-accent to-kof-purple mx-auto mb-6"></div>
            <p className="mt-4 text-white/70 text-lg font-rajdhani tracking-wide">{t.painPoints.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PAIN_POINTS.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.2 } }}
                className="glass-card p-8 rounded-2xl group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm border border-white/10">
                  <point.icon size={28} />
                </div>
                <h3 className="font-bold text-xl text-white mb-3">{point.title[language]}</h3>
                <p className="text-white/70 leading-relaxed">{point.desc[language]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SOLUTIONS MASTER */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-sky-500 font-bold tracking-widest text-xs uppercase bg-sky-500/10 border border-sky-500/20 px-4 py-2 rounded-xl shadow-sm ">System Architecture</span>
            <h2 className="text-5xl md:text-6xl font-black text-white mt-8 mb-4 drop-shadow-lg">{t.solutions.title}</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-kof-purple to-kof-accent mx-auto mb-12"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(SOLUTIONS_DATA).map((sol, idx) => (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="group relative glass-card rounded-3xl p-8 overflow-hidden shadow-sm hover:shadow-xl"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white to-white/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                <h3 className="text-3xl font-bold text-white mb-4">{sol.title}</h3>
                <p className="text-white/80 mb-8 min-h-[3rem] text-lg">{sol.description[language]}</p>

                <ul className="space-y-4 mb-10">
                  {sol.features[language].slice(0, 3).map((feat, i) => (
                    <li key={i} className="flex items-center text-white/90">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-white group-hover:text-red-900 transition-colors">
                        <CheckCircle2 size={14} className="text-white group-hover:text-red-900" />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => navigate(sol.link)}
                  className="w-full py-4 rounded-xl border border-sky-500/30 text-sky-500 font-bold group-hover:bg-sky-600 group-hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  {t.solutions.learnMore} <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SMART PARTNER (Dark Mode Section) */}
      <section className="py-24 bg-black/20 text-white relative overflow-hidden rounded-t-[3rem] mt-20 border-t border-white/10">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-800 opacity-20 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-600 opacity-10 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight drop-shadow-md">{t.smartPartner.heroTitle}</h2>
            <p className="text-white/80 text-xl mb-10 leading-relaxed">
              {t.smartPartner.heroDesc}
            </p>
            <div className="space-y-6 mb-10">
              <div className="flex items-start group">
                <div className="p-3 bg-white/10 rounded-2xl mr-5 group-hover:bg-white group-hover:text-red-900 transition-colors"><DollarSign className="text-white group-hover:text-red-900 w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-lg">{t.smartPartner.passiveIncome}</h4>
                  <p className="text-white/60">{t.smartPartner.passiveIncomeDesc}</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="p-3 bg-white/10 rounded-2xl mr-5 group-hover:bg-white group-hover:text-red-900 transition-colors"><Wallet className="text-white group-hover:text-red-900 w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-lg">{t.smartPartner.superApp}</h4>
                  <p className="text-white/60">{t.smartPartner.superAppDesc}</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => navigate('/smart-partner')}
              className="bg-sky-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all"
            >
              {t.smartPartner.joinBtn}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-square max-w-lg mx-auto"
          >
            <div className="absolute inset-0 bg-sky-500/10 blur-[100px] rounded-full mix-blend-screen"></div>
            <img src={publicAsset('/images/cloud_network.png')} alt="Cloud Network Visualization" className="relative z-10 w-full h-full object-contain animate-float-slow drop-shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* 6. PRICING PREVIEW */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-16 drop-shadow-md"
          >
            {t.pricing.title}
          </motion.h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {PRICING_TIERS.map((tier, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, borderColor: 'rgba(255, 255, 255, 0.3)' }}
                className="p-8 glass-card rounded-2xl hover:border-white/30 group cursor-default"
              >
                <div className="text-sm text-white/60 mb-4 min-h-[40px] flex items-center justify-center font-medium uppercase tracking-wide">{tier.label[language]}</div>
                <div className="text-3xl font-bold text-white group-hover:text-white transition-colors">{tier.value}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-16">
            <button
              onClick={() => navigate('/contact?type=quotation')}
              className="inline-flex items-center text-white font-bold text-lg hover:underline decoration-2 underline-offset-4 group"
            >
              {t.pricing.cta} <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. CTA FOOTER PREVIEW */}
      <section className="py-32 text-center px-4 relative overflow-hidden bg-black/20 border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 -z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 max-w-3xl mx-auto leading-tight ">{t.ctaFooter.title}</h2>
          <p className="text-white/70 mb-12 max-w-xl mx-auto text-xl font-rajdhani tracking-wide">{t.ctaFooter.desc}</p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-slate-800 text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-slate-300 transition-all shadow-lg"
          >
            {t.ctaFooter.btn}
          </button>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;
