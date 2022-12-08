import {
    Heading,
    Input,
    Button,
    Box,
    FormControl,
    FormLabel,
    Skeleton,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link as RouteLink, useParams, useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'
import useProducts from '../../hooks/useProducts';

const EditarProducto = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const { products, editarProducto } = useProducts();
    const toast = useToast();
    const params = useParams();
    let {id} = params;
    const [form, setForm] = useState({
        name: "",
        description: "",
        stock: 0,
        category: "",
        costPrice: 0,
        salePrice: 0,
        image: ""
    })


      function buscarProducto() {
        const productoSeleccionado = products.find((producto) => {
        return producto._id == id;
    });
    setForm(productoSeleccionado)
}

useEffect(() => {
    if (products.length > 0) {
        buscarProducto(products);
        setIsLoading(false);
    }else {
        setIsLoading(true)
    }
  }, [products]);

    const {name, description, stock, category, costPrice, salePrice, image} = form;

    const validateForm = () => {
        if(name === "" || description === "" || stock === "" || category === "", costPrice === "", salePrice === "", image === "") {
            toast({
                title: 'Hay campos vacios',
                description: "Los campos con * son obligatorios",
                status: 'error',
                duration: 9000,
                isClosable: true
            });
        }

        if(stock < 0 || costPrice <= 0 || salePrice <= 0) {
            toast({
                title: 'Error',
                description: "No puede haber valores igual o menor a 0",
                status: 'error',
                duration: 9000,
                isClosable: true
            });
        }

        editarProducto(id, form);
        navigate('/inventario');
    }
    return ( 
        <>
        {isLoading ? (
            <Skeleton />
        ) : (
            <Box h='100vh' bg={'brand.primario'}>
                <Heading p="40px 0 20px 0" color="#ad7b5b" textAlign="center">Editar Producto</Heading>

                <Box backgroundColor="whiteAlpha.900" borderRadius="5px" boxShadow="md" display="flex" flexDirection="column" justifyContent="center" alignItems="center" w="600px" m="0 auto" p="15px">

                    <FormControl id="name" isRequired>
                        <FormLabel m="20px 0 10px 0">Nombre</FormLabel>
                        <Input 
                            type='text'
                            name="name"
                            placeholder="Escribe tu nombre"
                            p="15px"
                            value={name}
                            onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
                            />
                    </FormControl>


                    <FormControl id="description" isRequired>
                        <FormLabel m="20px 0 10px 0">Descripción</FormLabel>
                        <Input 
                            type='text'
                            name="description"
                            placeholder="Describe el producto"
                            p="15px"
                            value={description}
                            onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
                            />
                    </FormControl>

                    <FormControl id="stock" isRequired>
                        <FormLabel m="20px 0 10px 0">Cantidad</FormLabel>
                        <Input 
                            type="number"
                            name="stock"
                            placeholder="Escribe la cantidad de unidades " 
                            p="15px"
                            value={stock}
                            onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
                            />
                    </FormControl>

                    <FormControl id="category" isRequired>
                        <FormLabel m="20px 0 10px 0">Categoria</FormLabel>
                        <Input 
                            type='string'
                            name="category"
                            placeholder="Joyeria, accesorio..." 
                            backgroundColor="#FFF"
                            p="15px"
                            value={category}
                            onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
                            />
                    </FormControl>

                    <FormControl id="costPrice" isRequired>
                        <FormLabel m="20px 0 10px 0">Precio de Costo</FormLabel>
                        <Input 
                            type='number'
                            name="costPrice"
                            placeholder="80" 
                            backgroundColor="#FFF"
                            p="15px"
                            value={costPrice}
                            onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
                            />
                    </FormControl>

                    <FormControl id="salePrice" isRequired>
                        <FormLabel m="20px 0 10px 0">Precio de Venta</FormLabel>
                        <Input 
                            type="number"
                            name="salePrice"
                            placeholder="100" 
                            backgroundColor="#FFF"
                            p="15px"
                            value={salePrice}
                            onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
                            />
                    </FormControl>

                    <FormControl id="image">
                        <FormLabel m="20px 0 10px 0">URL de la imagen</FormLabel>
                        <Input 
                            type="string"
                            name="image"
                            placeholder="URL de la imagen" 
                            backgroundColor="#FFF"
                            p="15px"
                            value={image}
                            onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
                            />
                    </FormControl>

                    <Button
                        borderRadius={0}
                        variant="solid"
                        backgroundColor="brand.secundario"
                        colorScheme="#8c532e"
                        color={"#000"}
                        width="full"
                        m="20px 0 20px 0"
                        onClick={(e) => validateForm(e)}
                    >
                    Guardar Cambios
                    </Button>
                </Box>
            </Box>
            )}
        </>
     );
}
 
export default EditarProducto;