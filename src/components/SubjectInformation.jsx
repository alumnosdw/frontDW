import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faBookOpen, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from '@/components/Button'

function SubjectInformation({ subjectData }) {
  return (
    <div className="w-full flex flex-col justify-center items-center px-4"> {/* Añadí px-4 para padding lateral */}

      <div className="w-full md:w-10/12 p-4 md:p-8 flex flex-col gap-4 md:gap-5 border-2 border-gray-300 rounded-lg shadow-md"> {/* w-full en movil, md:w-10/12 en pantallas medianas y grandes */}
        <h1 className="text-2xl md:text-4xl font-bold">{subjectData.titulo}</h1> {/* Ajuste tamaño de texto en móvil */}

        <div className="flex flex-col md:flex-row gap-4 md:gap-10"> {/* Cambia a columna en movil y fila en pantallas mas grandes */}
          <p className="text-base md:text-lg font-semibold">{subjectData.codigo}</p>{/* Ajuste tamaño de texto en móvil */}
          <p className="text-base md:text-lg font-semibold">UC: {subjectData.creditos}</p>{/* Ajuste tamaño de texto en móvil */}
        </div>

        <div>
          <p className="text-xl md:text-2xl font-bold pb-2">Descripción</p> {/* Ajuste tamaño de texto en móvil */}
          <p className="text-base md:text-lg text-justify">{subjectData.descripcion}</p>{/* Ajuste tamaño de texto en móvil */}
        </div>

        <div>
          <p className="text-xl md:text-2xl font-bold pb-2">Profesor</p> {/* Ajuste tamaño de texto en móvil */}
          <p className="text-base md:text-lg text-justify">{subjectData.profesor}</p>{/* Ajuste tamaño de texto en móvil */}
        </div>

        <div>
          <p className="text-xl md:text-2xl font-bold pb-2">Horario y ubicacion</p> {/* Ajuste tamaño de texto en móvil */}

          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faClock} />
            <p className="text-base md:text-lg text-justify">{subjectData.horario}</p>{/* Ajuste tamaño de texto en móvil */}
          </div>

          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faLocationDot} />
            <p className="text-base md:text-lg text-justify">{subjectData.ubicacion}</p>{/* Ajuste tamaño de texto en móvil */}
          </div>
        </div>

        <div>
          <p className="text-xl md:text-2xl font-bold pb-2">Prerrequisitos</p> {/* Ajuste tamaño de texto en móvil */}
          {subjectData.prerrequisitos.map((prereq, index) => (
            <p className="text-base md:text-lg font-semibold" key={index}> {/* Ajuste tamaño de texto en móvil */}
              {prereq}
            </p>
          ))}
        </div>

        <div>
          <p className="text-xl md:text-2xl font-bold pb-2">Cupos</p> {/* Ajuste tamaño de texto en móvil */}
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faBookOpen} />
            <p className="text-base md:text-lg text-justify">{subjectData.cupos}</p> {/* Ajuste tamaño de texto en móvil */}
          </div>
        </div>

      </div>

      <div className="w-full md:w-10/12 my-4 flex flex-col md:flex-row justify-between items-center gap-4"> {/* w-full en movil, md:w-10/12 en pantallas medianas y grandes */}
          <Button 
          textButton={"Regresar"}
          route={"/administrator/subjects"}
          />

          <Button 
          mode={"dark"}
          textButton={"Editar Materia"}
          route={"/administrator/subjects/add"}
          />
        </div>
    </div>
  );
}

export default SubjectInformation;