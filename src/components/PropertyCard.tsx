import React from "react";
import { Percent, Tag } from "lucide-react";

interface PropertyCardProps {
  imageUrl: string;
  location: string;
  dividendYieldPercent: number;
  sharePrice: number;
  currency?: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  imageUrl,
  location,
  dividendYieldPercent,
  sharePrice,
  currency = "₦",
}) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden font-sans transform transition-transform duration-300 hover:scale-[1.02]">
      {/* Image */}
      <div className="relative w-full h-52">
        <img
          src={imageUrl}
          alt={`Property at ${location}`}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-5">
        {/* Location */}
        <h3 className="text-gray-900 font-bold text-xl leading-snug truncate">
          {location}
        </h3>

        {/* Info Grid */}
        <div className="flex justify-between items-center gap-6">
          {/* Estimated Dividend Yield */}
          <div className="flex-1">
            <div className="flex items-center gap-1 text-gray-600 text-[10px] font-medium uppercase tracking-wide mb-1">
              <Percent className="w-4 h-4 text-black-500" />
              <span>Estimated Dividend Yield</span>
            </div>
            <span className="text-[20px] font-bold text-black-600">
              {dividendYieldPercent}%
            </span>
          </div>

          {/* Share Price */}
          <div className="flex-1 text-right">
            <div className="flex items-center justify-end gap-1 text-gray-600 text-xs font-medium uppercase tracking-wide mb-1">
              <Tag className="w-4 h-4 text-black-500" />
              <span>Share Price</span>
            </div>
            <span className="text-[20px] font-bold text-black-600">
              {currency}
              {sharePrice.toLocaleString()}
            </span>
          </div>
        </div>

        {/* CTA */}
        <button
          disabled
          className="w-full bg-gray-200 text-gray-600 text-base font-semibold py-2 px-4 rounded-md opacity-80 cursor-not-allowed transition duration-200"
        >
          Coming Soon
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
