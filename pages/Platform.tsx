import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Boxes, CircuitBoard, Radar, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import ParticleField from '../components/ParticleField';
import SectionHeading from '../components/SectionHeading';
import SurfaceCard from '../components/SurfaceCard';
import { useLanguage } from '../contexts/LanguageContext';

const Platform: React.FC = () => {
  const { language } = useLanguage();

  const copy = {
    en: {
      eyebrow: 'Platform',
      title: 'One orchestration layer for modern cooperative operations.',
      description:
        'KOF connects accounting, lending, membership, treasury, and partner distribution into one coordinated digital environment.',
      flows: [
        {
          title: 'Operational Core',
          description: 'A shared data backbone for finance, members, and loan workflows.',
        },
        {
          title: 'Partner Network',
          description: 'A commercial layer for recurring programs, smart partner growth, and service expansion.',
        },
        {
          title: 'Member Surface',
          description: 'Cleaner self-service touchpoints for members, officers, and finance teams.',
        },
      ],
      architectureTitle: 'Designed like a coordinated control surface.',
      architectureBody:
        'Instead of treating each system as a separate app, the platform frames them as connected modules with shared data and predictable movement across the organization.',
      pillars: ['Shared records and reporting', 'Controlled compliance posture', 'Faster operator workflows', 'Premium member-facing touchpoints'],
      cta: 'See Product Modules',
    },
    ms: {
      eyebrow: 'Platform',
      title: 'Satu lapisan orkestrasi untuk operasi koperasi moden.',
      description:
        'KOF menghubungkan perakaunan, pinjaman, keanggotaan, treasury, dan rangkaian rakan niaga dalam satu persekitaran digital yang tersusun.',
      flows: [
        {
          title: 'Teras Operasi',
          description: 'Tulang belakang data bersama untuk kewangan, ahli, dan aliran kerja pinjaman.',
        },
        {
          title: 'Rangkaian Rakan',
          description: 'Lapisan komersial untuk program berulang, pertumbuhan smart partner, dan peluasan perkhidmatan.',
        },
        {
          title: 'Permukaan Ahli',
          description: 'Titik sentuhan kendiri yang lebih kemas untuk ahli, pegawai, dan pasukan kewangan.',
        },
      ],
      architectureTitle: 'Direka seperti permukaan kawalan yang terselaras.',
      architectureBody:
        'Bukan melihat setiap sistem sebagai aplikasi berasingan, platform ini meletakkan semuanya sebagai modul yang saling terhubung dengan data bersama dan pergerakan kerja yang lebih jelas.',
      pillars: ['Rekod dan laporan bersama', 'Pematuhan yang lebih terkawal', 'Aliran kerja operator lebih pantas', 'Titik sentuhan ahli yang lebih premium'],
      cta: 'Lihat Modul Produk',
    },
  }[language];

  const icons = [CircuitBoard, Boxes, Radar];

  return (
    <div className="relative overflow-hidden pt-32">
      <section className="section-shell relative px-4 pb-20 sm:px-6 lg:px-8">
        <div className="ambient-orb left-[8%] top-12 h-48 w-48 bg-violet-500/20" />
        <div className="ambient-orb right-[10%] top-20 h-56 w-56 bg-white/10" />
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.02]">
          <div className="relative min-h-[540px] overflow-hidden px-6 py-16 md:px-10 lg:px-14 lg:py-20">
            <ParticleField className="absolute inset-0 h-full w-full opacity-70" density={12000} interactive={false} />
            <div className="relative z-10 max-w-3xl">
              <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
            </div>

            <div className="relative z-10 mt-14 grid gap-6 lg:grid-cols-3">
              {copy.flows.map((flow, index) => {
                const Icon = icons[index];

                return (
                  <motion.div
                    key={flow.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <SurfaceCard className="h-full p-7">
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/5 text-violet-200">
                        <Icon size={22} />
                      </div>
                      <h3 className="text-2xl font-semibold text-white">{flow.title}</h3>
                      <p className="mt-4 leading-7 text-white/62">{flow.description}</p>
                    </SurfaceCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <SurfaceCard strong className="p-8 md:p-10">
            <SectionHeading title={copy.architectureTitle} description={copy.architectureBody} />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {copy.pillars.map((pillar) => (
                <div key={pillar} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 text-white/76">
                  {pillar}
                </div>
              ))}
            </div>
          </SurfaceCard>

          <SurfaceCard className="flex flex-col justify-between p-8 md:p-10">
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-300/10 text-violet-200">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-3xl font-semibold text-white">System Confidence</h3>
              <p className="mt-4 leading-7 text-white/62">
                {language === 'ms'
                  ? 'Bina keyakinan operasi dengan struktur yang jelas, bukannya menambah sistem yang berasingan.'
                  : 'Build operator confidence through a clearer structure rather than piling on disconnected systems.'}
              </p>
            </div>

            <Link to="/products" className="primary-button mt-10 w-fit">
              <span>{copy.cta}</span>
              <ArrowRight size={18} />
            </Link>
          </SurfaceCard>
        </div>
      </section>
    </div>
  );
};

export default Platform;
