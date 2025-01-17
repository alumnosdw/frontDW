import React from "react";
import Sidebar from "@/components/Sidebar";
import SubjectInformation from "@/components/SubjectInformation";
import {
  faBook,
  faGraduationCap,
  faHome,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

function Subject() {
  /* Informacino de prueba */
  const subjectData = {
    titulo: "Matemáticas II",
    codigo: "MAT021",
    creditos: 4,
    descripcion:
      "El viento susurraba secretos entre las hojas del viejo roble, mientras el sol pintaba el cielo con tonos dorados y carmesí. Un pequeño gato atigrado observaba con curiosidad a un pájaro carpintero picoteando la corteza, ajeno al tiempo que fluía. Las flores silvestres, en su danza multicolor, perfumaban el aire con un aroma dulce y embriagador.",
    profesor: "Sin Asignar",
    horario: "Lunes y miercoles 10:00 - 12:00",
    ubicacion: "Edificio A, Salon 201",
    prerrequisitos: ["Matemáticas I", "Física I"],
    cupos: "0/50",
  };

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

  return (
    <div className="flex">
      <Sidebar role={"Administrador"} items={items} />

      <SubjectInformation subjectData={subjectData} />
    </div>
  );
}

export default Subject;
