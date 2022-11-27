

const Patient = ({patient})=> {
    return(
      
      <tr>
        <td className="text-start border border-cyan-500 px-2 py-1 capitalize"> {patient.apellidos} {patient.nombres}</td>
        <td className="text-start border border-cyan-500 px-2 py-1 ">{patient.edad} años</td>
        <td className="text-start border border-cyan-500 px-2 py-1">{patient.peso} kg</td>
        <td className="text-start border border-cyan-500 px-2 py-1">{patient.talla} cm</td>
        <td className="text-start border border-cyan-500 px-2 py-1">{patient.temperatura}º</td>
        <td className="text-start border border-cyan-500 px-2 py-1">{patient.presionarterial}mmHg</td>
        <td className="text-start border border-cyan-500 px-2 py-1">{patient.frecuenciarespiratoria}x'</td>
        <td className="text-start border border-cyan-500 px-2 py-1">{patient.imc}</td>
        <td className="text-start border border-cyan-500 px-2 py-1">{patient.frecuenciacardiaca}x'</td>
        <td className="text-start border border-cyan-500 px-2 py-1">{patient.pruebacovid}</td>
       
      </tr>

);

}


export default Patient;