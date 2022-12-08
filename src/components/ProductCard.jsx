import {
    Text,
    Image,
    Box,
    Flex,
} from "@chakra-ui/react";

const ProductCard = ({url, name}) => {
    return ( 
        <>
            <Box border='1px' borderRadius={'xl'} w='180px'>
                <Box borderBottom='solid' p='6'>
                    <Image src={url}></Image>
                </Box>

                <Flex justifyContent={'space-between'} alignItems='center' p='10px'>
                    <Text>{name}</Text>
                    <Text fontWeight={'bold'}>$100</Text>
                </Flex>

            </Box>
        </>
     );
}
 
export default ProductCard;