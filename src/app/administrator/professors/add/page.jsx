import React from "react";
import Sidebar from "@/components/Sidebar";
import FormProfessor from "@/components/FormProfessor";
import {
  faBook,
  faGraduationCap,
  faHome,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

function AddProfessor() {
  /* Contenido del sidebar */
  const items = [
    { icon: faHome, text: "Dasboard", route: "/administrator" },
    {
      icon: faGraduationCap,
      text: "Estudiantes",
      route: "/administrator/estudents",
    },
    { icon: faUsers, text: "Profesores", route: "/administrator/professors" },
    { icon: faBook, text: "Asignaturas", route: "/administrator/subjects" },
  ];
  
  /* Datos para probar el cambio de modo (Crear / Editar) del formulario */
  const professorData = {
    nombres: "Ana",
    apellidos: "González Pérez",
    telefono: "04241234567",
    direccion: "Calle 5, #20, Urb. Centro",
    email: "ana.gonzalez@example.com",
    departamento: "Informática",
    estatus: "Activo",
    titulacion: "Magister en Ingeniería de Sistemas",
    especialidad: "Desarrollo de Software",
  };

  return (
    <div className="flex bg-gray-100">
      <Sidebar role={"Administrador"} items={items} />

      <FormProfessor
        formTitle={"Agregar un nuevo profesor"}
        /* initialValues={professorData} */
      />
    </div>
  );
}

export default AddProfessor;
