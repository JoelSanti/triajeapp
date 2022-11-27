import videoIcon from "../../assets/video.png";
import jsIcon from "../../assets/javascript.png";
import gitHubIcon from "../../assets/github.png";
import reactIcon from "../../assets/physics.png";
import cssIcon from "../../assets/css.png";

const InfoHome = () => {
  return (
    <div className=" grid grid-cols-1  w-full h-full bg-slate-100 p-2 md:p-8 rounded-2xl border-2 border-gray-400 border-dotted text-cyan-700 overflow-auto">
      <h1 className="uppercase text-center font-serif font-thin text-2xl ">
        Información general de proyecto
      </h1>

      <p className="grid grid-cols-1 md:flex md:gap-1 w-4/6 mx-auto text-sm md:text-base">
      <b>Presentado por:</b> Santiago Martinez Joel Jhojan
      </p>

      <div className="grid grid-cols-1 gap-4 md:flex md:justify-between w-4/6 mx-auto text-sm md:text-base">
        <div>
          <h2 className="font-semibold">Enlaces:</h2>
          <ul className="ml-2 mt-4 grid grid-cols-1 gap-4">
            <li className="flex gap-2 ">
              Enlace al Github
              <img src={gitHubIcon} alt="icon" className="h-5 animate-pulse " />
            </li>
            <li className="flex gap-2">
              Enlace de video explicativo
              <img src={videoIcon} alt="icon" className="h-5 animate-pulse" />
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">Herramientas:</h2>
          <ul className="ml-2 mt-4 grid grid-cols-1 gap-4">
            <li className="flex gap-2">
              Javascript
              <img src={jsIcon} alt="icon" className="h-5" />
            </li>
            <li className="flex gap-2">
              React.js
              <img src={reactIcon} alt="icon" className="h-5" />
            </li>
            <li className="flex gap-2">
              TailwindCss
              <img src={cssIcon} alt="icon" className="h-5" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoHome;
