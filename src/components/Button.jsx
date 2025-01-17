"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

/*
Botón genérico que permite la navegación entre rutas,tiene estilos que cambian según el modo (dark o light o vacio en su defecto)
*/

function Button({mode ,textButton, route}) {
const router = useRouter();

  return (
    <button
    className={`px-8 py-2 text-lg font-bold border border-gray-400 rounded-lg shadow-lg ${
      mode === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    }`}
    onClick={() => router.push(route)}
  >
    {textButton}
  </button>
  )
}

export default Button