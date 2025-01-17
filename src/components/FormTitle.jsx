"use client";
import {
  faChevronLeft,
  faCircleChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React from "react";

/* 
Muestra el titulo de los formularios, ademates de tener un boton para regresar a la pagina anterior al formulario (Por defecto sera el lista de profesores, estudiantes y materias)
*/

function FormTitle({ formTitle, route }) {
  const router = useRouter();

  return (
    <div className="w-10/12 flex justify-start items-center gap-2 py-4">
      <button onClick={() => {router.push(route); }} className="pt-2">
        <FontAwesomeIcon icon={faCircleChevronLeft} className="w-5 h-5"/>
      </button>

      <h1 className="text-xl font-bold">{formTitle}</h1>
    </div>
  );
}

export default FormTitle;
