import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { SOLUTIONS_DATA } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { publicAsset } from '../utils/assets';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const solutions = Object.values(SOLUTIONS_DATA);

  return (
    <footer className="relative overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(20,184,166,0.2),transparent_26%),radial-gradient(circle_at_86%_18%,rgba(185,28,28,0.24),transparent_30%)]" />
      <div className="footer-modern-grid relative z-10 mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.15fr_0.75fr_0.85fr_1.25fr] lg:px-8">
        <div>
          <NavLink to="/" className="inline-flex rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300" aria-label="KOF homepage">
            <div>
              <img src={publicAsset('/images/kof-logo.png')} alt="KOF Logo" className="h-14 w-auto object-contain brightness-0 invert" />
              <p className="mt-3 text-xs font-black uppercase tracking-[0.24em] text-emerald-200">Cooperative fintech ecosystem</p>
            </div>
          </NavLink>
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/62">{t.footer.desc}</p>
          <div className="mt-6 flex gap-3">
            <a href="#" aria-label="KOF Facebook" className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/12 bg-white/6 text-white/72 transition hover:bg-white hover:text-red-900"><Facebook size={18} /></a>
            <a href="#" aria-label="KOF LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/12 bg-white/6 text-white/72 transition hover:bg-white hover:text-red-900"><Linkedin size={18} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">{t.footer.quickLinks}</h3>
          <ul className="mt-5 space-y-3 text-sm font-bold text-white/62">
            <li><FooterLink to="/">Home</FooterLink></li>
            <li><FooterLink to="/about">About</FooterLink></li>
            <li><FooterLink to="/solutions">Solutions</FooterLink></li>
            <li><FooterLink to="/smart-partner">Smart Partner</FooterLink></li>
            <li><FooterLink to="/resources">Resources</FooterLink></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">{t.footer.systems}</h3>
          <ul className="mt-5 space-y-3 text-sm font-bold text-white/62">
            {solutions.map((solution) => (
              <li key={solution.id}><FooterLink to={solution.link}>{solution.title}</FooterLink></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">{t.footer.contact}</h3>
          <ul className="mt-5 space-y-4 text-sm text-white/66">
            <li className="flex gap-3"><MapPin size={18} className="mt-1 shrink-0 text-emerald-200" /><span>Wisma LMS, No. 6 Jalan Abd. Rahman Idris<br />Off Jalan Raja Muda Aziz, 50300<br />Kuala Lumpur, Malaysia.</span></li>
            <li className="flex items-center gap-3"><Phone size={18} className="shrink-0 text-emerald-200" /><a href="tel:+60392130688" className="transition hover:text-white">+60 3-9213 0688</a></li>
            <li className="flex items-center gap-3"><Mail size={18} className="shrink-0 text-emerald-200" /><a href="mailto:koperasionefintech.manager@gmail.com" className="break-all transition hover:text-white">koperasionefintech.manager@gmail.com</a></li>
            <li className="flex gap-3"><Phone size={18} className="mt-1 shrink-0 text-emerald-200" /><span className="flex flex-col gap-1"><a href="https://wa.me/601159793168" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">+60 11-5979 3168</a><a href="https://wa.me/60193742440" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">+60 19-374 2440</a></span></li>
          </ul>
        </div>
      </div>
      <div className="relative z-10 border-t border-white/8 px-4 py-6 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/38">&copy; {new Date().getFullYear()} Koperasi One Fintech Berhad. Authentic cooperative financial technology.</p>
      </div>
    </footer>
  );
};

type FooterLinkProps = { to: string; children: React.ReactNode };

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => (
  <NavLink to={to} className="inline-flex rounded-lg transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300">
    {children}
  </NavLink>
);

export default Footer;
