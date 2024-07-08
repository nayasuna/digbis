import React, { useState } from 'react';

const Card = ({ title, description, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full sm:w-80 sm:h-80 border rounded-lg shadow-lg overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageUrl} alt={title} className="w-full h-50 sm:h-50 object-cover" />
      <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-75 text-white flex items-center justify-center p-4 overflow-y-auto">
          <p className="p-4 text-justify">{description}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
