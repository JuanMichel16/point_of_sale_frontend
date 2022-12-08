import { Box, Heading, Text, Grid, GridItem, Icon } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import {TbReportSearch} from 'react-icons/tb';
import {BsCartFill} from 'react-icons/bs';
import { FaPeopleCarry, FaUserAlt, FaBox } from 'react-icons/fa';
import { IoExit } from 'react-icons/io5';

import useAuth from '../../hooks/useAuth'

const MenuPrincipal = () => {
    const navigate = useNavigate();
    const { cerrarSesion } = useAuth()
    // const location = useLocation();
        

    return ( 
        <Box bg={"brand.primario"} h='100vh'>

            <Box mt='50px' width='90%' mx="auto" maxW={'1200px'}>
                <Heading size='lg' textAlign={'center'} mb={'70px'}>
                    Tablero
                </Heading>

                <Grid templateColumns='repeat(3, 1fr)' columnGap={10} rowGap={40} mx="auto">

                    <GridItem>
                        <Box
                        onClick={() => navigate('/ventas')}
                        bg='brand.secundario' 
                        m={'0 auto'} p={'20px'} 
                        borderRadius={'10px'} 
                        width="80%" 
                        _hover={{
                            transition: "transform",
                            transitionDuration: "300ms",
                            transform: 'scale(1.2)',
                            cursor: 'pointer'
                        }}
                        >
                        <Box>
                            <Icon as={BsCartFill} width={'50px'} height={'50px'} alignItems='center'/>
                        </Box>  
                        <Text textAlign={'center'} mt="20px">Ventas</Text>
                        </Box>
                    </GridItem>
            
                    <GridItem 
                        bg='brand.secundario' 
                        p={'20px'} m={'0 auto'} 
                        borderRadius={'10px'}
                        onClick={() => navigate('/proveedor')}
                        width="80%"
                        _hover={{
                            transition: "transform",
                            transitionDuration: "300ms",
                            transform: 'scale(1.2)',
                            cursor: 'pointer'
                            }}
                        >
                        <Icon as={FaPeopleCarry} width={'50px'} height={'50px'} mx="auto"></Icon>
                        <Text textAlign={'center'} mt="20px">Proveedores</Text>
                    </GridItem>

                    <GridItem 
                        bg='brand.secundario' 
                        m={'0 auto'} p={'20px'} 
                        borderRadius={'10px'}
                        onClick={() => navigate('/reportes')}
                        width="80%"
                        _hover={{
                            transition: "transform",
                            transitionDuration: "300ms",
                            transform: 'scale(1.2)',
                            cursor: 'pointer'
                            }}>
                        <Icon as={TbReportSearch} width={'50px'} height={'50px'} mx="auto"/>
                        <Text textAlign={'center'} mt="20px">Reportes</Text>
                    </GridItem>

                    <GridItem 
                        bg='brand.secundario' 
                        m={'0 auto'} 
                        p={'20px'} 
                        borderRadius={'10px'}
                        alignItems={'center'}
                        width="80%"
                        onClick={() => navigate('/perfil')}
                        _hover={{
                            transition: "transform",
                            transitionDuration: "300ms",
                            transform: 'scale(1.2)',
                            cursor: 'pointer'
                            }}>
                        <Icon as={FaUserAlt} width={'50px'} height={'50px'} mx="auto"></Icon>
                        <Text textAlign={'center'} mt="20px">Usuario</Text>
                    </GridItem>

                    <GridItem 
                        bg='brand.secundario' 
                        m={'0 auto'} 
                        p={'20px'} 
                        borderRadius={'10px'}
                        onClick={() => cerrarSesion()}
                        width="80%"
                        _hover={{
                            transition: "transform",
                            transitionDuration: "300ms",
                            transform: 'scale(1.2)',
                            cursor: 'pointer'
                            }}>
                        <Icon as={FaBox} width={'50px'} height={'50px'} mx="auto"></Icon>
                        <Text textAlign={'center'} mt="20px">Inventario</Text>
                    </GridItem>

                    <GridItem 
                        bg='brand.secundario' 
                        m={'0 auto'} 
                        p={'20px'} 
                        borderRadius={'10px'}
                        onClick={() => navigate('/')}
                        width="80%"
                        _hover={{
                            transition: "transform",
                            transitionDuration: "300ms",
                            transform: 'scale(1.2)',
                            cursor: 'pointer'
                            }}>
                        <Icon as={IoExit} width={'50px'} height={'50px'} mx="auto"/>
                        <Text textAlign={'center'} mt="20px">Salir</Text>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
     );
}
 
export default MenuPrincipal;