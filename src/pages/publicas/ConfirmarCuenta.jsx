import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Text, useToast } from "@chakra-ui/react";
import {
    Link as RouteLink
  } from "react-router-dom";

const ConfirmarCuenta = () => {

    // Obteniendo parametros de la url con useParams
    const params = useParams();
    const {token} = params;

    const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
    const toast = useToast();

    const confirmarCuenta = async () => {

        const url = `${import.meta.env.VITE_BACKEND_URL}/users/confirmar/${token}`;
        const peticion = await fetch(url);
        const data = await peticion.json();


        if(peticion.status === 404) {
            toast({
                title: 'Error',
                description: data.msg,
                status: 'error',
                duration: 8000,
                isClosable: true,
            })

            return;
        }
        
        setCuentaConfirmada(true);
        toast({
            title: 'Success',
            description: data.msg,
            status: 'success',
            duration: 8000,
            isClosable: true,   
        })

        // try {

        // } catch (error) {
        //     console.log(error.response.data);
        //     toast({
        //         title: 'Error',
        //         description: error.response.data,
        //         status: 'error',
        //         duration: 8000,
        //         isClosable: true,
        //     })
        // }
    }


    useEffect(() => {
        confirmarCuenta();
    }, [])


    return ( 
        <>
        <Box bg={'brand.primario'} h='100vh' p="20px">

            <Box textAlign={'center'} mb="40px">
                <Text fontSize='4xl' display={'block'} >Punto de Venta </Text>
                <Text fontSize='4xl' fontWeight={'bold'} color="brand.secundario">Mixtli</Text>          
            </Box>

            {/* <Box p={'20px'} borderRadius="5px" boxShadow="md" textAlign={'center'} m='auto' w={'50%'} backgroundColor="whiteAlpha.900">
                {!cargando && <Alert alerta={alerta}/>}
            </Box> */}
            {cuentaConfirmada && (
                <Box backgroundColor="whiteAlpha.900" borderRadius="5px" boxShadow="md" display="flex" flexDirection="column" justifyContent="center" alignItems="center" w="600px" m="0 auto" p="15px" gap={'2'}>
                        <Text>Felicidades tu cuenta ha sido confirmada correctamente</Text>
                        <Link as={RouteLink} to="/" color={'blue.300'}>Iniciar Sesión</Link>
                </Box>
            )}
        </Box>
        </>
     );
}
 
export default ConfirmarCuenta;