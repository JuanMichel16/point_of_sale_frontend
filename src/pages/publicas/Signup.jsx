import { useState } from "react";
import {
    Heading,
    Input,
    Button,
    Box,
    FormControl,
    FormLabel,
    Select,
    Link,
    Flex,
    Text
    } from "@chakra-ui/react";

import {
    Link as RouteLink
} from "react-router-dom";

//   import Alert from "../components/Alert";   
import { useToast } from '@chakra-ui/react'
import clienteAxios from "../../config/axios";

const Signup = () => {
    const toast = useToast();

    const [form, setForm] = useState({
        name: "",
        userName: "",
        password: "",
        email: "",
        rol: ""
    });
    
    const {name, userName, password, email, rol} = form;


    const actualizar = (e) => {
        setForm(
            {...form, [e.target.name]: e.target.value}
        )
    };

    const validateForm = async (e) => {
        e.preventDefault;

        if(name === "" || userName === "" || password === "" || email === "" || rol === "") {
            toast({
                title: 'Error',
                description: "Todos los campos son obligatorios",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
            return;
        }

        if(password.length < 6) {
            toast({
                title: 'Error',
                description: "La contraseña debe tener al menos 6 caracteres",
                status: 'error',
                duration: 9000,
                isClosable: true,
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

        // setError({msg: "Todo good", isError:false});


        // Creando usuario en la app
        try {
            const url = "/users/";
            const peticion = await clienteAxios.post(url, form);
            const resultado = peticion.data;
            toast({
                title: 'Success',
                description: "Usuario registrado correctamente",
                status: 'success',
                duration: 8000,
                isClosable: true,
              })



        } catch(err) {
            console.log(`ojo2 ${err}`);
        }


    }

    // const {isError} = error;


    return ( 
        <Box h="100vh" bg={'brand.primario'}>
            <Heading p="50px 0 30px 0" color="#ad7b5b" textAlign="center">Registro</Heading>

            <Box backgroundColor="whiteAlpha.900" borderRadius="5px" boxShadow="md" display="flex" flexDirection="column" justifyContent="center" alignItems="center" w="600px" m="0 auto" p="15px">

                {/* {isError? <Alert error={error}/> : null} */}

                <FormControl id="name" isRequired>
                    <FormLabel m="20px 0 10px 0">Nombre</FormLabel>
                    <Input 
                        type='text'
                        name="name"
                        placeholder="Escribe tu nombre"
                        p="15px"
                        value={name}
                        onChange={(e) => actualizar(e)}
                        />
                </FormControl>


                <FormControl id="userName" isRequired>
                    <FormLabel m="20px 0 10px 0">Nombre de usuario</FormLabel>
                    <Input 
                        type='text'
                        name="userName"
                        placeholder="Escribe tu nombre"
                        p="15px"
                        value={userName}
                        onChange={(e) => actualizar(e)}
                        />
                </FormControl>

                <FormControl id="password" isRequired>
                    <FormLabel m="20px 0 10px 0">Contraseña</FormLabel>
                    <Input 
                        type='password'
                        name="password"
                        placeholder="Escribe tu contraseña" 
                        p="15px"
                        value={password}
                        onChange={(e) => actualizar(e)}
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
                        onChange={(e) => actualizar(e)}
                        />
                </FormControl>

                <FormControl id="rol" isRequired>
                    <FormLabel m="20px 0 10px 0">Cargo</FormLabel>
                    <Select placeholder='Selecciona tu cargo' name="rol" value={rol} onChange={(e) => actualizar(e)}>
                        <option value='administrador'>Administrador</option>
                        <option value='cajero'>Cajero</option>
                    </Select>
                </FormControl>

                <Button
                    borderRadius={0}
                    variant="solid"
                    backgroundColor="brand.secundario"
                    colorScheme="#8c532e"
                    width="full"
                    m="20px 0 20px 0"
                    onClick={(e) => validateForm(e)}
                >
                Registrarse
                </Button>

                <Flex gap={'2'}>
                    <Text>¿Ya tienes cuenta?</Text>
                    <Link as={RouteLink} to="/" color={'blue.600'}>Inicia Sesión</Link>
                </Flex>
            </Box>
        </Box>
     );

                     {/* <Formik
                    initialValues={{name: "", userName: "", password: "", email: "", rol: "" }}
                    onSubmit={values => {
                        console.log(values);
                    }}
                >
                    {({ errors, touched, isValidating}) => {
                        <Form>
                            <Field name='name' validate={validateName}>

                            </Field>
                        </Form>
                    }}
                </Formik> */}
}
 
export default Signup;


// import { useState } from 'react';
// import {
//     Image,
//     Select,
//     Flex,
//     Box,
//     FormControl,
//     FormLabel,
//     Input,
//     Stack,
//     Link,
//     Button,
//     Heading,
//     Text,
//     Grid,
//     Divider,
//     GridItem,
//     FormErrorMessage,
//     FormHelperText,
//   } from '@chakra-ui/react';

// const Registrar = () => {

//     const [form, setForm] = useState({
//         firstName: "", 
//         lastName: "", 
//         userName: "", 
//         password: "", 
//         email: "", 
//         rol: ""
//     });

//     const { firstName, lastName, userName, password, email, rol } = form;


//     const actualizar = (e) => {
//         setForm({
//             ...form,
//             [e.target.name]: e.target.value
//         })
//     };

//     return ( 
//     <Box h='100vh' bg={'brand.primario'}>
//         <Grid templateColumns='repeat(2, 1fr)' >

//             <Flex justifyContent='right' alignItems='center' p={'0 0 0 0'}>
//                 <Text fontSize='4xl' mr='6'>Punto de Venta</Text>
//                 <Box h={'50%'}>
//                     <Divider orientation='vertical' borderColor={'black'} borderLeftWidth='2px'/>
//                 </Box>
//             </Flex>

//             <GridItem  display='flex' justifyItems={'left'} alignItems={'center'} pt={0}>
//                 <Stack spacing={8} mx={'78'} maxH='lg' py={6} px={2} alignItems='left'>
//                     <Stack align={'center'}>
//                         <Box
//                             bgSize={'100px'}
//                             bgImage="url('src/resources/img/Logo-png.png')"
//                             width={100}
//                             height={100}
//                             bgPosition="top center"
//                             bgRepeat="no-repeat">
//                         </Box>
//                     </Stack>
//                     <Stack spacing={5} m='0 0 0 0'>
//                         <FormControl id="nombre" isRequired>
//                             <FormLabel>Nombre</FormLabel>
//                             <Input type="text" value={firstName} onChange={actualizar} borderColor={'black'} name="firstName"/>
//                         </FormControl>

//                         <FormControl id="apellido" isRequired>
//                             <FormLabel>Apellido</FormLabel>
//                             <Input type="text" value={lastName} onChange={actualizar} placeholder='Escribe tu apellidos' borderColor={'black'} name="lastName"/>
//                         </FormControl>
                  
//                         <FormControl id="usuario" isRequired>
//                             <FormLabel>Nombre de usuario</FormLabel>
//                             <Input type="text" value={userName} onChange={actualizar} placeholder='Usuario' borderColor={'black'} name="userName"/>
//                         </FormControl>
                  
//                         <FormControl id="password" isRequired>
//                             <FormLabel>Contraseña</FormLabel>
//                             <Input type="password" value={password} onChange={actualizar} placeholder='Contraseña' borderColor={'black'} name="password"/>
//                         </FormControl>
                  
//                         <FormControl id="email" isRequired>
//                             <FormLabel>Email</FormLabel>
//                             <Input type="email" value={email} onChange={actualizar} placeholder='Usuario' borderColor={'black'} name="email"/>
//                         </FormControl>
                  
//                         <FormControl>
//                             <FormLabel>Rol</FormLabel>
//                             <Select placeholder='Selecciona tu rol'
//                                 onChange={(e) => console.log(e.target.value)}
//                             >
//                                 <option value='Administrador'>Administrador</option>
//                                 <option value='Cajero'>Cajero</option>
//                             </Select>
//                         </FormControl>
                        
//                         <Stack spacing={5}>
//                             <Button
//                                 type='submit' 
//                                 mt={0}
//                                 bg={'brand.secundario'}
//                                 color={'white'}
//                                 _hover={{
//                                     bg: "brand.secundario",
//                                 }}>
//                             Registrarse
//                             </Button>
//                         </Stack>
//                     </Stack>
//                 </Stack>
//             </GridItem>
//         </Grid>
//     </Box>
//     );
// }
 
// export default Registrar;