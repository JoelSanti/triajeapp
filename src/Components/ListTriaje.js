import { Link } from "react-router-dom";
import PatientsList from "./Lists/PatientsList";


const ListTriaje = ()=>{
   

    return(
    <div className="h-screen md:pt-28 bg-gradient-to-r from-cyan-500 to-blue-500 py-4 md:py-0">

        <div className="flex flex-row flex-wrap justify-center items-center w-11/12 md:w-10/12 border-2 relative mx-auto p-12 md:p-12 lg:p-8 h-full md:h-5/6  rounded-2xl shadow-lg bg-slate-50 ">

 
        <div className="grid grid-cols-1 gap-4 p-4 absolute -left-10 rounded-lg bg-white shadow-md border-2 border-double border-cyan-100">
          
          <Link to="/"    className="p-2  rounded-lg bg-slate-200 hover:bg-cyan-400 active:bg-cyan-500 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
            </svg>
          </Link>
        

        <Link
          to="/Registro"
          className="p-2  rounded-lg bg-slate-200 hover:bg-cyan-400 active:bg-cyan-500 "
        >
          <svg
            className=""
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m11.25 6c.398 0 .75.352.75.75 0 .414-.336.75-.75.75-1.505 0-7.75 0-7.75 0v12h17v-8.75c0-.414.336-.75.75-.75s.75.336.75.75v9.25c0 .621-.522 1-1 1h-18c-.48 0-1-.379-1-1v-13c0-.481.38-1 1-1zm-2.011 6.526c-1.045 3.003-1.238 3.45-1.238 3.84 0 .441.385.626.627.626.272 0 1.108-.301 3.829-1.249zm.888-.889 3.22 3.22 8.408-8.4c.163-.163.245-.377.245-.592 0-.213-.082-.427-.245-.591-.58-.578-1.458-1.457-2.039-2.036-.163-.163-.377-.245-.591-.245-.213 0-.428.082-.592.245z"
              fillRule="nonzero"
            />
          </svg>
        </Link>

      
          <Link to="/Listado"    className="p-2  rounded-lg bg-slate-200 hover:bg-cyan-400 active:bg-cyan-500 ">
            <svg
              clipRule="evenodd"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m21 4c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-16.5.5h15v15h-15zm13.5 10.75c0-.414-.336-.75-.75-.75h-4.5c-.414 0-.75.336-.75.75s.336.75.75.75h4.5c.414 0 .75-.336.75-.75zm-11.772-.537 1.25 1.114c.13.116.293.173.455.173.185 0 .37-.075.504-.222l2.116-2.313c.12-.131.179-.296.179-.459 0-.375-.303-.682-.684-.682-.185 0-.368.074-.504.221l-1.66 1.815-.746-.665c-.131-.116-.293-.173-.455-.173-.379 0-.683.307-.683.682 0 .188.077.374.228.509zm11.772-2.711c0-.414-.336-.75-.75-.75h-4.5c-.414 0-.75.336-.75.75s.336.75.75.75h4.5c.414 0 .75-.336.75-.75zm-11.772-1.613 1.25 1.114c.13.116.293.173.455.173.185 0 .37-.074.504-.221l2.116-2.313c.12-.131.179-.296.179-.46 0-.374-.303-.682-.684-.682-.185 0-.368.074-.504.221l-1.66 1.815-.746-.664c-.131-.116-.293-.173-.455-.173-.379 0-.683.306-.683.682 0 .187.077.374.228.509zm11.772-1.639c0-.414-.336-.75-.75-.75h-4.5c-.414 0-.75.336-.75.75s.336.75.75.75h4.5c.414 0 .75-.336.75-.75z" />
            </svg>
          </Link>
      
      </div>

              <div className="w-full h-full">
                    <PatientsList />
              </div>
        </div>

    </div>
    );
}

export default ListTriaje;