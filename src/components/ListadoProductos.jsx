import { 
    Box,
    Heading,
    Text,
    Grid,
    GridItem,
    Image,
    Flex,
    TableContainer,
    Table,
    Thead,
    Tr,
    Th,
    Td,
    Tbody
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from 'react'
 

const ListadoProductos = () => {
    const [pokemon, setPokemon] = useState([])

    async function getRandomUser() {
        try {
          const peticion = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=10&limit=10");
          const datos = peticion.data;
          setPokemon(datos.results)
        } catch(err) {
          console.log("error: ", err);
        }
    }

    useEffect(() => {
        getRandomUser()
    }, [])

    return ( 
        <Box>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Productos</Th>
                        <Th isNumeric>Cantidad</Th>
                        <Th isNumeric>Precio</Th>
                        <Th isNumeric>Total</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                        {
                            pokemon.map((pokemon) => {
                                return (
                                    <Tr key={pokemon.name}>
                                        <Td>{pokemon.name}</Td>
                                    </Tr>
                                )
                            })
                        }
                    </Tbody>
                </Table>
            </TableContainer>

            <Box p='5'>
                <Flex justify='space-between'>
                    <Heading size='md'>Subtotal</Heading>
                    <Text>$100</Text>
                </Flex>
                <Flex justify='space-between'>
                    <Heading size='md'>IVA</Heading>
                    <Text>$19</Text>
                </Flex>
                <Flex justify='space-between'>
                    <Heading size='md'>Total</Heading>
                    <Heading size='md'>$119</Heading>
                </Flex>
            </Box>
        </Box>
     );
}
 

export default ListadoProductos;