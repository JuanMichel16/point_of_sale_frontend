import { useState } from "react";
import {
    Heading,
    Input,
    Button,
    Box,
    FormControl,
    FormLabel,
    Link,
    Flex,
    Text,
    Textarea
} from "@chakra-ui/react";

import { Link as RouteLink } from "react-router-dom";
import { useToast } from '@chakra-ui/react';
import useProveedor from '../../hooks/useProveedor';

const NuevoProveedor = () => {
    const toast = useToast();
    const {guardarProveedor} = useProveedor();

    const [form, setForm] = useState({
        name: "",
        representative: "",
        telephone: "",
        email: "",
        web: "",
        comment: ""
    });
    
    const {name, representative, telephone, email, web, comment} = form;

    const validateForm = () => {
        if(name === '' || representative === "" || email === "") {
            toast({
                title: 'Hay campos vacios',
                description: "Los campos con * son obligatorios",
                status: 'error',
                duration: 9000,
                isClosable: true
              })
            return;
        }

        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            // setError({msg: "Ingresa un email valido", isError: true})
            toast({
                title: 'Error',
                description: "Ingresa un email valido",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
            return;
        }

        // Aqui va el codigo del post
        guardarProveedor({name, representative, telephone, email, web, comment});
    }


    return ( 
        <>
            <Box h='100vh' bg={'brand.primario'}>
                <Heading p="40px 0 20px 0" color="#ad7b5b" textAlign="center">Nuevo Proveedor</Heading>

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


                    <FormControl id="representative" isRequired>
                        <FormLabel m="20px 0 10px 0">Persona representante</FormLabel>
                        <Input 
                            type='text'
                            name="representative"
                            placeholder="Escribe tu nombre"
                            p="15px"
                            value={representative}
                            onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
                            />
                    </FormControl>

                    <FormControl id="telephone">
                        <FormLabel m="20px 0 10px 0">Número de telefono</FormLabel>
                        <Input 
                            type="string"
                            name="telephone"
                            placeholder="Escribe tu contraseña" 
                            p="15px"
                            value={telephone}
                            onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
                            />
                    </FormControl>

                    <FormControl id="email" isRequired>
                        <FormLabel m="20px 0 10px 0">Email</FormLabel>
                        <Input 
                            type='email'
                            name="email"
                            placeholder="correo@correo.com" 
                            backgroundColor="#FFF"
                            p="15px"
                            value={email}
                            onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
                            />
                    </FormControl>

                    <FormControl id="web">
                        <FormLabel m="20px 0 10px 0">Pagina web</FormLabel>
                        <Input 
                            type='string'
                            name="web"
                            placeholder="http://proveedor.com" 
                            backgroundColor="#FFF"
                            p="15px"
                            value={web}
                            onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
                            />
                    </FormControl>

                    <FormControl id="comment">
                        <FormLabel m="20px 0 10px 0">Nota o descripción</FormLabel>
                        <Textarea 
                            type="string"
                            name="comment"
                            overflow={'auto'}
                            placeholder="Proveedor de collares..." 
                            backgroundColor="#FFF"
                            p="15px"
                            value={comment}
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
                    Agregar 
                    </Button>
                </Box>
            </Box>
        
        </>
     );
}
 
export default NuevoProveedor;