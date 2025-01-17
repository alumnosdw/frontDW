"use client"
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

/* 
Tarjeta que presenta información relevante sobre un elemento específico, incluyendo un título, un subtítulo y un número destacado. Incluye un botón de compartir que ppermite navegar a una ruta diferente al hacer clic.
*/

function Card({ title, subtitle, number, route }) {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(route);
  };

  return (
    <div className='m-4'>
      <div className="w-full px-8 py-4 border border-gray-300 rounded-lg shadow-md ">
        <div className="space-y-1">
          <p className='text-2xl font-bold block'>Total de {title} </p>
          <p className='text-xl font-semibold block text-gray-500'>Numero de {title}  {subtitle} </p>

          <div className="flex justify-between items-center pt-8 ">
            <p className='text-4xl font-bold'>{number}</p>

            <button onClick={handleNavigation}>
              <FontAwesomeIcon icon={faShare} className="w-7 h-7" />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;