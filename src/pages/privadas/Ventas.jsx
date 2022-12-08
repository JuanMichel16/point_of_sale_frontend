import {
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
  Image,
  Flex,
  Select,
  Button,
} from "@chakra-ui/react";

import ProductCard from "../../components/ProductCard";
import ListadoProductos from "../../components/ListadoProductos";

import { useState, useEffect } from "react";
import clienteAxios from "../../config/axios";
import useProducts from "../../hooks/useProducts";

const Ventas = () => {
  const { products } = useProducts();

  return (
    <>
      <Box h="100vh">
        <Grid templateColumns="2fr 1fr">
          <GridItem h="100vh" bg={"brand.primario"}>
            <Flex justify="flex-end">
              <Flex maxW="200px" m="5">
                <Select placeholder="Select option">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Flex>
            </Flex>
            <Grid
              templateColumns="repeat(4, 1fr)"
              p="2"
              gap="20"
              bg={"brand.primario"}
            >
              {products.map((product) => {
                return (
                  <ProductCard
                    key={product._id}
                    url={product.image}
                    name={product.name}
                  />
                );
              })}
            </Grid>
          </GridItem>

          <GridItem w="100%" h="10">
            <ListadoProductos />
            <Flex gap="2" justify="center">
              <Button colorScheme="red" w="100%">
                Cancelar venta
              </Button>
              <Button colorScheme="green" w="100%">
                Pagar
              </Button>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Ventas;
