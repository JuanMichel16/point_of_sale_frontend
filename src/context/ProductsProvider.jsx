import {useState, useEffect, createContext} from "react";
import clienteAxios from "../config/axios";

// Creando context
const ProductContext = createContext();

// Children es una prop especial de un context para saber que es lo que pertenece a ese context
const ProductProvider = ({children}) => {
    // Para extraer estos valores haremos uso de un custom hook
    // const [cargando, setCargando] = useState(true);
    const [products, setProducts] = useState([]);

        useEffect(() => {
            const obtenerProductos = async () => {
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

                    const { data } = await clienteAxios('/inventory/', config);

                    setProducts(data)

                } catch (error) {

                    console.log(error);
                }
            }

        obtenerProductos();
    }, [])

    // //Si no hay token, te saca de la funcion
    const guardarProducto = async (product) => {
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
            const { data } = await clienteAxios.post('/inventory', product, config);
            //Pasando la informacion del usuario en el context global
            setProducts([data, ...products]);
        } catch (error) {
            console.log(error.response.data.msg);
        }
        // setCargando(false);
    }

    const editarProducto = async (id, productoEditado) => {

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
            const { data } = await clienteAxios.put(`/inventory/${id}`, productoEditado, config);
            console.log(data);
            //Pasando la informacion del usuario en el context global
            setProducts([...products, data]);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ProductContext.Provider
        // Con el value indico que es a lo que los componentes hijos pueden acceder de este context
            value={{
                products,
                guardarProducto,
                editarProducto
            }}
        >
            {children}
        </ProductContext.Provider>
    )

}


export {
    ProductProvider
}

export default ProductContext;