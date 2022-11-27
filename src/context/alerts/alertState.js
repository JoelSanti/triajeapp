import { useReducer } from "react";
import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../../types";
import alertContext from "./alertContext";
import alertReducer from "./alertReducer";



const AlertState = props =>{


    const initialState = {
        alerta:null
      }
      
      
    const [state , dispatch] = useReducer(alertReducer, initialState)

    const mostrarAlerta = (msg,ctg)=>{
        dispatch({
            type:MOSTRAR_ALERTA,
            payload:{
                msg,
                ctg
            }
        });

        setTimeout(() => {
            dispatch({
                type:OCULTAR_ALERTA 
            });
        }, 5000);
    }

    return (
        <alertContext.Provider
        value = {{
          alerta:state.alerta,
          mostrarAlerta
        }}
        >
        {props.children}
        </alertContext.Provider>
)



}


export default AlertState;