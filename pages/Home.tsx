import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Orbit, ShieldCheck, Sparkles, Workflow } from 'lucide-react';
import { motion } from 'framer-motion';
import ParticleField from '../components/ParticleField';
import ProductShowcase from '../components/ProductShowcase';
import SectionHeading from '../components/SectionHeading';
import SurfaceCard from '../components/SurfaceCard';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { language } = useLanguage();
  const copy = {
    en: {
      eyebrow: 'AetherFlow Ecosystem',
      title: 'A futuristic operating layer for cooperative finance.',
      description:
        'KOF reframes accounting, member management, lending, and partner programs as one connected digital environment instead of a set of disconnected tools.',
      primaryCta: 'Explore The Platform',
      secondaryCta: 'View Products',
      trustTitle: 'Built with cooperative credibility and system discipline.',
      trustBody:
        'Supported by experienced digital operators and shaped around real cooperative workflows, not just generic SaaS dashboards.',
      stats: [
        ['5', 'Integrated products'],
        ['1', 'Operating surface'],
        ['24/7', 'System visibility'],
      ],
      pillars: [
        {
          title: 'Structured Modules',
          body: 'Each system is designed to move as part of the platform, not as an isolated silo.',
        },
        {
          title: 'Clear Data Movement',
          body: 'Membership, lending, and finance are framed with more predictable operational flow.',
        },
        {
          title: 'Premium Interaction',
          body: 'User and operator touchpoints feel alive, controlled, and premium.',
        },
      ],
      productsTitle: 'Core systems that build the ecosystem.',
      productsBody: 'Go directly into the modules that matter most, or see how they are orchestrated as one platform.',
    },
    ms: {
      eyebrow: 'Ekosistem AetherFlow',
      title: 'Lapisan operasi futuristik untuk kewangan koperasi.',
      description:
        'KOF membingkaikan perakaunan, pengurusan ahli, pinjaman, dan program rakan kongsi sebagai satu persekitaran digital yang saling terhubung, bukan set alat yang berpecah.',
      primaryCta: 'Terokai Platform',
      secondaryCta: 'Lihat Produk',
      trustTitle: 'Dibina dengan kredibiliti koperasi dan disiplin sistem.',
      trustBody:
        'Disokong oleh operator digital berpengalaman dan dibentuk mengikut aliran kerja koperasi sebenar, bukan sekadar papan pemuka SaaS generik.',
      stats: [
        ['5', 'Produk bersepadu'],
        ['1', 'Permukaan operasi'],
        ['24/7', 'Pandangan sistem'],
      ],
      pillars: [
        {
          title: 'Modul Tersusun',
          body: 'Setiap sistem direka untuk bergerak sebagai sebahagian daripada platform, bukan silo yang terpisah.',
        },
        {
          title: 'Aliran Data Jelas',
          body: 'Pengurusan ahli, pinjaman, dan kewangan dibingkaikan dengan aliran operasi yang lebih boleh dijangka.',
        },
        {
          title: 'Interaksi Premium',
          body: 'Titik sentuhan pengguna dan pentadbir kelihatan hidup, kemas, dan meyakinkan.',
        },
      ],
      productsTitle: 'Sistem teras yang membina ekosistem.',
      productsBody: 'Masuk ke modul yang paling relevan, atau lihat bagaimana semuanya diorkestrasi sebagai satu platform.',
    },
  }[language];

  const pillarIcons = [Workflow, Orbit, Sparkles];

  return (
    <div className="overflow-hidden">
      <section className="relative min-h-screen overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <ParticleField className="absolute inset-0 h-full w-full opacity-85" density={11000} />
        <div className="ambient-orb left-[4%] top-20 h-60 w-60 bg-violet-500/20" />
        <div className="ambient-orb right-[6%] top-28 h-72 w-72 bg-white/10" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
            <span className="eyebrow-label">{copy.eyebrow}</span>
            <h1 className="mt-8 max-w-4xl text-6xl font-semibold tracking-[-0.08em] text-white md:text-7xl lg:text-[5.7rem]">
              {copy.title}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
              {copy.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/platform" className="primary-button">
                <span>{copy.primaryCta}</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/products" className="secondary-button">
                <span>{copy.secondaryCta}</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-16 grid gap-5 sm:grid-cols-3">
              {copy.stats.map(([value, label]) => (
                <SurfaceCard key={label} className="p-5">
                  <div className="text-3xl font-semibold text-white">{value}</div>
                  <div className="mt-2 text-sm uppercase tracking-[0.18em] text-white/46">{label}</div>
                </SurfaceCard>
              ))}
            </div>
          </motion.div>

          <SurfaceCard strong className="relative overflow-hidden p-8 md:p-10">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/5 text-violet-200">
              <ShieldCheck size={24} />
            </div>
            <h2 className="max-w-md text-4xl font-semibold tracking-[-0.06em] text-white">{copy.trustTitle}</h2>
            <p className="mt-5 max-w-lg leading-7 text-white/62">{copy.trustBody}</p>
            <div className="mt-12 space-y-4">
              {copy.pillars.map((pillar, index) => {
                const Icon = pillarIcons[index];

                return (
                  <div key={pillar.title} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                    <div className="flex items-center gap-3 text-white">
                      <Icon size={18} className="text-violet-200" />
                      <h3 className="font-medium">{pillar.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-white/60">{pillar.body}</p>
                  </div>
                );
              })}
            </div>
          </SurfaceCard>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title={copy.productsTitle} description={copy.productsBody} />
          <div className="mt-14">
            <ProductShowcase compact />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
