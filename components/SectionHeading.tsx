import React from 'react';
import { motion } from 'framer-motion';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) => {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`flex flex-col gap-4 ${alignment} ${className}`}
    >
      {eyebrow ? <span className="eyebrow-label">{eyebrow}</span> : null}
      <div className={`max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}>
        <h2 className="text-4xl font-semibold tracking-[-0.06em] text-white md:text-5xl">{title}</h2>
        {description ? (
          <p className="mt-4 text-base leading-7 text-white/64 md:text-lg">{description}</p>
        ) : null}
      </div>
      <span className="h-px w-24 bg-gradient-to-r from-white/0 via-white/50 to-violet-300/0" />
    </motion.div>
  );
};

export default SectionHeading;
