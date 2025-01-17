import React from "react";
import Sidebar from "@/components/Sidebar";
import FormSubject from "@/components/FormSubjects";
import {
  faBook,
  faGraduationCap,
  faHome,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

function AddSubjects() {
  
  /* Contenido del sidebar */
  const items = [
    { icon: faHome, text: "Dasboard", route: "" },
    { icon: faGraduationCap, text: "Estudiantes", route: "" },
    { icon: faUsers, text: "Profesores", route: "" },
    { icon: faBook, text: "Asignaturas", route: "" },
  ];

  /* Datos para probar el cambio de modo (Crear / Editar) del formulario */
  const subjectData = {
    nombre: "Matemáticas Avanzadas",
    unidadesCredito: "4",
    profesor: "Maria Garcia",
    descripcion: "Un curso avanzado de matemáticas.",
    horario: "Lunes y Miércoles 10:00 AM",
    aula: "Aula 202",
    prerrequisitos: "Cálculo I",
    cupos: "30",
  };

  return (
    <div className="flex bg-gray-100">
      <Sidebar role={"Adminitrador"} items={items} />

      <FormSubject
        formTitle={"Agregar una nueva materia"}
        /* initialValues={subjectData} */
      />
    </div>
  );
}

export default AddSubjects;
