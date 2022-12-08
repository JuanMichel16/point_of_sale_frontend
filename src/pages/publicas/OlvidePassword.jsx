import { Box, Text, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useToast } from '@chakra-ui/react'
import clienteAxios from "../../config/axios";

const OlvidePassword = () => {
    const toast = useToast();

    const [email, setEmail] = useState("")


    const validateForm = async (e) => {
        e.preventDefault();

        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            // setError({msg: "Ingresa un email valido", isError: true})
            toast({
                title: 'Error',
                description: "Ingresa un email valido",
                status: 'error',
                duration: 9000,
                isClosable: true,
              });

            return;
        }


        try {
            const { data } = await clienteAxios.post('/users/olvide-password', {email});
            toast({
                title: 'Success',
                description: data.msg,
                status: 'success',
                duration: 9000,
                isClosable: true,
              });
        } catch (error) {
            toast({
                title: 'Error',
                description: error.response.data.msg,
                status: 'error',
                duration: 9000,
                isClosable: true,
              });
        }



    }


    return ( 
        <>
            <Box h='100vh' bg={'brand.primario'}>
                <Box textAlign={'center'} mb="40px">
                    <Text fontSize='4xl' display={'block'} >Punto de Venta </Text>
                    <Text fontSize='4xl' fontWeight={'bold'} color="brand.secundario">Mixtli</Text>          
                </Box>

                <Box backgroundColor="whiteAlpha.900" borderRadius="5px" boxShadow="md" display="flex" flexDirection="column" justifyContent="center" alignItems="center" w="600px" m="0 auto" p="15px">
                    <FormControl id="email">
                        <FormLabel>Email</FormLabel>
                        <Input type='email' name="email" placeholder="Email de Registro" value={email} onChange={(e) => setEmail(e.target.value)}/>
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
                    Enviar Instrucciones Al Email
                    </Button>
                </Box>
            </Box>
        </>
     );
}
 
export default OlvidePassword;