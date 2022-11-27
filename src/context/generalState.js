import {useReducer} from "react";
import generalContext from "./generalContext";
import generalReducer from "./generalReducer";
import { AGREGAR_PACIENTE, TOOGLE_MODAL } from "../types";
import { v4 as uuidv4 } from 'uuid';
const GeneralState = props =>{

const initialState = {
  listaPacientes: [],
  modalGuardado:false,
}


const [state , dispatch] = useReducer(generalReducer, initialState)


const agregarPaciente = (info)=>{
    info.id = uuidv4()
    dispatch({
        type:AGREGAR_PACIENTE,
        payload:info
    })
}

const switchModalGuardado = ()=> {
  dispatch({
    type:TOOGLE_MODAL
  })
}



return (
	<generalContext.Provider
	value = {{
	  listaPacientes:state.listaPacientes,
    modalGuardado:state.modalGuardado,
    agregarPaciente,
    switchModalGuardado
	}}
	>
	{props.children}
	</generalContext.Provider>
    )
}

export default GeneralState