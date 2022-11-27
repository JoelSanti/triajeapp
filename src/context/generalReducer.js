import { AGREGAR_PACIENTE, TOOGLE_MODAL } from "../types";

export default (state,action)=>{

    switch(action.type){
    case AGREGAR_PACIENTE:
        return{
            ...state,
            listaPacientes:[...state.listaPacientes,action.payload]
        }
    case TOOGLE_MODAL:
        return{
            ...state,
            modalGuardado:!state.modalGuardado
        }
    
    default:
         return state;
    }


}