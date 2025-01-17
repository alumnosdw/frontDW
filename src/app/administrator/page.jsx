"use client";
import Sidebar from "@/components/Sidebar";
import Card from "@/components/Card";
import {
  faBook,
  faGraduationCap,
  faHome,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";


export default function Administrator() {
  /* Elemento del menu de navegacion */
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
    <div className="flex min-w-full">
      <Sidebar role="Administrador" items={items} />
      
      <div className="m-4 w-full flex flex-col">
        <h1 className="font-extrabold text-4xl">Dashboard de Admnistradores</h1>

        <Card
          title="profesores"
          subtitle="registrados"
          number={42}
          route={"/administrator/professors"}
        />

        <Card
          title="alumnos"
          subtitle="matriculados"
          number={1246}
          route={"/administrator/estudents"}
        />

        <Card
          title="materias"
          subtitle="ofertadas"
          number={60}
          route={"/administrator/subjects"}
        />
      </div>
    </div>
  );
}
