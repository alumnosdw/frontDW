"use client";
import React from "react";
import Sidebar from "@/components/Sidebar";
import Table from "@/components/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faEdit, faEye, faGraduationCap, faHome, faTrash, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

function professors() {
  const router = useRouter();

  /* Cabeceras de la tabla */
  const columns = [
    {
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name: "Departamento",
      selector: (row) => row.departamento,
      sortable: true,
    },
    {
      name: "estatus",
      selector: (row) => row.estatus,
      cell: row => (
        <div style={{
          backgroundColor: row.estatus === 'Activo' ? '#7FF8AA' : '#FECACA',
          color:row.estatus === 'Activo' ? '#166534' : '#991B1B',
          width: '5rem',
          padding: '0.25rem 0.5rem',
          borderRadius: '0.25rem',
          display: 'inline-block',
          textAlign: 'center',
        }}>
          {row.estatus}
        </div>),
    },
    {
      name: "Acciones",
      cell: (row) => (
        <div className="flex space-x-2 md:space-x-8 ">
          <FontAwesomeIcon
            icon={faEye}
            className="cursor-pointer"
            title="Ver"
            onClick={() => {router.push('/administrator/professors/view')}}
          />
          <FontAwesomeIcon
            icon={faEdit}
            className="cursor-pointer"
            title="Editar"
            onClick={() => {router.push('/administrator/professors/add')}}
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
  /* Datos de la tabla */
  const data = [
    {
      nombre: "Juan Pérez",
      departamento: "Informática",
      estatus: "Activo",
    },
    {
      nombre: "María Rodríguez",
      departamento: "Biología",
      estatus: "Inactivo",
    },
    {
      nombre: "Carlos Martínez",
      departamento: "Historia",
      estatus: "Activo",
    },
    {
      nombre: "Ana García",
      departamento: "Matemáticas",
      estatus: "Activo",
    },
    {
      nombre: "Pedro López",
      departamento: "Literatura",
      estatus: "Inactivo",
    },
    {
      nombre: "Sofía Fernández",
      departamento: "Química",
      estatus: "Activo",
    },
  ];
  /* Estilos para la tabla */
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
/* Funcion para filtrar las busquedas */
  const filterFunction = (data, query) => {
    return data.filter((record) => {
      return (
        record.nombre.toLowerCase().includes(query.toLowerCase()) ||
        record.departamento.toLowerCase().includes(query.toLowerCase())
      );
    });
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

      <Sidebar role="administrator"  items={items} />
    
      <div className="w-full m-8">
        <h1 className="text-center text-2xl md:text-3xl font-bold mb-4">Listado de Profesores </h1>
        <Table
          columns={columns}
          data={data}
          customStyles={customStyles}
          buttontext={"Agregar Profesor"}
          placeholder={"Buscar por nombre o departamento"}
          filterFunction={filterFunction}
          route={"/administrator/professors/add"}
        />
      </div>
    </div>
  );
}

export default professors;
