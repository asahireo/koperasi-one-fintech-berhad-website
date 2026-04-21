import React from 'react';
import { ArrowRight, FileText, LayoutGrid, Network, CreditCard, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SOLUTIONS_DATA } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import SurfaceCard from './SurfaceCard';

const iconMap = {
  icmis: LayoutGrid,
  kosmart: Smartphone,
  iaccount: FileText,
  imembership: Network,
  ilms: CreditCard,
};

type ProductShowcaseProps = {
  compact?: boolean;
};

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ compact = false }) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const products = Object.values(SOLUTIONS_DATA);

  return (
    <div className={`grid gap-6 ${compact ? 'lg:grid-cols-2' : 'md:grid-cols-2 xl:grid-cols-3'}`}>
      {products.map((product) => {
        const Icon = iconMap[product.id];

        return (
          <SurfaceCard
            key={product.id}
            className="group flex h-full flex-col p-7 md:p-8"
          >
            <div className="mb-8 flex items-start justify-between gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/5 text-violet-200">
                <Icon size={26} />
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/52">
                {product.id}
              </span>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white">{product.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/60 md:text-base">
                {product.description[language]}
              </p>

              <ul className="mt-6 space-y-3">
                {product.features[language].slice(0, compact ? 3 : 4).map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-white/74">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              onClick={() => navigate(product.link)}
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/86"
            >
              <span>Explore Product</span>
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </SurfaceCard>
        );
      })}
    </div>
  );
};

export default ProductShowcase;
