import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { NAV_ITEMS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { publicAsset } from '../utils/assets';

const demoUrl = 'https://wa.me/601159793168?text=Hi,%20I%20would%20like%20to%20request%20a%20demo.';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const requestDemo = () => {
    window.open(demoUrl, '_blank');
    closeMenu();
  };

  return (
    <>
      <nav className="fixed left-0 right-0 top-4 z-50 flex justify-center px-3 pointer-events-none md:top-5 md:px-5" aria-label="Primary navigation">
        <div className="pointer-events-auto flex w-full max-w-[92rem] items-center justify-between rounded-lg border border-white/12 bg-zinc-950/85 px-4 py-3 shadow-2xl shadow-black/25 backdrop-blur-2xl md:px-6">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="flex min-h-11 items-center gap-3 rounded-lg text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
            aria-label="Go to homepage"
          >
            <img src={publicAsset('/images/kof-logo.png')} alt="KOF Logo" className="h-9 w-auto object-contain brightness-0 invert" />
            <span className="hidden text-[10px] font-black uppercase leading-tight tracking-[0.22em] text-white/90 sm:block">
              Koperasi One<br />Fintech Berhad
            </span>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <div key={item.label.en} className="group relative">
                {item.subItems ? (
                  <button type="button" className="flex min-h-11 items-center gap-1 rounded-lg px-3 py-2 text-sm font-black text-white/78 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300">
                    <span>{item.label[language]}</span>
                    <ChevronDown size={15} strokeWidth={3} />
                  </button>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex min-h-11 items-center rounded-lg px-3 py-2 text-sm font-black transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 ${
                        isActive ? 'bg-white text-red-900 shadow-sm' : 'text-white/78 hover:bg-white/10 hover:text-white'
                      }`
                    }
                  >
                    {item.label[language]}
                  </NavLink>
                )}

                {item.subItems && (
                  <div className="invisible absolute left-1/2 top-full w-60 -translate-x-1/2 translate-y-3 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="rounded-lg border border-white/12 bg-zinc-950/95 p-2 shadow-2xl shadow-black/30 backdrop-blur-2xl">
                      {item.subItems.map((sub) => (
                        <NavLink key={sub.path} to={sub.path} className="block rounded-lg px-4 py-3 text-sm font-bold text-white/74 transition hover:bg-white/10 hover:text-white" onClick={closeMenu}>
                          {sub.label[language]}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button type="button" onClick={toggleLanguage} className="flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-white/14 px-3 text-xs font-black uppercase text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300" aria-label="Toggle language">
              {language}
            </button>
            <button type="button" onClick={requestDemo} className="request-demo-link inline-flex min-h-11 items-center justify-center rounded-lg bg-white px-5 py-2 text-sm font-black text-red-900 shadow-lg shadow-black/20 transition hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300">
              {t.nav.requestDemo}
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button type="button" onClick={toggleLanguage} className="flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-white/14 px-3 text-xs font-black uppercase text-white transition hover:bg-white/10" aria-label="Toggle language">
              {language}
            </button>
            <button type="button" onClick={() => setIsOpen((value) => !value)} className="flex min-h-11 min-w-11 items-center justify-center rounded-lg text-white transition hover:bg-white/10" aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isOpen}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <motion.div className="fixed left-0 right-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-emerald-300 via-white to-red-300" style={{ scaleX }} />

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-zinc-950/96 px-5 pb-8 pt-28 backdrop-blur-2xl lg:hidden">
            <div className="mx-auto max-w-xl space-y-3">
              {NAV_ITEMS.map((item) => (
                <div key={item.label.en} className="border-b border-white/10 pb-3">
                  {item.subItems ? (
                    <div>
                      <button type="button" onClick={() => setOpenDropdown(openDropdown === item.label.en ? null : item.label.en)} className="flex min-h-12 w-full items-center justify-between rounded-lg px-2 text-left text-xl font-black text-white">
                        {item.label[language]}
                        <ChevronDown size={20} className={`transition-transform ${openDropdown === item.label.en ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === item.label.en && (
                        <div className="space-y-2 py-3 pl-3">
                          {item.subItems.map((sub) => (
                            <NavLink key={sub.path} to={sub.path} className="block rounded-lg px-3 py-3 text-lg font-bold text-white/70 hover:bg-white/10 hover:text-white" onClick={closeMenu}>
                              {sub.label[language]}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <NavLink to={item.path} className={({ isActive }) => `block min-h-12 rounded-lg px-2 py-3 text-xl font-black ${isActive ? 'text-emerald-200' : 'text-white'}`} onClick={closeMenu}>
                      {item.label[language]}
                    </NavLink>
                  )}
                </div>
              ))}

              <button type="button" onClick={requestDemo} className="request-demo-link mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-white px-5 py-3 font-black text-red-900">
                {t.nav.requestDemo}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
