"use client";
import { useState } from "react";
import Image from "next/image";


/*  
Card que muestra la imagen, el titulo y la descripcion de las materias que aparecen en el home de la pagina
*/


const Card = ({ imageSrc, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-60 h-72 mx-auto bg-white rounded-lg shadow-lg overflow-hidden relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative w-full h-48 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={500}
          className="rounded-t-lg object-cover w-full h-full"
        />
      </div>
      <div className={`p-4 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'} absolute bottom-0 w-full`}>
        <h2 className="text-lg font-semibold text-center truncate">{title}</h2>
      </div>
      {isHovered && (
        <div className="p-4 h-full flex items-center justify-center absolute inset-0 bg-white bg-opacity-80">
          <p className="text-center">{description}</p>
        </div>
      )}
    </div>
  );
};

export default Card;