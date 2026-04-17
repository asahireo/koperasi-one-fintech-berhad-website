import React from 'react';
import { FileText, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const RESOURCES = [
  { name: "Company Profile", file: "company_profile.pdf" },
  { name: "KoSMART Guide", file: "kosmart_guide.pdf" },
  { name: "ICMIS Overview", file: "icmis_overview.pdf" },
  { name: "iLMS + SPGA Integration Guide", file: "ilms_spga_guide.pdf" },
  { name: "SKM GP23 Documents", file: "skm_gp23_documents.pdf" },
  { name: "iAccount Brochure", file: "iaccount_brochure.pdf" },
  { name: "iMembership Brochure", file: "imembership_brochure.pdf" },
  { name: "iLMS Brochure", file: "ilms_brochure.pdf" }
];

const Resources: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen pt-20 pb-20 relative overflow-hidden">
      {/* Background Blobs Removed */}

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 pt-20 relative">
          {/* Cyber accents */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-sky-500/10 blur-[100px] rounded-full pointer-events-none"></div>

          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-kof-accent to-white drop-shadow-lg tracking-wider">
            {t.resources.title}
          </h1>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto text-lg leading-relaxed mix-blend-highlight">
            {t.resources.pageSubtitle}
          </p>
        </div>

        <div 
          className="rounded-xl shadow-lg border border-sky-500/20 overflow-hidden relative"
          style={{
            background: "rgba(15, 23, 42, 0.9)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Top border highlight */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-kof-accent to-transparent shadow-lg"></div>

          {RESOURCES.map((res, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-6 border-b border-sky-500/10 last:border-0 hover:bg-sky-500/5 transition-all duration-300 group">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="p-2 bg-sky-500/10 rounded-xl border border-sky-500/20 text-sky-500 shadow-lg group-hover:bg-sky-600 group-hover:text-black transition-colors mr-4">
                  <FileText size={20} />
                </div>
                <span className="font-medium text-white/90 group-hover:text-white text-lg transition-colors">{res.name}</span>
              </div>
              <a
                href={`/pdfs/${res.file}`}
                download
                className="inline-flex justify-center items-center px-6 py-2 bg-sky-500/10 text-sky-500 border border-sky-500/30 rounded-xl font-bold text-sm tracking-wider hover:bg-sky-600 hover:text-black hover:shadow-lg transition-all "
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.resources.downloadPdf} <Download size={16} className="ml-2" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center relative z-10">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 tracking-widest mb-4">
            {t.resources.faqTitle}
          </h2>
          <p className="text-white/60 mx-auto max-w-xl text-lg">{t.resources.faqDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default Resources;
