import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { SOLUTIONS_DATA } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { publicAsset } from '../utils/assets';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const solutions = Object.values(SOLUTIONS_DATA);
  const copy = {
    en: {
      desc: 'A cooperative fintech ecosystem designed to turn fragmented back-office operations into one coordinated digital surface.',
      quickLinks: 'Navigate',
      systems: 'Products',
      contact: 'Contact',
      ctaTitle: 'Bring the ecosystem into focus.',
      ctaBody: 'Talk to KOF about platform modernization, product rollout, or a partner-led digital program.',
      cta: 'Request Demo',
      rights: 'All rights reserved.',
    },
    ms: {
      desc: 'Ekosistem fintech koperasi yang direka untuk menukar operasi belakang tabir yang berpecah kepada satu permukaan digital yang lebih terselaras.',
      quickLinks: 'Navigasi',
      systems: 'Produk',
      contact: 'Hubungi',
      ctaTitle: 'Bawa ekosistem anda ke dalam fokus.',
      ctaBody: 'Berbincang dengan KOF tentang pemodenan platform, pelaksanaan produk, atau program digital berasaskan rakan kongsi.',
      cta: 'Minta Demo',
      rights: 'Hak cipta terpelihara.',
    },
  }[language];

  return (
    <footer className="relative overflow-hidden px-4 pb-8 pt-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-white/10 bg-[rgba(9,11,17,0.86)] shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(191,128,255,0.16),transparent_26%),radial-gradient(circle_at_86%_18%,rgba(255,255,255,0.12),transparent_30%)]" />
      <div className="relative z-10 grid gap-10 border-b border-white/10 px-6 py-12 md:grid-cols-[1.2fr_0.8fr] md:px-10">
        <div>
          <p className="text-xs uppercase tracking-[0.26em] text-violet-200/72">Final Layer</p>
          <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.06em] text-white">{copy.ctaTitle}</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/64">{copy.ctaBody}</p>
          <NavLink to="/contact" className="primary-button mt-8 w-fit">
            <span>{copy.cta}</span>
            <ArrowRight size={18} />
          </NavLink>
        </div>
      </div>

      <div className="footer-modern-grid relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-[1.15fr_0.75fr_0.85fr_1.25fr] lg:px-10">
        <div>
          <NavLink to="/" className="inline-flex rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300" aria-label="KOF homepage">
            <div>
              <img src={publicAsset('/images/kof-logo.png')} alt="KOF Logo" className="h-14 w-auto object-contain brightness-0 invert" />
              <p className="mt-3 text-xs font-black uppercase tracking-[0.24em] text-violet-200">Cooperative fintech ecosystem</p>
            </div>
          </NavLink>
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/62">{copy.desc}</p>
          <div className="mt-6 flex gap-3">
            <a href="#" aria-label="KOF Facebook" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white/72 transition hover:bg-white hover:text-slate-950"><Facebook size={18} /></a>
            <a href="#" aria-label="KOF LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white/72 transition hover:bg-white hover:text-slate-950"><Linkedin size={18} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">{copy.quickLinks}</h3>
          <ul className="mt-5 space-y-3 text-sm font-bold text-white/62">
            <li><FooterLink to="/">Home</FooterLink></li>
            <li><FooterLink to="/platform">Platform</FooterLink></li>
            <li><FooterLink to="/products">Products</FooterLink></li>
            <li><FooterLink to="/company">Company</FooterLink></li>
            <li><FooterLink to="/resources">Resources</FooterLink></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">{copy.systems}</h3>
          <ul className="mt-5 space-y-3 text-sm font-bold text-white/62">
            {solutions.map((solution) => (
              <li key={solution.id}><FooterLink to={solution.link}>{solution.title}</FooterLink></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">{copy.contact}</h3>
          <ul className="mt-5 space-y-4 text-sm text-white/66">
            <li className="flex gap-3"><MapPin size={18} className="mt-1 shrink-0 text-violet-200" /><span>Wisma LMS, No. 6 Jalan Abd. Rahman Idris<br />Off Jalan Raja Muda Aziz, 50300<br />Kuala Lumpur, Malaysia.</span></li>
            <li className="flex items-center gap-3"><Phone size={18} className="shrink-0 text-violet-200" /><a href="tel:+60392130688" className="transition hover:text-white">+60 3-9213 0688</a></li>
            <li className="flex items-center gap-3"><Mail size={18} className="shrink-0 text-violet-200" /><a href="mailto:koperasionefintech.manager@gmail.com" className="break-all transition hover:text-white">koperasionefintech.manager@gmail.com</a></li>
            <li className="flex gap-3"><Phone size={18} className="mt-1 shrink-0 text-violet-200" /><span className="flex flex-col gap-1"><a href="https://wa.me/601159793168" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">+60 11-5979 3168</a><a href="https://wa.me/60193742440" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">+60 19-374 2440</a></span></li>
          </ul>
        </div>
      </div>
      <div className="relative z-10 border-t border-white/8 px-4 py-6 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/38">&copy; {new Date().getFullYear()} Koperasi One Fintech Berhad. {copy.rights}</p>
      </div>
      </div>
    </footer>
  );
};

type FooterLinkProps = { to: string; children: React.ReactNode };

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => (
  <NavLink to={to} className="inline-flex rounded-lg transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300">
    {children}
  </NavLink>
);

export default Footer;
