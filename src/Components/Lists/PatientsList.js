import { useContext } from "react";
import generalContext from "../../context/generalContext";
import Patient from "./Patient";

const PatientsList = () => {
  const generalsContext = useContext(generalContext);
  const { listaPacientes } = generalsContext;

  return (
    <div className="pt-8 bg-slate-50 h-full text-cyan-600 overflow-auto">
      <h1 className="text-center text-2xl text-cyan-700 mb-8">
        Listado de pacientes
      </h1>

      <table className="table-auto text-start border-collapse border border-cyan-500 text-sm mx-auto">
        <thead>
          <tr>
            <th className="text-start border border-cyan-500 px-2 py-1">
              Apellidos y Nombres
            </th>
            <th className="text-start border border-cyan-500 px-2 py-1">
              Edad
            </th>
            <th className="text-start border border-cyan-500 px-2 py-1">
              Peso
            </th>

            <th className="text-start border border-cyan-500 px-2 py-1">
              Talla
            </th>
            <th className="text-start border border-cyan-500 px-2 py-1">
              Temperatura
            </th>
            <th className="text-start border border-cyan-500 px-2 py-1">
              Presión arterial
            </th>

            <th className="text-start border border-cyan-500 px-2 py-1">
              Frecuencia respiratoria
            </th>
            <th className="text-start border border-cyan-500 px-2 py-1">IMC</th>
            <th className="text-start border border-cyan-500 px-2 py-1">
              Frecuencia cardíaca
            </th>
            <th className="text-start border border-cyan-500 px-2 py-1">
              Prueba covid
            </th>

          </tr>
        </thead>
        <tbody>
          {listaPacientes.length === 0 ? (
            <tr className=" ">
              <th colSpan="10" className="text-orange-400 mx-ato p-4">
                Aún no se han agregado pacientes
              </th>
            </tr>
          ) : (
            listaPacientes.map((patient) => (
              <Patient key={patient.id} patient={patient} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PatientsList;
