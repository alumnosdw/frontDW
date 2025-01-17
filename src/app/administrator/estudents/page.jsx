// "use client";
// import React from "react";
// import Sidebar from "@/components/Sidebar";
// import Table from "@/components/Table";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBook,
//   faEdit,
//   faEye,
//   faGraduationCap,
//   faHome,
//   faTrash,
//   faUsers,
// } from "@fortawesome/free-solid-svg-icons";
// import { useRouter } from "next/navigation";

// function Estudents() {
//   const router = useRouter();
//   /* Cabeceras de la tabla */
//   const columns = [
//     {
//       name: "Nombre",
//       selector: (row) => row.nombre,
//       sortable: true,
//     },
//     {
//       name: "Carrera",
//       selector: (row) => row.carrera,
//       sortable: true,
//     },
//     {
//       name: "semestre",
//       selector: (row) => row.semestre,
//       sortable: true,
//     },
//     {
//       name: "estatus",
//       selector: (row) => row.estatus,
//       cell: (row) => (
//         <div
//           style={{
//             backgroundColor: row.estatus === "Activo" ? "#7FF8AA" : "#FECACA",
//             color: row.estatus === "Activo" ? "#166534" : "#991B1B",
//             width: "5rem",
//             padding: "0.25rem 0.5rem",
//             borderRadius: "0.25rem",
//             display: "inline-block",
//             textAlign: "center",
//           }}
//         >
//           {row.estatus}
//         </div>
//       ),
//     },
//     {
//       name: "Acciones",
//       cell: (row) => (
//         <div className="flex space-x-2 md:space-x-8 ">
//           <FontAwesomeIcon
//             icon={faEye}
//             className="cursor-pointer"
//             title="Ver"
//             onClick={() => {
//               router.push("/administrator/estudents/view");
//             }}
//           />
//           <FontAwesomeIcon
//             icon={faEdit}
//             className="cursor-pointer"
//             title="Editar"
//           />
//           <FontAwesomeIcon
//             icon={faTrash}
//             className="cursor-pointer"
//             title="Eliminar"
//           />
//         </div>
//       ),
//     },
//   ];

//   /* Colimnas de la tabla */
//   const data = [
//     {
//       nombre: "Juan Pérez",
//       carrera: "Ingeniería en Sistemas",
//       semestre: 5,
//       estatus: "Activo",
//     },
//     {
//       nombre: "María Rodríguez",
//       carrera: "Medicina",
//       semestre: 3,
//       estatus: "Inactivo",
//     },
//     {
//       nombre: "Carlos Martínez",
//       carrera: "Derecho",
//       semestre: 1,
//       estatus: "Activo",
//     },
//     {
//       nombre: "Ana García",
//       carrera: "Contaduría Pública",
//       semestre: 8,
//       estatus: "Activo",
//     },
//     {
//       nombre: "Pedro López",
//       carrera: "Arquitectura",
//       semestre: 6,
//       estatus: "Inactivo",
//     },
//     {
//       nombre: "Sofía Hernández",
//       carrera: "Biología",
//       semestre: 2,
//       estatus: "Activo",
//     },
//     {
//       nombre: "Daniel Gómez",
//       carrera: "Administración de Empresas",
//       semestre: 4,
//       estatus: "Inactivo",
//     },
//   ];

//   /* Estilos generales de la tabla */
//   const customStyles = {
//     headRow: {
//       style: {
//         fontWeight: "bold",
//         fontSize: "18px",
//         textAlign: "center",
//         '@media (max-width: 640px)': {
//           fontSize: '16px',
//         },
//       },
//     },
//     cells: {
//       style: {
//         fontWeight: "500",
//         fontSize: "16px",
//         textAlign: "center",
//         '@media (max-width: 640px)': {
//           fontSize: '14px',
//         },
//       },
//     },
//   };

//   /* Funcion para filtrar la informacion */
//   const filterFunction = (data, query) => {
//     return data.filter((record) => {
//       return (
//         record.nombre.toLowerCase().includes(query.toLowerCase()) ||
//         record.carrera.toLowerCase().includes(query.toLowerCase())
//       );
//     });
//   };

