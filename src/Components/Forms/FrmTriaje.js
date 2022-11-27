import { useContext, useState } from "react";
import generalContext from "../../context/generalContext";
//import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import microphoneIcon from "../../assets/microphone.svg";
import microEncendidoIcon from "../../assets/microencendido.png";
import microApagadoIcon from "../../assets/microapagado.png";
import AlertContext from "../../context/alerts/alertContext";
const FrmTriaje = () => {
  const alertContext = useContext(AlertContext);
  const { mostrarAlerta } = alertContext;

  const generalsContext = useContext(generalContext);
  const { switchModalGuardado, agregarPaciente } = generalsContext;

  const [microphone, switchMicrophone] = useState(false);

  const [paciente, guardarInfoPaciente] = useState({
    apellidos: "",
    nombres: "",
    edad: "",
    peso: "",
    talla: "",
    temperatura: "",
    presionarterial: "",
    frecuenciarespiratoria: "",
    imc: "",
    frecuenciacardiaca: "",
    pruebacovid: "",
  });

  const {
    apellidos,
    nombres,
    edad,
    peso,
    talla,
    temperatura,
    presionarterial,
    frecuenciarespiratoria,
    imc,
    frecuenciacardiaca,
    pruebacovid,
  } = paciente;

  const onChangeFrm = (e) => {
    guardarInfoPaciente({
      ...paciente,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitP = (e) => {
    e.preventDefault();

    // validar campos vacios
    if (
      apellidos === "" ||
      nombres === "" ||
      edad === "" ||
      peso === "" ||
      talla === "" ||
      temperatura === "" ||
      presionarterial === "" ||
      frecuenciarespiratoria === "" ||
      imc === "" ||
      frecuenciacardiaca === ""
    ) {

      mostrarAlerta(
        "Asegúrece de rellenar todos los campos",
        "bg-yellow-300 text-yellow-800"
      );

    } else {
      // validar que no se ingresen caracteres extraños o indevidos


      if (edad.match(/^[0-9]+$/) 
      && talla.match(/^[0-9]+$/)
      && temperatura.match(/^[0-9]+$/)
      && frecuenciacardiaca.match(/^[0-9]+$/)
      && frecuenciarespiratoria.match(/^[0-9]+$/)
      ) {
        
      agregarPaciente(paciente);
      // reiniciar el formulario

      guardarInfoPaciente({
        apellidos: "",
        nombres: "",
        edad: "",
        peso: "",
        talla: "",
        temperatura: "",
        presionarterial: "",
        frecuenciarespiratoria: "",
        imc: "",
        frecuenciacardiaca: "",
        pruebacovid: "",
      });

      switchModalGuardado(true);
      }else{

       mostrarAlerta(
        "Asegúrece de ingresar los caracteres correctos, Ingrese solo números en las casillas que correspondan a caracteres numéricos",
        "bg-red-300 text-red-800"
      );

      }







    }
  };

  // Para el reconocimiento de voz

  var SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.lang = "es-ES";
  recognition.interimResults = false;

  const toogleMicrophoneApellidos = () => {
    if (!microphone) {
      paciente.apellidos = "";
      recognition.start();
      console.log("encendido");

      recognition.onresult = (e) => {
        const results = e.results;
        const frase = results[results.length - 1][0].transcript;
        console.log(frase);
        paciente.apellidos = frase;
      };
    } else {
      recognition.abort();
      console.log("apagado");
    }
    switchMicrophone(!microphone);
  };

  const toogleMicrophoneNombres = () => {
    if (!microphone) {
      paciente.nombres = "";
      recognition.start();
      console.log("encendido");

      recognition.onresult = (e) => {
        const results = e.results;
        const frase = results[results.length - 1][0].transcript;
        console.log(frase);
        paciente.nombres = frase;
      };
    } else {
      recognition.abort();
      console.log("apagado");
    }
    switchMicrophone(!microphone);
  };

  const toogleMicrophoneEdad = () => {
    if (!microphone) {
      paciente.edad = "";
      recognition.start();
      console.log("encendido");

      recognition.onresult = (e) => {
        const results = e.results;
        const frase = results[results.length - 1][0].transcript;
        console.log(frase);
        paciente.edad = frase;
      };
    } else {
      recognition.abort();
      console.log("apagado");
    }
    switchMicrophone(!microphone);
  };

  const toogleMicrophonePeso = () => {
    if (!microphone) {
      paciente.peso = "";
      recognition.start();
      console.log("encendido");

      recognition.onresult = (e) => {
        const results = e.results;
        const frase = results[results.length - 1][0].transcript;
        console.log(frase);
        paciente.peso = frase;
      };
    } else {
      recognition.abort();
      console.log("apagado");
    }
    switchMicrophone(!microphone);
  };

  const toogleMicrophoneTalla = () => {
    if (!microphone) {
      paciente.talla = "";
      recognition.start();
      console.log("encendido");

      recognition.onresult = (e) => {
        const results = e.results;
        const frase = results[results.length - 1][0].transcript;
        console.log(frase);
        paciente.talla = frase;
      };
    } else {
      recognition.abort();
      console.log("apagado");
    }
    switchMicrophone(!microphone);
  };

  const toogleMicrophoneTemperatura = () => {
    if (!microphone) {
      paciente.temperatura = "";
      recognition.start();
      console.log("encendido");

      recognition.onresult = (e) => {
        const results = e.results;
        const frase = results[results.length - 1][0].transcript;
        console.log(frase);
        paciente.temperatura = frase;
      };
    } else {
      recognition.abort();
      console.log("apagado");
    }
    switchMicrophone(!microphone);
  };

  const toogleMicrophonePresionarterial = () => {
    if (!microphone) {
      paciente.presionarterial = "";
      recognition.start();
      console.log("encendido");

      recognition.onresult = (e) => {
        const results = e.results;
        const frase = results[results.length - 1][0].transcript;
        console.log(frase);
        paciente.presionarterial = frase;
      };
    } else {
      recognition.abort();
      console.log("apagado");
    }
    switchMicrophone(!microphone);
  };

  const toogleMicrophoneFrecuenciarespiratoria = () => {
    if (!microphone) {
      paciente.frecuenciarespiratoria = "";
      recognition.start();
      console.log("encendido");

      recognition.onresult = (e) => {
        const results = e.results;
        const frase = results[results.length - 1][0].transcript;
        console.log(frase);
        paciente.frecuenciarespiratoria = frase;
      };
    } else {
      recognition.abort();
      console.log("apagado");
    }
    switchMicrophone(!microphone);
  };

  const toogleMicrophoneImc = () => {
    if (!microphone) {
      paciente.imc = "";
      recognition.start();
      console.log("encendido");

      recognition.onresult = (e) => {
        const results = e.results;
        const frase = results[results.length - 1][0].transcript;
        console.log(frase);
        paciente.imc = frase;
      };
    } else {
      recognition.abort();
      console.log("apagado");
    }
    switchMicrophone(!microphone);
  };

  const toogleMicrophoneFrecuenciacardiaca = () => {
    if (!microphone) {
      paciente.frecuenciacardiaca = "";
      recognition.start();
      console.log("encendido");

      recognition.onresult = (e) => {
        const results = e.results;
        const frase = results[results.length - 1][0].transcript;
        console.log(frase);
        paciente.frecuenciacardiaca = frase;
      };
    } else {
      recognition.abort();
      console.log("apagado");
    }
    switchMicrophone(!microphone);
  };


const cancelarBtn = ()=>{
  guardarInfoPaciente({
    apellidos: "",
    nombres: "",
    edad: "",
    peso: "",
    talla: "",
    temperatura: "",
    presionarterial: "",
    frecuenciarespiratoria: "",
    imc: "",
    frecuenciacardiaca: "",
    pruebacovid: "",
  });
}

  return (
  

    <form
      onSubmit={onSubmitP}
      className="grid grid-cols-1 gap-4 text-md p-4 h-full w-full md:p-8  md:h-full rounded-2xl bg-slate-50 overflow-auto"
    >
      <div className="relative flex">
        <h1 className="text-2xl md:text-center md:text-4xl text-cyan-700  w-full mb-4">
          Triaje
        </h1>

        <div className="flex absolute right-0 rounded-lg border-2 border-cyan-200 shadow-lg">
          <img
            src={microApagadoIcon}
            alt="icono"
            className={
              !microphone
                ? " bg-cyan-700 h-10 p-2 rounded-lg"
                : " h-10 p-2 rounded-l-lg"
            }
          />
          <img
            src={microEncendidoIcon}
            alt="icono"
            className={
              microphone
                ? "animate-pulse bg-cyan-700 h-10 p-2 rounded-r-lg"
                : " h-10 p-2 rounded-r-lg"
            }
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid grid-cols-1 gap-2  text-cyan-600">
          <span>Apellidos:</span>
          <div className="flex relative">
            <input
              type="text"
              className="w-full border-2 px-2 text-cyan-700 capitalize outline-0"
              name="apellidos"
              value={apellidos}
              onChange={onChangeFrm}
            ></input>

            <button
              type="button"
              className="absolute right-0 bg-slate-200 hover:bg-cyan-400 active:bg-cyan-300 h-full"
              onClick={toogleMicrophoneApellidos}
            >
              <img
                src={microphoneIcon}
                className="w-5 mt-1 text-red-500"
                alt="icono"
              />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2  text-cyan-600">
          <span>Nombres:</span>

          <div className="flex relative">
            <input
              type="text"
              className="w-full border-2 px-2 text-cyan-700 outline-0"
              name="nombres"
              value={nombres}
              onChange={onChangeFrm}
            ></input>

            <button
              type="button"
              className="absolute right-0 bg-slate-200 hover:bg-cyan-400 active:bg-cyan-300 h-full"
              onClick={toogleMicrophoneNombres}
            >
              <img
                src={microphoneIcon}
                className="w-5 mt-1 text-red-500"
                alt="icono"
              />
            </button>
          </div>
        </div>

      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-2  text-cyan-600">
        <div className="grid grid-cols-1 gap-2  text-cyan-600">
          <span>Edad:</span>

          <div className="flex relative">
            <input
              type="text"
              className="w-full border-2 px-2 text-cyan-700 outline-0"
              name="edad"
              value={edad}
              onChange={onChangeFrm}
              placeholder='0'
            ></input>

            <button
              type="button"
              className="absolute right-0 bg-slate-200 hover:bg-cyan-400 active:bg-cyan-300 h-full"
              onClick={toogleMicrophoneEdad}
            >
              <img
                src={microphoneIcon}
                className="w-5 mt-1 text-red-500"
                alt="icono"
              />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2  text-cyan-600">
          <span>Peso(kg):</span>

          <div className="flex relative">
            <input
              type="text"
              className="w-full border-2 px-2 text-cyan-700 outline-0"
              name="peso"
              value={peso}
              onChange={onChangeFrm}
              placeholder='0.0'
            ></input>

            <button
              type="button"
              className="absolute right-0 bg-slate-200 hover:bg-cyan-400 active:bg-cyan-300 h-full"
              onClick={toogleMicrophonePeso}
            >
              <img
                src={microphoneIcon}
                className="w-5 mt-1 text-red-500"
                alt="icono"
              />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2  text-cyan-600">
          <span>Talla(cm):</span>

          <div className="flex relative">
            <input
              type="text"
              className="w-full border-2 px-2 text-cyan-700 outline-0"
              name="talla"
              value={talla}
              onChange={onChangeFrm}
              placeholder='0'
            ></input>

            <button
              type="button"
              className="absolute right-0 bg-slate-200 hover:bg-cyan-400 active:bg-cyan-300 h-full"
              onClick={toogleMicrophoneTalla}
            >
              <img
                src={microphoneIcon}
                className="w-5 mt-1 text-red-500"
                alt="icono"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-3 gap-2  text-cyan-600">
        <div className="grid grid-cols-1 gap-2  text-cyan-600">
          <span>Temperatura(ºC):</span>

          <div className="flex relative">
            <input
              type="text"
              className="w-full border-2 px-2 text-cyan-700 outline-0"
              name="temperatura"
              value={temperatura}
              onChange={onChangeFrm}
              placeholder='0'
            ></input>

            <button
              type="button"
              className="absolute right-0 bg-slate-200 hover:bg-cyan-400 active:bg-cyan-300 h-full"
              onClick={toogleMicrophoneTemperatura}
            >
              <img
                src={microphoneIcon}
                className="w-5 mt-1 text-red-500"
                alt="icono"
              />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2  text-cyan-600">
          <span>Presión arterial(mmHg):</span>

          <div className="flex relative">
            <input
              type="text"
              className="w-full border-2 px-2 text-cyan-700 outline-0"
              name="presionarterial"
              value={presionarterial}
              onChange={onChangeFrm}
              placeholder="120/80"
            ></input>

            <button
              type="button"
              className="absolute right-0 bg-slate-200 hover:bg-cyan-400 active:bg-cyan-300 h-full"
              onClick={toogleMicrophonePresionarterial}
            >
              <img
                src={microphoneIcon}
                className="w-5 mt-1 text-red-500"
                alt="icono"
              />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2  text-cyan-600">
          <span>Frecuencia respiratoria(x'):</span>

          <div className="flex relative">
            <input
              type="text"
              className="w-full border-2 px-2 text-cyan-700 outline-0"
              name="frecuenciarespiratoria"
              value={frecuenciarespiratoria}
              onChange={onChangeFrm}
              placeholder="0"
            ></input>
            <button
              type="button"
              className="absolute right-0 bg-slate-200 hover:bg-cyan-400 active:bg-cyan-300 h-full"
              onClick={toogleMicrophoneFrecuenciarespiratoria}
            >
              <img
                src={microphoneIcon}
                className="w-5 mt-1 text-red-500"
                alt="icono"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2  text-cyan-600">
        <div className="grid grid-cols-1 gap-2  text-cyan-600">
          <span>IMC:</span>

          <div className="flex relative">
            <input
              type="text"
              className="w-full border-2 px-2 text-cyan-700 outline-0"
              name="imc"
              value={imc}
              onChange={onChangeFrm}
              placeholder="0.0"
            ></input>
            <button
              type="button"
              className="absolute right-0 bg-slate-200 hover:bg-cyan-400 active:bg-cyan-300 h-full"
              onClick={toogleMicrophoneImc}
            >
              <img
                src={microphoneIcon}
                className="w-5 mt-1 text-red-500"
                alt="icono"
              />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2  text-cyan-600">
          <span>Frecuencia cardíaca(x'):</span>

          <div className="flex relative">
            <input
              type="text"
              className="w-full border-2 px-2 text-cyan-700 outline-0"
              name="frecuenciacardiaca"
              value={frecuenciacardiaca}
              onChange={onChangeFrm}
              placeholder="0"
            ></input>

            <button
              type="button"
              className="absolute right-0 bg-slate-200 hover:bg-cyan-400 active:bg-cyan-300 h-full"
              onClick={toogleMicrophoneFrecuenciacardiaca}
            >
              <img
                src={microphoneIcon}
                className="w-5 mt-1 text-red-500"
                alt="icono"
              />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2  text-cyan-600">
          <span>Prueba covid:</span>
          <select
            className="text-gray-500 w-full border-2 outline-0"
            name="pruebacovid"
            value={pruebacovid}
            onChange={onChangeFrm}
          >
            <option value="comida rapida">Seleccione</option>
            <option>Positivo</option>
            <option>Negativo</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end text-white gap-4 ">
        <button
          onClick={cancelarBtn}
          type="button"
          className="bg-red-400 px-2 py-1 rounded-md hover:bg-red-500"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="bg-cyan-500 px-2 py-1 rounded-md hover:bg-cyan-600"
          
        >
          Guardar
        </button>
      </div>
    </form>

  );
};

export default FrmTriaje;
