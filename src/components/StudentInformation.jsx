import React from "react";
import Button from "@/components/Button";

function StudentInformation({ studentData }) {
  return (
    <div className="w-full m-4 flex flex-col items-center px-4"> 
      <section className="w-full md:w-11/12 h-fit p-4 flex justify-center flex-wrap gap-4 border-2 border-gray-300 rounded-lg shadow-md mb-4">
        <div className="w-full">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4"> 
            Datos Personales
          </h2>

          <div className="flex flex-col md:flex-row justify-around gap-4"> 
            <div className="flex flex-col gap-2 md:gap-5"> 
              <div>
                <p className="text-sm md:text-base font-bold pb-1">Cédula:</p> 
                <p className="text-sm md:text-base font-bold pb-1">Nombres:</p> 
                <p className="text-sm md:text-base font-bold pb-1">Apellidos:</p> 
                <p className="text-sm md:text-base font-bold pb-1">Unidades Cursadas:</p> 
                <p className="text-sm md:text-base font-bold pb-1">Unidades Aprobadas:</p> 
                <p className="text-sm md:text-base font-bold pb-1">Correo Personal:</p> 
                <p className="text-sm md:text-base font-bold pb-1">Telefono Personal:</p> 
              </div>

              <div>
                <p className="text-sm md:text-base font-semibold pb-1"> 
                  {studentData.cedula}
                </p>
                <p className="text-sm md:text-base font-semibold pb-1"> 
                  {studentData.nombres}
                </p>
                <p className="text-sm md:text-base font-semibold pb-1"> 
                  {studentData.apellidos}
                </p>
                <p className="text-sm md:text-base font-semibold pb-1"> 
                  {studentData.unidadesCursadas}
                </p>
                <p className="text-sm md:text-base font-semibold pb-1"> 
                  {studentData.unidadesAprobadas}
                </p>
                <p className="text-sm md:text-base font-semibold pb-1"> 
                  {studentData.correoPersonal}
                </p>
                <p className="text-sm md:text-base font-semibold pb-1"> 
                  {studentData.telefonoPersonal}
                </p>
              </div>
            </div>

             <div className="flex flex-col gap-2 md:gap-5">
              <div>
                <p className="text-sm md:text-base font-bold pb-1">Estatus:</p> 
                <p className="text-sm md:text-base font-bold pb-1">Sede:</p> 
                <p className="text-sm md:text-base font-bold pb-1">Carrera:</p> 
                <p className="text-sm md:text-base font-bold pb-1">Indice Academico:</p> 
                <p className="text-sm md:text-base font-bold pb-1">Nivel:</p> 
                <p className="text-sm md:text-base font-bold pb-1">Correo Alternativo:</p> 
                <p className="text-sm md:text-base font-bold pb-1">
                  Telefono de casa:
                </p> 
              </div>

              <div>
                <p
                  className={`text-center text-sm md:text-base font-semibold pb-1 rounded ${
                    studentData.estatus === "Activo"
                      ? "bg-green-200 text-green-900"
                      : "bg-red-200 text-red-900"
                  }`}
                >
                  {studentData.estatus}
                </p>
                <p className="text-sm md:text-base font-semibold pb-1"> 
                  {studentData.sede}
                </p>
                <p className="text-sm md:text-base font-semibold pb-1"> 
                  {studentData.carrera}
                </p>
                <p className="text-sm md:text-base font-semibold pb-1"> 
                  {studentData.indiceAcademico}
                </p>
                <p className="text-sm md:text-base font-semibold pb-1"> 
                  {studentData.nivel}
                </p>
                <p className="text-sm md:text-base font-semibold pb-1"> 
                  {studentData.correoAlternativo}
                </p>
                <p className="text-sm md:text-base font-semibold pb-1"> 
                  {studentData.telefonoAlternativo}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full md:w-11/12 h-fit p-4 flex justify-center flex-wrap gap-4 border-2 border-gray-300 rounded-lg shadow-md mb-4"> {/* Ajuste de ancho y gap */}
        <div className="w-full">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4"> 
            Datos de Nacimiento
          </h2>

          <div className="flex flex-col md:flex-row justify-around gap-4"> 
            <div className="flex flex-col gap-2 md:gap-5"> 
              <div>
                <p className="text-sm md:text-base font-bold pb-1">Fecha:</p> 
                <p className="text-sm md:text-base font-bold pb-1">Sexo:</p> 
                <p className="text-sm md:text-base font-bold pb-1">Estado Civil:</p> 
              </div>

              <div>
                <p className="text-sm md:text-base font-semibold pb-1"> 
                  {studentData.fecha}
                </p>
                <p className="text-sm md:text-base font-semibold pb-1"> 
                  {studentData.sexo}
                </p>
                <p className="text-sm md:text-base font-semibold pb-1"> 
                  {studentData.estadoCivil}
                </p>
              </div>
            </div>

             <div className="flex flex-col gap-2 md:gap-5"> 
              <div>
                <p className="text-sm md:text-base font-bold pb-1">Pais:</p> 
                <p className="text-sm md:text-base font-bold pb-1">Estado:</p> 
                <p className="text-sm md:text-base font-bold pb-1">Ciudad:</p> 
              </div>

              <div>
                <p className="text-sm md:text-base font-semibold pb-1"> 
                  {studentData.pais}
                </p>
                <p className="text-sm md:text-base font-semibold pb-1"> 
                  {studentData.estado}
                </p>
                <p className="text-sm md:text-base font-semibold pb-1"> 
                  {studentData.ciudad}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full md:w-11/12 h-fit p-4 flex justify-center flex-wrap gap-4 border-2 border-gray-300 rounded-lg shadow-md mb-4"> {/* Ajuste de ancho y gap */}
        <div className="w-full">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Dirección</h2> 

          <div className="flex flex-col justify-evenly gap-4"> {/* Ajuste del flex */}

            <div className="flex gap-2">
              <p className="text-sm md:text-base font-bold pb-1">Dirección:</p> 
              <p className="text-sm md:text-base font-bold pb-1"> 
                {studentData.direccion}
              </p>
            </div>

            <div className="flex flex-wrap  gap-4"> {/* Ajuste del flex y el gap */}

              <div className="flex flex-1 gap-2"> {/* Ajuste de gap */}
                <p className="text-sm md:text-base font-bold pb-1">Email:</p> 
                <p className="text-sm md:text-base font-bold pb-1"> 
                  {studentData.email}
                </p>
              </div>

              <div className="flex flex-1 gap-2"> {/* Ajuste de gap */}
                <p className="text-sm md:text-base font-bold pb-1">Celular:</p> 
                <p className="text-sm md:text-base font-bold pb-1"> 
                  {studentData.telefonoPersonal}
                </p>
              </div>

              <div className="flex flex-1 gap-2"> {/* Ajuste de gap */}
                <p className="text-sm md:text-base font-bold pb-1">Telefono:</p> 
                <p className="text-sm md:text-base font-bold pb-1"> 
                  {studentData.telefonoAlternativo}
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <div className="w-full md:w-11/12 flex flex-col md:flex-row justify-between items-center gap-4"> {/* Ajuste de ancho y gap */}

      <Button 
      textButton={"Regresar"}
      route={"/administrator/estudents"}
      />

      <Button 
      mode={"dark"}
      textButton={"Editar Perfil"}
      route={"/administrator/estudents/add"}
      />
        
      </div>

    </div>
  );
}

export default StudentInformation;