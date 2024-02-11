import React from "react";

const DogCard = ({ dog }) => {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-md p-4">
      <img src={dog.avatar} alt={dog.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{dog.name}</h2>
        
        {/* Agrega más detalles del perro según tus necesidades */}
      </div>
    </div>
  );
};

export default DogCard;
