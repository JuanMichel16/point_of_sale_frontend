import {useState, useEffect, createContext} from "react";
import clienteAxios from "../config/axios";

// Creando context
const AuthContext = createContext();

// Children es una prop especial de un context para saber que es lo que pertenece a ese context
const AuthProvider = ({children}) => {
    // Para extraer estos valores haremos uso de un custom hook
    const [cargando, setCargando] = useState(true);
    const [auth, setAuth] = useState({});

    useEffect(() => {
        //Si no hay token, te saca de la funcion
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token');

            if(!token) {
                setCargando(false);
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
                const { data } = await clienteAxios('/users/perfil', config);
                //Pasando la informacion del usuario en el context global
                setAuth(data);
            } catch (error) {
                console.log(error.response.data.msg);
                setAuth({});
            }

            setCargando(false);
        }
        autenticarUsuario();
    }, [])


    const cerrarSesion = () => {
        localStorage.removeItem('token')
        setAuth({});
    }

    return (
        <AuthContext.Provider
        // Con el value indico que es a lo que los componentes hijos pueden acceder de este context
            value={{
                auth,
                setAuth,
                cargando,
                cerrarSesion
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}

export {
    AuthProvider
}

export default AuthContext;