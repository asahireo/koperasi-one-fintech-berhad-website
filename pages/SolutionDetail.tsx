import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { SOLUTIONS_DATA } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import SectionHeading from '../components/SectionHeading';
import SurfaceCard from '../components/SurfaceCard';
import { publicAsset } from '../utils/assets';

const SolutionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const data = id ? SOLUTIONS_DATA[id] : null;

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <SurfaceCard className="p-10 text-center">
          <h2 className="text-3xl font-semibold text-white">{language === 'ms' ? 'Produk tidak ditemui' : 'Product not found'}</h2>
          <Link to="/products" className="primary-button mt-8">
            <span>{language === 'ms' ? 'Kembali ke Produk' : 'Back to Products'}</span>
          </Link>
        </SurfaceCard>
      </div>
    );
  }

  return (
    <div className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <button
          type="button"
          onClick={() => navigate('/products')}
          className="mb-8 inline-flex items-center gap-2 text-sm text-white/64 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          <span>{language === 'ms' ? 'Kembali ke Produk' : 'Back to Products'}</span>
        </button>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.92fr]">
          <div>
            <SectionHeading
              eyebrow={data.title}
              title={data.detailTitle[language]}
              description={data.detailDescription[language]}
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {data.detailModules[language].map((item) => (
                <SurfaceCard key={item} className="p-5">
                  <div className="flex items-start gap-3 text-white/78">
                    <Check size={18} className="mt-1 shrink-0 text-violet-200" />
                    <span>{item}</span>
                  </div>
                </SurfaceCard>
              ))}
            </div>

            {data.detailBenefits ? (
              <SurfaceCard className="mt-6 p-8">
                <h3 className="text-2xl font-semibold text-white">{language === 'ms' ? 'Kelebihan' : 'Benefits'}</h3>
                <ul className="mt-6 space-y-3">
                  {data.detailBenefits[language].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-white/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-300" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </SurfaceCard>
            ) : null}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="space-y-6"
          >
            <SurfaceCard strong className="p-8 md:p-10">
              <div className="text-xs uppercase tracking-[0.24em] text-violet-200/78">
                {language === 'ms' ? 'Lapisan Produk' : 'Product Layer'}
              </div>
              <h3 className="mt-4 text-3xl font-semibold text-white">{data.title}</h3>
              <p className="mt-4 leading-7 text-white/62">
                {language === 'ms'
                  ? 'Halaman ini memfokuskan cara modul ini berfungsi di dalam ekosistem KOF serta laluan operasi yang lebih jelas untuk pasukan koperasi.'
                  : 'This page focuses the module inside the broader KOF ecosystem and gives cooperative teams a clearer operational path.'}
              </p>

              <div className="mt-8 space-y-3">
                <Link to="/contact" className="primary-button w-full justify-center">
                  <span>{language === 'ms' ? 'Minta Demo' : 'Request Demo'}</span>
                  <ArrowRight size={18} />
                </Link>
                {data.brochureFile ? (
                  <a
                    href={publicAsset(`/pdfs/${data.brochureFile}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary-button w-full justify-center"
                  >
                    <span>{language === 'ms' ? 'Buka Brosur' : 'Open Brochure'}</span>
                    <Download size={18} />
                  </a>
                ) : null}
              </div>
            </SurfaceCard>

            <SurfaceCard className="p-8">
              <div className="text-xs uppercase tracking-[0.24em] text-white/42">
                {language === 'ms' ? 'Sorotan Ciri' : 'Feature Signal'}
              </div>
              <div className="mt-6 space-y-4">
                {data.features[language].map((feature) => (
                  <div key={feature} className="rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-4 text-white/74">
                    {feature}
                  </div>
                ))}
              </div>
            </SurfaceCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SolutionDetail;
