import { Box, Button, Text } from "@chakra-ui/react";

const NoFoundPage = () => {
    return ( 
        <>
            <Box h='100vh' bg={'brand.primario'}>
                <Box textAlign={'center'} mb="40px">
                    <Text fontSize='4xl' display={'block'} >Punto de Venta </Text>
                    <Text fontSize='4xl' fontWeight={'bold'} color="brand.secundario">Mixtli</Text>          
                </Box>

                <Box backgroundColor="whiteAlpha.900" borderRadius="5px" boxShadow="md" display="flex" flexDirection="column" justifyContent="center" alignItems="center" w="600px" m="0 auto" p="15px">

                    <Text>Lo sentimos, no se encontro la página solicitada.</Text>

                    <Button
                    borderRadius={'5px'}
                    variant="solid"
                    backgroundColor="brand.secundario"
                    colorScheme="#8c532e"
                    width="full"
                    m="20px 0 20px 0"
                    onClick={(e) => validateForm(e)}
                    >
                    Ir a la pagina principal
                    </Button>
                </Box>
            </Box>
        </>
    );
}
 
export default NoFoundPage;