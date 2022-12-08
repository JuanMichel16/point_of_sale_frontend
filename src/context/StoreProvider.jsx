import {useState, useEffect, createContext} from "react";
import clienteAxios from "../config/axios";

// Creando context
const StoreContext = createContext();

// Children es una prop especial de un context para saber que es lo que pertenece a ese context
const StoreProvider = ({children}) => {
    // Para extraer estos valores haremos uso de un custom hook
    // const [cargando, setCargando] = useState(true);
    const [store, setStore] = useState({});

    useEffect(() => {
        //Si no hay token, te saca de la funcion
        const guardarStore = async () => {
            const token = localStorage.getItem('token');

            if(!token) {
                return;
            }

            // Estos headers se envian antes que toda la peticion. Es la autorizacion
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            };

            try {
                const { data } = await clienteAxios('/store/', config);
                //Pasando la informacion del usuario en el context global
                setStore(data);
            } catch (error) {
                console.log(error.response.data.msg);
                setStore({});
            }
        }
        guardarStore();
    }, [])


    return (
        <StoreContext.Provider
        // Con el value indico que es a lo que los componentes hijos pueden acceder de este context
            value={{
                store
            }}
        >
            {children}
        </StoreContext.Provider>
    )

}

export {
    StoreProvider
}

export default StoreContext;