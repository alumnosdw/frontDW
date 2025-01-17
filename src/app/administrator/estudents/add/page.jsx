import React from "react";
import Sidebar from "@/components/Sidebar";
import FormStudent from "@/components/FormStudent";
import {
  faBook,
  faGraduationCap,
  faHome,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

function AddStudent() {
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
  const studentData = {
    sede: "Puerto Ordaz",
    carrera: "Ingeniería Informática",
    nombres: "Juan Carlos",
    apellidos: "Pérez Gómez",
    telefono: "04121234567",
    cedula: "12345678",
    direccion: "Av. Principal #123, Sector X",
    email: "juan.perez@example.com",
    fechaNacimiento: "2000-05-15",
    sexo: "Hombre",
    estadoCivil: "Soltero",
    pais: "Venezuela",
    estado: "Argentina", 
    ciudad: "Brasil",
  };

  return (
    <div className="flex bg-gray-100">
      <Sidebar role={"Administrador"} items={items} />

      <FormStudent 
      formTitle={"Agregar un Nuevo Estudiante"} 
      /* initialValues={studentData} */
      />
    </div>
  );
}

export default AddStudent;
