"use client";
import React from "react";
import Sidebar from "@/components/Sidebar";
import Table from "@/components/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faEdit,
  faEye,
  faGraduationCap,
  faHome,
  faTrash,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

function Subjects() {
  const router = useRouter();
  /* Cabeceras de la tabla */
  const columns = [
    {
      name: "Codigo",
      selector: (row) => row.codigo,
      sortable: true,
    },
    {
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name: "Creditos",
      selector: (row) => row.creditos,
      sortable: true,
    },
    {
      name: "Acciones",
      cell: (row) => (
        <div className="flex space-x-2 md:space-x-8 ">
          <FontAwesomeIcon
            icon={faEye}
            className="cursor-pointer"
            title="Ver"
            onClick={() => {
              router.push("/administrator/subjects/view");
            }}
          />
          <FontAwesomeIcon
            icon={faEdit}
            className="cursor-pointer"
            title="Editar"
            onClick={() => {
              router.push("/administrator/subjects/add");
            }}
          />
          <FontAwesomeIcon
            icon={faTrash}
            className="cursor-pointer"
            title="Eliminar"
          />
        </div>
      ),
    },
  ];

  /* Columnas de la tabla */
  const data = [
    {
      codigo: "MAT101",
      nombre: "Cálculo I",
      creditos: 4,
    },
    {
      codigo: "FIS102",
      nombre: "Física General I",
      creditos: 3,
    },
    {
      codigo: "QUI103",
      nombre: "Química General",
      creditos: 3,
    },
    {
      codigo: "HIS201",
      nombre: "Historia Universal",
      creditos: 3,
    },
    {
      codigo: "LIT202",
      nombre: "Literatura Española",
      creditos: 3,
    },
    {
      codigo: "PRO301",

      nombre: "Programación I",
      creditos: 4,
    },
    {
      codigo: "ING302",
      nombre: "Inglés Técnico",
      creditos: 2,
    },
  ];

  /* Estilos generales de la tabla */
  const customStyles = {
    headRow: {
      style: {
        fontWeight: "bold",
        fontSize: "18px",
        textAlign: "center",
        '@media (max-width: 640px)': {
          fontSize: '16px',
        },
      },
    },
    cells: {
      style: {
        fontWeight: "500",
        fontSize: "16px",
        textAlign: "center",
        '@media (max-width: 640px)': {
          fontSize: '14px',
        },
      },
    },
  };

  /* Funcion para filtrar la informacion */
  const filterFunction = (data, query) => {
    const normalizedQuery = query.toLowerCase();

    return data.filter((record) => {
      const codigoMatch = record.codigo.toLowerCase().includes(normalizedQuery);
      const nombreMatch = record.nombre.toLowerCase().includes(normalizedQuery);

      let creditosMatch = false;
      const queryAsNumber = parseFloat(query);

      if (!isNaN(queryAsNumber)) {
        creditosMatch = record.creditos === queryAsNumber;
      }

      return codigoMatch || nombreMatch || creditosMatch;
    });
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
      <div className="w-full m-8">
        <h1 className="text-center text-2xl md:text-3xl font-bold mb-4">Listado de Materias</h1>
        <Table
          columns={columns}
          data={data}
          customStyles={customStyles}
          buttontext={"Agregar Materia"}
          placeholder={"Buscar por codigo, nombre o creditos"}
          filterFunction={filterFunction}
          route={"/administrator/subjects/add"}
        />
      </div>
    </div>
  );
}

export default Subjects;
