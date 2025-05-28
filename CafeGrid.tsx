import React from 'react';
import CafeCard from './CafeCard';
import { Cafe } from '../types';

interface CafeGridProps {
  cafes: Cafe[];
  title?: string;
}

const CafeGrid: React.FC<CafeGridProps> = ({ cafes, title }) => {
  return (
    <div className="py-8">
      {title && (
        <h2 className="text-2xl md:text-3xl font-serif font-medium mb-8 text-zinc-800 dark:text-white">
          {title}
        </h2>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cafes.map((cafe) => (
          <CafeCard key={cafe.id} cafe={cafe} />
        ))}
      </div>
    </div>
  );
};

export default CafeGrid;