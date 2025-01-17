"use client"
import React from 'react';

/* 
Muestra la imagen, el nombre y el correo de un usuario se utiliza tanto en el sidebar como en professorInformation, el status es para el profesor, por lo que en caso de no ser este simplemente no se le pasa.
*/

const UserInformation = ({ url, name, email, status, isProfessor }) => {

  const imageSizeClass = isProfessor ? 'w-40 h-40' : 'w-28 h-28';
  const nameTextSizeClass = isProfessor ? 'text-xl' : 'text-lg';
  const emailTextSizeClass = isProfessor ? 'text-lg' : 'text-base';
  const textColorClass = isProfessor ? 'text-black' : 'text-white';
  const maxWidth = isProfessor ? 'max-w-80' : 'max-w-52';

  return (
    <div className="flex flex-col items-center justify-center rounded-lg max-w-md mx-auto">
      <img
        src={url}
        alt="Profile"
        className={`${imageSizeClass} rounded-full`}
      />
      <div className={`flex flex-col items-center pl-2 ${textColorClass}`}>
        <h2 className={`${nameTextSizeClass} text-center font-extrabold ${maxWidth} break-words`}>{name}</h2>
        <p className={`${emailTextSizeClass} text-center font-semibold ${maxWidth} break-words`}>{email}</p>
        {status && (
          <p className='mt-2 px-4 py-1 bg-black text-white rounded-2xl font-semibold text-base'>
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default UserInformation;