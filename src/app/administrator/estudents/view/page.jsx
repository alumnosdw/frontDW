import React from "react";
import Sidebar from "@/components/Sidebar";
import StudentInformation from "@/components/StudentInformation";
import { faBook, faGraduationCap, faHome, faUsers } from "@fortawesome/free-solid-svg-icons";

function student() {
  /* Informacion de ejemplo */
  const studentData = {
    cedula: "V-28561983",
    nombres: "Miguel Angel",
    apellidos: "Zapata Zorrilla",
    unidadesCursadas: 30,
    unidadesAprobadas: 28,
    correoPersonal: "JorgaAZZ@gmail.com",
    telefonoPersonal: "0412-1324567",
    estatus: "Activo",
    sede: "Puerto Ordaz",
    carrera: "Ingeniería Informática",
    indiceAcademico: 8.15,
    nivel: 8,
    correoAlternativo: "otroCorreo@gmail.com",
    telefonoAlternativo: "0426-1234567",
    fecha: "15/11/199",
    ciudad: "Guayana",
    sexo: "Masculino",
    estado: "Bolivar",
    pais: "Venezuela",
    estadoCivil: "Soltero",
    direccion: "Avenida Principal, Edificio Centro Comercial Los Andes, Piso 5, Oficina 5B, Urbanización La California, Municipio Sucre, Estado Miranda.",
    email: "unCorreoCualquiera@gmail.com"
  };

  /* Contenido del sidebar */
  const items = [
    { icon: faHome, text: "Dasboard", route: "/administrator" },
    { icon: faGraduationCap, text: "Estudiantes", route: "/administrator/estudents" },
    { icon: faUsers, text: "Profesores", route: "/administrator/professors" },
    { icon: faBook, text: "Asignaturas", route: "/administrator/subjects" },
  ]; 

  return (
    <div className="flex">
      <Sidebar role={"Administrador"} items={items} />

      <StudentInformation
      studentData={studentData}
      />
    </div>
  );
}

export default student;