//   /* Contenido del sidebar */
//   const items = [
//     { icon: faHome, text: "Dasboard", route: "/administrator" },
//     {
//       icon: faGraduationCap,
//       text: "Estudiantes",
//       route: "/administrator/estudents",
//     },
//     { icon: faUsers, text: "Profesores", route: "/administrator/professors" },
//     { icon: faBook, text: "Asignaturas", route: "/administrator/subjects" },
//   ];

//   return (
//     <div className="flex">
//       <Sidebar role={"Administrador"} items={items} />

//       <div className="w-full m-8">
//         <h1 className="text-center text-2xl md:text-3xl font-bold mb-4">Listado de Estudiantes </h1>
//         <Table
//           columns={columns}
//           data={data}
//           customStyles={customStyles}
//           buttontext={"Agregar Estudiante"}
//           placeholder={"Buscar por nombre, carrera o semestre"}
//           filterFunction={filterFunction}
//           route={"/administrator/estudents/add"}
//         />
//       </div>
//     </div>
//   );
// }

// export default Estudents;

//VICTOR DIAZ // ADAPTADO A LA ESTETICA DE LA TABLA DE PRESENTACION QUE YA TENIA DIONNER
"use client";

import React, { useState, useEffect } from "react";
import Sidenav from "@/components/components-diaz/Sidenav/Sidenav"
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

function Estudents() {
  const router = useRouter();
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /* Fetch data from API */
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch(`/api/students`);
        const data = await res.json();
        setStudents(
          data.map((student) => ({
            nombre: student.Nombre,
            apellido: student.Apellidos,
            carrera: student.Carrera,
            sede: student.Sede
          }))
        );
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStudents();
  }, []);

  /* Table columns */
  const columns = [
    {
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: false,
    },
    {
      name: "Apellido",
      selector: (row) => row.apellido,
      sortable: false,
    },
    {
      name: "Carrera",
      selector: (row) => row.carrera,
      sortable: false,
    },
    {
      name: "Sede",
      selector: (row) => row.sede,
      sortable: false,
    },
    {
      name: "Acciones",
      cell: (row) => (
        <div className="flex space-x-2 md:space-x-8">
          <FontAwesomeIcon
            icon={faEye}
            className="cursor-pointer"
            title="Ver"
            // onClick={() => {
            //   router.push("/administrator/estudents/view");
            // }}
          />
          <FontAwesomeIcon
            icon={faEdit}
            className="cursor-pointer"
            title="Editar"
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

  /* Table styles */
  const customStyles = {
    headRow: {
      style: {
        fontWeight: "bold",
        fontSize: "18px",
        textAlign: "center",
      },
    },
    cells: {
      style: {
        fontWeight: "500",
        fontSize: "16px",
        textAlign: "center",
      },
    },
  };

  /* Filter function */
  const filterFunction = (data, query) => {
    const lowerCaseQuery = query.toLowerCase();
    return data.filter((record) => {
      return (
        record.nombre.toLowerCase().includes(lowerCaseQuery) ||
        record.apellido.toLowerCase().includes(lowerCaseQuery) ||
        record.carrera.toLowerCase().includes(lowerCaseQuery) ||
        record.sede.toLowerCase().includes(lowerCaseQuery)
      );
    });
  };
  
  return (
    <div className="flex flex-col lg:flex-row antialiased min-h-screen">
      {/* Sidebar */}
      <Sidenav className="" />
  
      {/* Main Content */}
      <div className="flex-1 lg:ml-64 p-4">
        <div className="m-4">
          <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            Listado de Estudiantes
          </h1>
  
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <p className="text-lg font-medium text-gray-600">Cargando datos...</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table
                columns={columns}
                data={students}
                customStyles={customStyles}
                buttontext="Agregar Estudiante"
                placeholder="Buscar por nombre, apellido, carrera o sede"
                filterFunction={filterFunction}
                route="/administrator/estudents/add"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
  
}

export default Estudents;

