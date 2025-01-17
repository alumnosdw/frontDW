"use client";
import React from "react";
import Sidebar from "@/components/Sidebar";
import Button from "@/components/Button";
import UserInformation from "@/components/UserInformation";
import ProfessorInformation from "@/components/ProfessorInformation";
import { faBook, faGraduationCap, faHome, faUsers } from "@fortawesome/free-solid-svg-icons";

function Professor() {

  /* Contenido del sidebar */
  const items = [
    { icon: faHome, text: "Dashboard", route: "/administrator" },
    { icon: faGraduationCap, text: "Estudiantes", route: "/administrator/estudents" },
    { icon: faUsers, text: "Profesores", route: "/administrator/professors" },
    { icon: faBook, text: "Asignaturas", route: "/administrator/subjects" },
  ]; 

  return (
    <div className="flex bg-gray-100">

      <Sidebar role={"Administrador"} items={items} />

      <div className="flex-grow flex flex-col items-center p-4 md:p-8">
        <div className="w-full max-w-2xl px-4 py-8 border-2 border-gray-300 rounded-lg shadow-md">
          <div className="flex flex-col items-center justify-between">
            <UserInformation
              url={"/images/foto-perfil.png"}
              name={"María García López"}
              email={"Ciencias de la computacion"}
              status={"Activo"}
              isProfessor={true}
            />

            <ProfessorInformation
              email={"maria.garcia@gmail.com"}
              phone={"123456789"}
              address={"Calle 123, 456, 789"}
              academic_title={"Doctorado en ciencias de la computacion"}
              specialization={"Inteligencia Artificial"}
              contract_date={"31/01/92"}
            />
          </div>
        </div>
        
        <div className="w-full max-w-2xl px-4 py-12 flex justify-center md:justify-between flex-wrap gap-2">
          <Button 
            textButton={"Regresar"}
            route={"/administrator/professors"}
          />

          <Button 
            mode={"dark"}
            textButton={"Editar Perfil"}
            route={"/administrator/professors/add"}
          />
        </div>
      </div>
    </div>
  );
}

export default Professor;