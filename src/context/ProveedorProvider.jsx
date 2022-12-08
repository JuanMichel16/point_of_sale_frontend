import {useState, useEffect, createContext} from "react";
import clienteAxios from "../config/axios";

// Creando context
const ProveedorContext = createContext();

// Children es una prop especial de un context para saber que es lo que pertenece a ese context
const ProveedorProvider = ({children}) => {
    // Para extraer estos valores haremos uso de un custom hook
    // const [cargando, setCargando] = useState(true);
    const [proveedores, setProveedores] = useState([]);
        useEffect(() => {
            const obtenerProveedores = async () => {
                const token = localStorage.getItem('token');
                if(!token) {
                    // setCargando(false);
                    return;
                }

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                };

                try {
                    const { data } = await clienteAxios('/providers', config);
                    setProveedores(data)
                } catch (error) {
                    console.log(error);
                }
            }

        obtenerProveedores();
    }, [])

    // //Si no hay token, te saca de la funcion
    const guardarProveedor = async (newProveedor) => {
        const token = localStorage.getItem('token');
        if(!token) {
            // setCargando(false);
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
            const { data } = await clienteAxios.post('/providers', newProveedor, config);
            console.log(data);
            //Pasando la informacion del usuario en el context global
            setProveedores([data, ...proveedores]);
        } catch (error) {
            console.log(error);
        }
    }

    const editarProveedor = async (id, proveedorEditado) => {

        const token = localStorage.getItem('token');
        if(!token) {
            // setCargando(false);
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
            const { data } = await clienteAxios.put(`/providers/${id}`, proveedorEditado, config);
            console.log(data);
            //Pasando la informacion del usuario en el context global
            // setProveedores([...proveedores, data]);
        } catch (error) {
            console.log(error);
        }
    }

    const eliminarProveedor = async (id) => {
        const token = localStorage.getItem('token');
        if(!token) {
            // setCargando(false);
            return;
        }

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };

        try {
            const { data } = await clienteAxios.delete(`/providers/${id}`, {config});
            console.log(data);
            //Pasando la informacion del usuario en el context global
            setProveedores([data, ...proveedores]);
        } catch(error) {
            console.log(error);
        }
    }
    return (
        <ProveedorContext.Provider
        // Con el value indico que es a lo que los componentes hijos pueden acceder de este context
            value={{
                proveedores,
                guardarProveedor,
                editarProveedor,
                eliminarProveedor
            }}>
            {children}
        </ProveedorContext.Provider>
    )
}


export {
    ProveedorProvider
}

export default ProveedorContext;