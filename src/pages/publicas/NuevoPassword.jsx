import { Box, Text, FormControl, FormLabel, Input, Button, Link } from "@chakra-ui/react";
// import {
//     Link as RouteLink
//   } from "react-router-dom";
import { useToast } from '@chakra-ui/react'
import { useState, useEffect } from "react";
import {Link as RouteLink, useParams} from "react-router-dom"
import clienteAxios from "../../config/axios";

const NuevoPassword = () => {
    const params = useParams();
    let { token } = params;
    const toast = useToast();

    const [password, setPassword] = useState("");
    const [enlaceValido, setEnlaceValido] = useState(false);
    const [passwordModificado, setPasswordModificado] = useState(false);


    useEffect(() => {
        const comprobarToken = async () => {
            try {
                await clienteAxios(`/users/olvide-password/${token}`)
                setEnlaceValido(true);
                toast({
                    title: 'Sucess',
                    description: "Ingresa tu nuevo password",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
            } catch (error) {
                setEnlaceValido(false);
                toast({
                    title: 'Error',
                    description: "Enlace no valido",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                })
            }
        }
        comprobarToken()
    }, [])



    const validateForm = async() => {
        if(password === "") {
            toast({
                title: 'Input Invalido',
                description: "Todos los campos son obligatorios",
                status: 'error',
                duration: 9000,
                isClosable: true,
            });

            return;
        }

        if(password.length < 6) {
            toast({
                title: 'Contraseña invalida',
                description: "La contraseña debe contener al menos 6 caracteres",
                status: 'error',
                duration: 9000,
                isClosable: true,
              });
            return;
        }

        // Realizar el post para guardar la nueva contraseña
        try {
            const {data} = await clienteAxios.post(`/users/olvide-password/${token}`, { password })
            setPasswordModificado(true);
            toast({
                title: 'Contraseña actualizada correctamente',
                description: "La contraseña ha sido cambiada de manera correcta",
                status: 'success',
                duration: 9000,
                isClosable: true,
              });
        } catch (error) {
            toast({
                title: 'Error',
                description: "Ha ocurrido un error la solicitud",
                status: 'error',
                duration: 9000,
                isClosable: true,
              });
            
            setPasswordModificado(false);
        }

    }

    return ( 
        <>
            <Box h='100vh' bg={'brand.primario'}>
                <Box textAlign={'center'} mb="40px">
                    <Text fontSize='4xl' display={'block'} >Punto de Venta </Text>
                    <Text fontSize='4xl' fontWeight={'bold'} color="brand.secundario">Mixtli</Text>          
                </Box>


                {enlaceValido && (
                    <Box backgroundColor="whiteAlpha.900" borderRadius="5px" boxShadow="md" display="flex" flexDirection="column" justifyContent="center" alignItems="center" w="600px" m="0 auto" p="15px">
                        <FormControl id="password">
                            <FormLabel>Escribe tu nueva contraseña</FormLabel>
                            <Input type='password' name="password" placeholder="Tu nueva contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </FormControl>

                        <Button
                            borderRadius={'5px'}
                            variant="solid"
                            backgroundColor="brand.secundario"
                            colorScheme="#8c532e"
                            width="full"
                            m="20px 0 20px 0"
                            onClick={(e) => validateForm(e)}
                            >
                            Actualizar Contraseña
                        </Button>
                    </Box>
                )}


                {passwordModificado && (
                <Box backgroundColor="whiteAlpha.900" borderRadius="5px" boxShadow="md" display="flex" flexDirection="column" justifyContent="center" alignItems="center" w="600px" m="0 auto" p="15px" gap={'2'}>
                    <Link as={RouteLink} to="/" color={'blue.300'}>Iniciar Sesión</Link>
                </Box>
                )}
            </Box>
        </>
     );
}
 
export default NuevoPassword;