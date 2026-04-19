import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { publicAsset } from '../utils/assets';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleLinkClick = (path: string) => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      <nav
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        {/* Liquid Glass Container */}
        <div
          className="relative px-6 py-3 flex justify-between items-center w-full max-w-[90rem] rounded-xl pointer-events-auto transition-all duration-300"
          style={{
            background: "rgba(30, 41, 59, 0.8)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid rgba(0, 242, 255, 0.2)",
            boxShadow: "0 0 32px 0 rgba(0, 242, 255, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
          }}
        >
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer relative z-10" onClick={() => navigate('/')}>
            <div className="flex flex-col items-start gap-0.5">
              <img src={publicAsset('/images/kof-logo.png')} alt="KOF Logo" className="h-9 w-auto object-contain brightness-0 invert" />
              <span className="text-[8px] md:text-[10px] font-bold text-sky-500 tracking-wider uppercase leading-none opacity-90">
                Koperasi One Fintech Berhad
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2 items-center relative z-10">
            {NAV_ITEMS.map((item) => (
              <div key={item.label.en} className="relative group">
                {item.subItems ? (
                  <button className="flex items-center space-x-1 text-white/90 hover:text-white font-bold transition-all px-4 py-2 rounded-full hover:bg-white/10 whitespace-nowrap">
                    <span>{item.label[language]}</span>
                    <ChevronDown size={14} strokeWidth={3} />
                  </button>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap tracking-wider ${isActive ? 'text-sky-500 bg-sky-500/10 border border-sky-500/30 shadow-sm ' : 'text-white/70 hover:text-sky-500 hover:bg-white/5'}`
                    }
                  >
                    {item.label[language]}
                  </NavLink>
                )}

                {/* Dropdown - Liquid Style */}
                {item.subItems && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl shadow-black/40"></div>
                    <div className="relative z-10">
                      {item.subItems.map(sub => (
                        <NavLink
                          key={sub.path}
                          to={sub.path}
                          className="block px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white rounded-xl transition-all hover:shadow-sm hover:scale-105"
                          onClick={() => handleLinkClick(sub.path)}
                        >
                          {sub.label[language]}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4 relative z-10">
            <button
              onClick={toggleLanguage}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold hover:bg-white/10 transition-all border border-white/20"
            >
              <span className="text-xs uppercase">{language}</span>
            </button>
            <button
              onClick={() => window.open('https://wa.me/601159793168?text=Hi,%20I%20would%20like%20to%20request%20a%20demo.', '_blank')}
              className="bg-sky-600 text-white px-7 py-3 rounded-xl font-bold text-sm tracking-tighter hover:bg-white transition-all shadow-lg "
            >
              <span className="relative z-10">{t.nav.requestDemo}</span>
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center gap-2 relative z-10">
            <button
              onClick={toggleLanguage}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/10"
            >
              <span className="text-xs font-bold uppercase">{language}</span>
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white hover:bg-white/10 rounded-full transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav >

      {/* The Cyber Progress Line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-kof-accent via-kof-purple to-kof-accent origin-left z-50 shadow-lg"
        style={{ scaleX }}
      />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-3xl pt-32 px-6 md:hidden"
          >
            <div className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <div key={item.label.en} className="border-b border-white/10 pb-4">
                  {item.subItems ? (
                    <div>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label.en ? null : item.label.en)}
                        className="flex items-center justify-between w-full text-xl font-bold text-white"
                      >
                        {item.label[language]}
                        <ChevronDown size={20} className={`transform transition-transform ${openDropdown === item.label.en ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === item.label.en && (
                        <div className="mt-4 space-y-3 pl-4">
                          {item.subItems.map(sub => (
                            <NavLink
                              key={sub.path}
                              to={sub.path}
                              className="block text-lg text-white/70 font-medium hover:text-white"
                              onClick={() => handleLinkClick(sub.path)}
                            >
                              {sub.label[language]}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => `block text-xl font-bold ${isActive ? 'text-red-400' : 'text-white'}`}
                      onClick={() => handleLinkClick(item.path)}
                    >
                      {item.label[language]}
                    </NavLink>
                  )}
                </div>
              ))}
              <div className="pt-8">
                <button
                  onClick={() => { window.open('https://wa.me/601159793168?text=Hi,%20I%20would%20like%20to%20request%20a%20demo.', '_blank'); setIsOpen(false); }}
                  className="w-full bg-white text-red-900 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-black/20"
                >
                  {t.nav.requestDemo}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
