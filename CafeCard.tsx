import React from 'react';
import { Star, MapPin, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Cafe } from '../types';

interface CafeCardProps {
  cafe: Cafe;
}

const CafeCard: React.FC<CafeCardProps> = ({ cafe }) => {
  const renderPriceLevel = () => {
    return Array(cafe.priceLevel)
      .fill(0)
      .map((_, i) => (
        <DollarSign key={i} className="h-3.5 w-3.5 inline text-amber-600" />
      ));
  };

  return (
    <Link 
      to={`/cafe/${cafe.id}`}
      className="group bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={cafe.imageUrl} 
          alt={cafe.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-medium text-zinc-800 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
            {cafe.name}
          </h3>
          <div className="flex items-center bg-amber-50 dark:bg-amber-900/30 px-2 py-1 rounded-full">
            <Star className="h-4 w-4 text-amber-500 mr-1" fill="currentColor" />
            <span className="text-sm font-medium text-amber-700 dark:text-amber-400">{cafe.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-zinc-500 dark:text-zinc-400 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{cafe.location.city}, {cafe.location.country}</span>
        </div>
        
        <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-4 line-clamp-2">
          {cafe.shortDescription}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="text-zinc-500 dark:text-zinc-400 text-xs">
            {renderPriceLevel()}
          </div>
          
          <div className="text-xs text-zinc-500 dark:text-zinc-400">
            Est. {cafe.established}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CafeCard;