// Por convencion se recomienda usar "use" en el nombre del hook, asi como useEffect, useState, etc.
import { useContext } from "react";
import StoreContext from "../context/StoreProvider";
// La logica va en que se utiliza usecontext para extraer los datos del context, pero debemos indicar de cual context, es por eso que importamos tambien el StoreContext

const useStore = () => {
    return useContext(StoreContext);
}

export default useStore;