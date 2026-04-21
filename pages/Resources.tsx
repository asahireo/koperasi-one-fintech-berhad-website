import React from 'react';
import { Download, FileText, Sparkles } from 'lucide-react';
import { publicAsset } from '../utils/assets';
import { useLanguage } from '../contexts/LanguageContext';
import SectionHeading from '../components/SectionHeading';
import SurfaceCard from '../components/SurfaceCard';

const RESOURCES = [
  { name: 'Company Profile', file: 'company_profile.pdf', category: 'Company' },
  { name: 'KoSMART Guide', file: 'kosmart_guide.pdf', category: 'Product' },
  { name: 'ICMIS Overview', file: 'icmis_overview.pdf', category: 'Product' },
  { name: 'iLMS + SPGA Integration Guide', file: 'ilms_spga_guide.pdf', category: 'Operations' },
  { name: 'SKM GP23 Documents', file: 'skm_gp23_documents.pdf', category: 'Compliance' },
  { name: 'iAccount Brochure', file: 'iaccount_brochure.pdf', category: 'Product' },
  { name: 'iMembership Brochure', file: 'imembership_brochure.pdf', category: 'Product' },
  { name: 'iLMS Brochure', file: 'ilms_brochure.pdf', category: 'Product' },
];

const Resources: React.FC = () => {
  const { language } = useLanguage();
  const copy = {
    en: {
      eyebrow: 'Resources',
      title: 'A curated library for product, company, and compliance material.',
      description: 'Use the resource library to review brochures, guides, and ecosystem documents without digging through a flat download wall.',
      featured: 'Featured Resource',
      featuredBody: 'Start with the company profile for the clearest high-level introduction to the KOF ecosystem.',
      download: 'Open PDF',
      faqTitle: 'Need a guided walkthrough instead?',
      faqBody: 'Contact the team for a demo-oriented explanation of the most relevant documents.',
    },
    ms: {
      eyebrow: 'Sumber',
      title: 'Perpustakaan tersusun untuk bahan produk, syarikat, dan pematuhan.',
      description: 'Gunakan perpustakaan sumber ini untuk meneliti brosur, panduan, dan dokumen ekosistem tanpa menyelongkar senarai muat turun yang rata.',
      featured: 'Sumber Utama',
      featuredBody: 'Mulakan dengan profil syarikat untuk pengenalan paling jelas kepada ekosistem KOF.',
      download: 'Buka PDF',
      faqTitle: 'Perlukan penerangan berpandu?',
      faqBody: 'Hubungi pasukan kami untuk penerangan berasaskan demo tentang dokumen yang paling relevan.',
    },
  }[language];

  const featuredResource = RESOURCES[0];

  return (
    <div className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <SurfaceCard strong className="p-8 md:p-10">
            <div className="flex items-center gap-3 text-violet-200">
              <Sparkles size={18} />
              <span className="text-xs uppercase tracking-[0.24em]">{copy.featured}</span>
            </div>
            <h2 className="mt-6 text-4xl font-semibold text-white">{featuredResource.name}</h2>
            <p className="mt-4 max-w-xl leading-7 text-white/64">{copy.featuredBody}</p>
            <a
              href={publicAsset(`/pdfs/${featuredResource.file}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button mt-8 w-fit"
            >
              <span>{copy.download}</span>
              <Download size={18} />
            </a>
          </SurfaceCard>

          <div className="grid gap-4 sm:grid-cols-2">
            {RESOURCES.map((resource) => (
              <SurfaceCard key={resource.file} className="flex h-full flex-col justify-between p-6">
                <div>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/5 text-violet-200">
                    <FileText size={20} />
                  </div>
                  <div className="text-xs uppercase tracking-[0.22em] text-white/42">{resource.category}</div>
                  <h3 className="mt-3 text-xl font-semibold text-white">{resource.name}</h3>
                </div>
                <a
                  href={publicAsset(`/pdfs/${resource.file}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/82"
                >
                  <span>{copy.download}</span>
                  <Download size={16} />
                </a>
              </SurfaceCard>
            ))}
          </div>
        </div>

        <SurfaceCard className="mt-10 p-8 md:p-10">
          <h3 className="text-3xl font-semibold text-white">{copy.faqTitle}</h3>
          <p className="mt-4 max-w-2xl leading-7 text-white/62">{copy.faqBody}</p>
        </SurfaceCard>
      </div>
    </div>
  );
};

export default Resources;
