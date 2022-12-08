import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth.jsx";

import Header from "../components/Header";
import Navegacion from "../components/Navegacion";
const RutaProtegida = () => {

    const { auth, cargando } = useAuth();

    console.log(auth);
    console.log(cargando);


    if(cargando) return 'cargando...'

    return ( 
        <>
        <Header/>
        <Navegacion/>
        {auth?._id ? <Outlet/> : <Navigate to={'/'}/>}
        </>
     );
}
 
export default RutaProtegida;