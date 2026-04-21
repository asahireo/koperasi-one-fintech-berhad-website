import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Handshake, Landmark, Sparkles, TrendingUp } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SurfaceCard from '../components/SurfaceCard';
import { useLanguage } from '../contexts/LanguageContext';

const Company: React.FC = () => {
  const { language } = useLanguage();

  const copy = {
    en: {
      eyebrow: 'Company',
      title: 'Built to modernize cooperative finance with stronger systems and clearer trust.',
      description:
        'KOF combines cooperative mission, digital operations, and platform thinking to help organizations move from fragmented manual processes to a more coordinated operating model.',
      mission: 'Deliver a digital operating backbone that makes cooperative services more transparent, structured, and scalable.',
      vision: 'Become the trusted ecosystem layer for Malaysian cooperative modernization.',
      partnerTitle: 'Smart partner economics still matter.',
      partnerBody:
        'Partnership and recurring program models remain part of the company story, but they now sit inside a broader ecosystem narrative instead of functioning as a detached campaign page.',
      values: ['Cooperative-first system design', 'Operational clarity for finance teams', 'Premium member experience', 'Credible partner growth pathways'],
      cta: 'Start A Conversation',
    },
    ms: {
      eyebrow: 'Syarikat',
      title: 'Dibina untuk memodenkan kewangan koperasi dengan sistem yang lebih kukuh dan kepercayaan yang lebih jelas.',
      description:
        'KOF menggabungkan misi koperasi, operasi digital, dan pemikiran platform untuk membantu organisasi bergerak daripada proses manual yang berpecah kepada model operasi yang lebih terselaras.',
      mission: 'Menyediakan tulang belakang operasi digital yang menjadikan perkhidmatan koperasi lebih telus, tersusun, dan boleh berkembang.',
      vision: 'Menjadi lapisan ekosistem yang dipercayai untuk pemodenan koperasi di Malaysia.',
      partnerTitle: 'Ekonomi smart partner masih penting.',
      partnerBody:
        'Model perkongsian dan program berulang kekal sebahagian daripada cerita syarikat, tetapi kini berada dalam naratif ekosistem yang lebih luas dan bukan lagi sebagai halaman kempen yang terasing.',
      values: ['Reka bentuk sistem berasaskan koperasi', 'Kejelasan operasi untuk pasukan kewangan', 'Pengalaman ahli yang lebih premium', 'Laluan pertumbuhan rakan kongsi yang lebih meyakinkan'],
      cta: 'Mulakan Perbualan',
    },
  }[language];

  const valueIcons = [Landmark, Sparkles, Handshake, TrendingUp];

  return (
    <div className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <SurfaceCard strong className="p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.24em] text-violet-200/80">
              {language === 'ms' ? 'Misi' : 'Mission'}
            </p>
            <p className="mt-5 text-3xl font-semibold leading-tight text-white">{copy.mission}</p>

            <p className="mt-10 text-sm uppercase tracking-[0.24em] text-violet-200/80">
              {language === 'ms' ? 'Visi' : 'Vision'}
            </p>
            <p className="mt-5 text-3xl font-semibold leading-tight text-white">{copy.vision}</p>
          </SurfaceCard>

          <SurfaceCard className="p-8 md:p-10">
            <h3 className="text-3xl font-semibold text-white">{copy.partnerTitle}</h3>
            <p className="mt-4 leading-7 text-white/64">{copy.partnerBody}</p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {copy.values.map((value, index) => {
                const Icon = valueIcons[index];

                return (
                  <div key={value} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                    <Icon size={18} className="text-violet-200" />
                    <p className="mt-4 text-sm leading-6 text-white/76">{value}</p>
                  </div>
                );
              })}
            </div>

            <Link to="/contact" className="primary-button mt-10 w-fit">
              <span>{copy.cta}</span>
              <ArrowRight size={18} />
            </Link>
          </SurfaceCard>
        </div>
      </div>
    </div>
  );
};

export default Company;
