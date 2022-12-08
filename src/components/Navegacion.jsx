import { Link as ReachLink, 
  Box, 
  Flex, 
  Text, 
  Image,
  Icon,   
} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {TbReportSearch} from 'react-icons/tb';
import {BsCartFill} from 'react-icons/bs';
import { FaBox } from 'react-icons/fa';
import { FaPeopleCarry } from 'react-icons/fa';



const Navegacion = () => {
  return ( 
    <Box border={'1px solid black'}>
      <Flex justifyContent={'space-around'} basis={1}>

      {/* <Link to='/ventas' w='25%'>
          <Flex justifyContent={'center'} gap='15px' backgroundColor='brand.primario'>
            <Image src="src/resources/img/carrito.png" width={'20px'} mx="0"></Image>
            <Text fontWeight={'bold'}>Ventas</Text>
          </Flex>
        </Link> */}

        <Flex gap={3} width='25%' justifyContent={'center'} alignItems='center' bg='brand.terciario' p='5px'>
          <Icon as={BsCartFill} w={'40px'} h={'25px'} mx="0"></Icon>
          <Link to='/ventas'>
            <Text fontWeight={'bold'}>Ventas</Text>
          </Link>
        </Flex>

        {/* <Link to='/inventario' w='25%'>
          <Flex justifyContent={'center'} gap='15px'>
            <Image src="src/resources/img/inventario.png" width={'20px'} mx="0"></Image>
            <Text fontWeight={'bold'}>Inventario</Text>
          </Flex>
        </Link> */}

        <Flex gap={3} width='25%' justifyContent={'center'} alignItems='center' p='5px'>
          <Icon as={FaBox} w={'40px'} h={'25px'} mx="0"></Icon>
          <Link to='/inventario'>
            <Text fontWeight={'bold'}>Inventario</Text>
          </Link>
        </Flex>

        {/* <Link to='/proveedores' w='25%'>
          <Flex justifyContent={'center'} gap='15px'>
            <Image src="src/resources/img/proveedores.png" width={'20px'} mx="0"></Image>
            <Text fontWeight={'bold'}>Proveedores</Text>
          </Flex>
        </Link> */}

        <Flex gap={3} width='25%' justifyContent={'center'} alignItems='center' p='5px'>
          <Icon as={FaPeopleCarry} w={'40px'}  h={'25px'} mx="0"></Icon>
          <Link to='/proveedor'>
            <Text fontWeight={'bold'}>Proveedores</Text>
          </Link>
        </Flex>


        {/* <Link to='/reportes'>
          <Flex justifyContent={'center'} gap='15px'>
            <Image src="src/resources/img/reportes.png" width={'20px'} mx="0"></Image>
            <Text fontWeight={'bold'}>Reportes</Text>
          </Flex>
        </Link> */}

        <Flex gap={3} width='25%' justifyContent={'center'} alignItems='center' p='5px' bg='brand.terciario'>
          <Icon as={TbReportSearch} w={'40px'} h={'25px'} mx="0"></Icon>
          <Link to='/reportes'>
            <Text fontWeight={'bold'}>Reportes</Text>
          </Link>
        </Flex>

      </Flex> 
    </Box>
   );
}
 
export default Navegacion;