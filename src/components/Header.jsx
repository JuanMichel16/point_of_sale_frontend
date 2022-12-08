import { Box,
        Flex, 
        Heading, 
        Text, 
        Icon,
        Menu,
        MenuButton,
        MenuList,
        MenuItem,
        MenuGroup,
        Button
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const Header = () => {
    const { cerrarSesion } = useAuth();

    useEffect(() => {
    }, [])

    const getDate = () => {
        const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        let date = `${new Date().getDate()} ${months[new Date().getMonth()]}, ${new Date().getFullYear()}`;
        return date;
    }

    return ( 
        <>
            <Flex justifyContent={"space-between"} padding={'15px'} bg="brand.secundario">
                <Heading size='md'>
                    Punto de Venta
                </Heading>

                <Box>
                    <Text fontSize='xl' fontWeight="bold">{getDate()}</Text>
                </Box>

                <Box display='flex' justifyContent={'center'} alignItems='center' gap='10px'>
                <Menu>
                    <MenuButton as={Button} bg='brand.secundario'>
                        <Icon w='20px' h='20px' as={FaUserAlt}/>
                        Administrador
                    </MenuButton>
                    <MenuList>
                        <MenuGroup title='Mi perfil'>
                          <MenuItem as={Button}
                          onClick={cerrarSesion}
                          >Cerrar Sesión
                          </MenuItem>
                        </MenuGroup>
                    </MenuList>
                </Menu>
                </Box>
            </Flex>
        </>
     );
}
 
export default Header;