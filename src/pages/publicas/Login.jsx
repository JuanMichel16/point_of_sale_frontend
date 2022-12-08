import {
    Flex,
    Box,
    FormControl,
    Input,
    Stack,
    Link,
    Button,
    Text,
    Grid,
    Divider,
    GridItem,
    useToast
  } from '@chakra-ui/react';
import { useState } from 'react';
import { Link as RouteLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import clienteAxios from '../../config/axios';

  
const Login = () => {
    const toast = useToast();
    const { setAuth } = useAuth();

    const [form, setForm] = useState({email: "", password: ""});
    const {email, password} = form;

    const navigate = useNavigate();


    const validateForm = async () => {
      if(email === "" || password === "") {
        toast({
          title: 'Error',
          description: "Todos los campos son obligatorios",
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
        });

        return;
      }
      
      try {
        const { data } = await clienteAxios.post('/users/login', {email, password});
        localStorage.setItem('token', data.token);
        setAuth(data);
        navigate('/menu-principal');
      } catch (error) {
        toast({
          title: 'Error',
          description: error.response.data.msg,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }
    }


    return (
      <Grid h='100vh' bg={'brand.primario'}
        templateColumns='repeat(2, 1fr)'>

          <Flex justifyContent='right' alignItems='center' p={'0 0 0 0'}>
              <Text fontSize='4xl' mr='6'>Punto de Venta</Text>
              <Box h={'50%'}>
                <Divider orientation='vertical' borderColor={'black'} borderLeftWidth='2px'/>
              </Box>
          </Flex>

        <GridItem  display='flex' justifyItems={'right'} alignItems={'center'}>
            <Stack mx={'0'} maxH='lg' py={6} p={10} alignItems='center' w="xl">
              <Stack align={'center'}>
              <Box 
                  // src='src/resources/img/Logo-png.png' borderRadius={'full'} boxSize='300px'
                  bgSize={'300px'}
                  bgImage="url('src/resources/img/Logo-png.png')"
                  width={250}
                  height={250}
                  bgPosition="center center"
                  bgRepeat="no-repeat"
                  >
              </Box>
              </Stack>
                <Stack spacing={5} w="sm">
                  <FormControl id="email">
                    <Input 
                      name='email'
                      type="email"
                      value={email}
                      onChange={(e) => setForm({...form, [e.target.name]: e.target.value})} 
                      placeholder='Tu correo' 
                      borderColor={'black'}/>
                  </FormControl>
                  <FormControl id="password">
                    <Input
                      name='password'
                      type="password"
                      value={password}
                      onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
                      placeholder='Contraseña' 
                      borderColor={'black'}/>
                  </FormControl>
                  <Stack spacing={5}>
                    <Button
                      onClick={() => validateForm()} 
                      mt={0}
                      bg={'brand.secundario'}
                      color={'white'}
                      _hover={{
                        bg: "brand.secundario",
                      }}>
                      Iniciar Sesión
                    </Button>
                  </Stack>

                  <Flex justifyContent={'space-between'}>
                    <Flex gap={'2'}>
                      <Text>¿No tienes cuenta?</Text>
                      <Link as={RouteLink} to="/sign-up" color={'blue.600'}>Registrate</Link>
                    </Flex>

                  <Flex gap={'2'}>
                    <Link as={RouteLink} to="/olvide-password" color={'gray.400'}>Olvide mi contraseña</Link>
                  </Flex>
                  </Flex>
                </Stack>
            </Stack>
        </GridItem>
      </Grid>
    );
  }

export default Login;