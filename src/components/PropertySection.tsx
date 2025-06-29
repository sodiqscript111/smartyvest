import React from "react";
import PropertyCard from "./PropertyCard"; // Adjust path as necessary

const propertiesData = [
  {
    id: 1,
    imageUrl: "https://i.ibb.co/RTSn2gtC/Image-fx-74.png",
    location: "Lekki, Lagos",
    dividendYieldPercent: 6.7,
    sharePrice: 40000,
  },
  {
    id: 2,
    imageUrl: "https://i.ibb.co/9kG9twZx/Image-fx-73.png",
    location: "Ikoyi, Lagos",
    dividendYieldPercent: 7.2,
    sharePrice: 55000,
  },
  {
    id: 3,
    imageUrl: "https://i.ibb.co/S716RpQg/Image-fx-72.png",
    location: "Victoria Island, Lagos",
    dividendYieldPercent: 5.9,
    sharePrice: 62000,
  },
  {
    id: 4,
    imageUrl: "https://i.ibb.co/G3k2RFGX/Image-fx-71.png",
    location: "Yaba, Lagos",
    dividendYieldPercent: 6.1,
    sharePrice: 35000,
  },
];

const PropertySection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 pt-4">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 font-poppins text-center">
        Buy Shares in Cash Flowing property
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {propertiesData.map((property) => (
          <PropertyCard
            key={property.id}
            imageUrl={property.imageUrl}
            location={property.location}
            dividendYieldPercent={property.dividendYieldPercent}
            sharePrice={property.sharePrice}
          />
        ))}
      </div>
    </section>
  );
};

export default PropertySection;
