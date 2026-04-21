import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ProductShowcase from '../components/ProductShowcase';
import { useLanguage } from '../contexts/LanguageContext';

const Products: React.FC = () => {
  const { language } = useLanguage();

  const copy = {
    en: {
      eyebrow: 'Products',
      title: 'Five focused systems, one ecosystem.',
      description:
        'Each product solves a specific operational layer, but all of them are framed to work as part of one coordinated fintech environment.',
    },
    ms: {
      eyebrow: 'Produk',
      title: 'Lima sistem fokus, satu ekosistem.',
      description:
        'Setiap produk menyelesaikan lapisan operasi yang khusus, tetapi semuanya dibingkaikan untuk bergerak sebagai satu persekitaran fintech yang terselaras.',
    },
  }[language];

  return (
    <div className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} align="center" />
        <div className="mt-14">
          <ProductShowcase />
        </div>
      </div>
    </div>
  );
};

export default Products;
