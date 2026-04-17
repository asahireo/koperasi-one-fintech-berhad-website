import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-[#050510]/80 text-white/70 pt-20 pb-12 border-t border-sky-500/20 backdrop-blur-md relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-kof-accent/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-6">
            <div className="flex flex-col items-start leading-none">
              <img src="/images/kof-logo.png" alt="KOF Logo" className="h-14 w-auto object-contain brightness-0 invert" />
              <span className="text-[10px] font-bold text-sky-500 mt-2 tracking-widest uppercase">
                AI Fintech ecosystem
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed font-rajdhani">
              {t.footer.desc}
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all duration-300 border border-white/10 hover:border-sky-500 group"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all duration-300 border border-white/10 hover:border-kof-purple group"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-sm font-bold mb-6 tracking-widest uppercase">{t.footer.quickLinks}</h3>
            <ul className="space-y-3 text-sm font-rajdhani font-medium">
              <li><NavLink to="/" className="hover:text-sky-500 transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-sky-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-sky-500 transition-colors">About</NavLink></li>
              <li><NavLink to="/solutions" className="hover:text-sky-500 transition-colors">Solutions</NavLink></li>
              <li><NavLink to="/smart-partner" className="hover:text-sky-500 transition-colors">Smart Partner</NavLink></li>
              <li><NavLink to="/resources" className="hover:text-sky-500 transition-colors">Resources</NavLink></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white text-sm font-bold mb-6 tracking-widest uppercase">{t.footer.systems}</h3>
            <ul className="space-y-3 text-sm font-rajdhani font-medium">
              <li><NavLink to="/solutions/icmis" className="hover:text-sky-500 transition-colors">ICMIS AI</NavLink></li>
              <li><NavLink to="/solutions/kosmart" className="hover:text-sky-500 transition-colors">KoSMART Gateway</NavLink></li>
              <li><NavLink to="/solutions/iaccount" className="hover:text-sky-500 transition-colors">iAccount Core</NavLink></li>
              <li><NavLink to="/solutions/imembership" className="hover:text-sky-500 transition-colors">iMembership Hub</NavLink></li>
              <li><NavLink to="/solutions/ilms" className="hover:text-sky-500 transition-colors">iLMS Protocol</NavLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-bold mb-6 tracking-widest uppercase">{t.footer.contact}</h3>
            <ul className="space-y-4 text-sm font-rajdhani">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 text-sky-500" />
                <span className="text-white/60">Wisma LMS, No. 6 Jalan Abd. Rahman Idris<br />Off Jalan Raja Muda Aziz, 50300<br />Kuala Lumpur, Malaysia.</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-sky-500" />
                <span className="text-white/60">+60 3-9213 0688</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-sky-500" />
                <span className="text-white/60">koperasionefintech.manager@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="mt-1 w-5 h-5 rounded-xl bg-green-500/20 flex items-center justify-center border border-green-500/30">
                  <Phone size={12} className="text-green-400" />
                </div>
                <div className="flex flex-col text-white/60">
                  <span><a href="https://wa.me/601159793168" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition-colors">+60 11-5979 3168</a></span>
                  <span><a href="https://wa.me/60193742440" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition-colors">+60 19-374 2440</a></span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] font-medium text-white/30 tracking-wider">
            &copy; {new Date().getFullYear()} KOPERASI ONE FINTECH BERHAD | AUTHENTIC AI FINANCIAL PROTOCOL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
