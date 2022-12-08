// Por convencion se recomienda usar "use" en el nombre del hook, asi como useEffect, useState, etc.
import { useContext } from "react";
import ProveedorContext from "../context/ProveedorProvider";
// La logica va en que se utiliza usecontext para extraer los datos del context, pero debemos indicar de cual context, es por eso que importamos tambien el ProveedorContext

const useProveedor = () => {
    return useContext(ProveedorContext);
}

export default useProveedor;