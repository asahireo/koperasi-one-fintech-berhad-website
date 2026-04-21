import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { NAV_ITEMS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { publicAsset } from '../utils/assets';

const demoUrl = 'https://wa.me/601159793168?text=Hi,%20I%20would%20like%20to%20request%20a%20demo.';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const { language, toggleLanguage } = useLanguage();

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const closeMenu = () => {
    setIsOpen(false);
  };

  const requestDemo = () => {
    window.open(demoUrl, '_blank');
    closeMenu();
  };

  const requestLabel = language === 'ms' ? 'Minta Demo' : 'Request Demo';

  return (
    <>
      <nav className="fixed left-0 right-0 top-4 z-50 flex justify-center px-3 pointer-events-none md:top-5 md:px-5" aria-label="Primary navigation">
        <div className="pointer-events-auto flex w-full max-w-[92rem] items-center justify-between rounded-full border border-white/12 bg-[rgba(8,10,16,0.78)] px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:px-6">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="flex min-h-11 items-center gap-3 rounded-full px-2 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300"
            aria-label="Go to homepage"
          >
            <img src={publicAsset('/images/kof-logo.png')} alt="KOF Logo" className="h-9 w-auto object-contain brightness-0 invert" />
            <span className="hidden text-[10px] font-black uppercase leading-tight tracking-[0.22em] text-white/86 sm:block">
              Koperasi One<br />Fintech Berhad
            </span>
          </button>

          <div className="hidden items-center gap-2 lg:flex">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.label.en}
                to={item.path}
                className={({ isActive }) =>
                  `flex min-h-11 items-center rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300 ${
                    isActive ? 'bg-white text-slate-950 shadow-sm' : 'text-white/70 hover:bg-white/8 hover:text-white'
                  }`
                }
              >
                {item.label[language]}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button type="button" onClick={toggleLanguage} className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/14 px-3 text-xs font-black uppercase text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300" aria-label="Toggle language">
              {language}
            </button>
            <button type="button" onClick={requestDemo} className="primary-button px-5 py-3 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300">
              {requestLabel}
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button type="button" onClick={toggleLanguage} className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/14 px-3 text-xs font-black uppercase text-white transition hover:bg-white/10" aria-label="Toggle language">
              {language}
            </button>
            <button type="button" onClick={() => setIsOpen((value) => !value)} className="flex min-h-11 min-w-11 items-center justify-center rounded-full text-white transition hover:bg-white/10" aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isOpen}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <motion.div className="fixed left-0 right-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-violet-300 via-white to-violet-200" style={{ scaleX }} />

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-[rgba(6,8,14,0.96)] px-5 pb-8 pt-28 backdrop-blur-2xl lg:hidden">
            <div className="mx-auto max-w-xl space-y-3">
              {NAV_ITEMS.map((item) => (
                <div key={item.label.en} className="border-b border-white/10 pb-3">
                  <NavLink to={item.path} className={({ isActive }) => `block min-h-12 rounded-lg px-2 py-3 text-xl font-semibold ${isActive ? 'text-violet-200' : 'text-white'}`} onClick={closeMenu}>
                    {item.label[language]}
                  </NavLink>
                </div>
              ))}

              <button type="button" onClick={requestDemo} className="primary-button mt-6 inline-flex min-h-12 w-full items-center justify-center px-5 py-3 font-semibold">
                {requestLabel}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
