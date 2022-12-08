// Por convencion se recomienda usar "use" en el nombre del hook, asi como useEffect, useState, etc.
import { useContext } from "react";
import ProductContext from "../context/ProductsProvider";
// La logica va en que se utiliza usecontext para extraer los datos del context, pero debemos indicar de cual context, es por eso que importamos tambien el ProductContext

const useProducts = () => {
    return useContext(ProductContext);
}

export default useProducts;