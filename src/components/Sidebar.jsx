"use client"
import {
  faBars,
  faPowerOff,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import UserInformation from "@/components/UserInformation";
import { usePathname, useRouter } from "next/navigation";

/* 
Sidebar del proyecto, este muestra la imagen del perfil del usuario su nombre y correo, muestra el promp items que son las secciones del menu (dashboard, profesores, estudiantes, etc) estos se pueden cambiar sin problemas, por ultimo, un boton para cerra la sesion.
*/

const Sidebar = ({ role, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex">
      <div
        className={`flex flex-col w-20 md:w-64 bg-black transition-width duration-300 text-white ${
          isOpen ? "w-64" : "w-20"
        } relative`}
      >
        <div className="mt-4 flex items-center justify-between p-1">
          {/* Componente que muestra la foto de perfil del usuario, el nombre y el correo */}
          <div className={`pl-2 md:block  ${isOpen ? "visible" : "hidden"}`}>
            <UserInformation
              url={"/images/foto-perfil.png"}
              name={"Dionner Figueras"}
              email={"dionnerfigueras@gmail.com"}
              /* Cambia algunos estilos para mostrar mejor la informacion del profesor */
              isProfessor={false}
            />
          </div>

          {/* Boton encargado de la responsividad de la pagina */}
          <button
            className="block md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FontAwesomeIcon icon={faXmark} className="w-7 h-7 pb-36" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="w-7 h-7 pl-2" />
            )}
          </button>

        </div>

        {/* Navegacion de la pagina */}
        <nav className="mt-28 flex-grow">
          <span
            className={`ml-4 text-base font-bold md:block ${
              isOpen ? "block" : "hidden"
            }`}
          >
            {role}
          </span>
          <ul className="flex flex-col justify-center ">
              {/* Mapeamos el array de items para generar la lista */}
              {items.map((item, index) => (
                  <li key={index} className={`flex items-center p-4 hover:bg-gray-700 cursor-pointer ${pathname === item.route ? 'bg-gray-700' : ''}`} onClick={() => router.push(item.route)}>
                      <FontAwesomeIcon icon={item.icon} className="w-7 h-7" />
                      <span
                         className={`ml-4 font-bold text-xl md:block ${
                            isOpen ? "block" : "hidden"
                         }`}
                      >
                      {item.text}
                    </span>
                  </li>
              ))}
          </ul>
        </nav>

        {/* Botond de salir */}        
        <button className="absolute bottom-0 w-full p-4 cursor-pointer flex items-center" onClick={() => {router.push('/')}}>
          <FontAwesomeIcon icon={faPowerOff} className="w-5 h-5"/>
          <span
            className={`ml-4 font-bold text-lg md:block ${isOpen ? "block" : "hidden"}`}>
            Salir
          </span>
        </button>

      </div>
    </div>
  );
};

export default Sidebar;