import React from 'react';

type SurfaceCardProps = {
  children: React.ReactNode;
  className?: string;
  strong?: boolean;
};

const SurfaceCard: React.FC<SurfaceCardProps> = ({ children, className = '', strong = false }) => {
  return (
    <div className={`${strong ? 'surface-card-strong' : 'surface-card'} rounded-[28px] ${className}`}>
      {children}
    </div>
  );
};

export default SurfaceCard;
