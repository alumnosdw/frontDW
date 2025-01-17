import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

/* 
Tabla para mostrar el listado de elementos (profesores, alumnos, materias, etc) recube las columnas, los datos, los estilos de la tabla, el placeholder y la funcion para filtrar la busqueda por promps. el promp route es para el boton de agregar
*/

function Table({ columns, data, customStyles, buttontext, placeholder, filterFunction, route }) {
  const [isClient, setIsClient] = useState();
  const [records, setRecords] = useState(data);
  const router = useRouter();

  const handleChange = (e) => {
    const filteredData = filterFunction(data, e.target.value);
    setRecords(filteredData);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row justify-between items-center flex-wrap gap-5 mb-4">
        {/* Input para la busqueda de elementos */}
        <input
          type="text"
          className="w-full md:w-80 h-10 p-2 border-2 border-gray-500 rounded-lg shadow-gray-300 shadow-md"
          placeholder={placeholder}
          onChange={handleChange}
        />
        {/* Boton para agregar un nuevo elemento */}
        <button 
          className="mt-2 md:mt-0 p-2 h-10 bg-black text-white text-lg font-bold rounded-lg flex items-center justify-center shadow-gray-300 shadow-lg" 
          onClick={() => {router.push(route)}}
        >
          <FontAwesomeIcon icon={faPlus} className="pr-2" />
          <p>{buttontext}</p>
        </button>
      </div>

      <DataTable
        columns={columns}
        data={records}
        customStyles={customStyles}
        pagination
        paginationPerPage={5}
      />
    </div>
  );
}

export default Table;