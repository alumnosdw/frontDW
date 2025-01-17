import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faBookOpenReader,
  faCalendarDays,
  faEnvelope,
  faLocationDot,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";

/* 
Muestra la informacion de un profesor en particulas, en caso de no pasar algunos de promps este simplemente no se mostrara
*/

function ProfessorInformation({ email, phone, address, academic_title, specialization, contract_date }) {

  return (
    <div className="py-8 flex flex-col justify-start gap-3 pl-2 border-l-2 border-black max-w-md mx-auto">
      {email && (
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faEnvelope} className='w-5 h-5' />
          <p className='font-semibold text-base sm:text-lg'>{email}</p>
        </div>
      )}

      {phone && (
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faMobileScreen} className='w-5 h-5' />
          <p className='font-semibold text-base sm:text-lg'>{phone}</p>
        </div>
      )}

      {address && (
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faLocationDot} className='w-5 h-5' />
          <p className='font-semibold text-base sm:text-lg'>{address}</p>
        </div>
      )}

      {academic_title && (
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faBookOpenReader} className='w-5 h-5' />
          <p className='font-semibold text-base sm:text-lg'>{academic_title}</p>
        </div>
      )}

      {specialization && (
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faAward} className='w-5 h-5' />
          <p className='font-semibold text-base sm:text-lg'>{specialization}</p>
        </div>
      )}

      {contract_date && (
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faCalendarDays} className='w-5 h-5' />
          <p className='font-semibold text-base sm:text-lg'>Contratado el {contract_date}</p>
        </div>
      )}
    </div>
  );
}

export default ProfessorInformation;