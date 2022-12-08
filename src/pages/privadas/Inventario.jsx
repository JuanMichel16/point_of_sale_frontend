import {
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
  Image,
  Icon,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { Table } from "antd";
import useProducts from "../../hooks/useProducts";
import { useNavigate } from "react-router-dom";

import { AiOutlinePlus } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";
import { GiCancel } from "react-icons/gi";
import { HiUserAdd } from "react-icons/hi";

const Inventario = () => {
  const { products } = useProducts();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()

  const editarNavigate = (id) => {
    navigate(`/inventario/editar/${id}`);
  };

  const columns = [
    {
      title: "Numero de producto",
      dataIndex: "_id",
      width: 200,
    },
    {
      title: "Nombre",
      dataIndex: "name",
      defaultSortOrder: "descend",
      // sorter: (a, b) => a.name.length - b.name.length,
      width: 150,
    },
    {
      title: "Descripccion",
      dataIndex: "description",
      width: 150,
    },
    {
      title: "Stock",
      dataIndex: "stock",
      width: 150,
    },
    {
      title: "Categoria",
      dataIndex: "category",
      width: 150,
    },
    {
      title: "Precio",
      dataIndex: "costPrice",
      width: 150,
    },
    {
      title: "Precio de venta",
      dataIndex: "salePrice",
      width: 150,
    },
    {
      title: "Imagen",
      dataIndex: "image",
      width: 150,
    },
    {
      title: "Acciones",
      render: (_, record) => (
        <>
          <Button bg="none" onClick={() => editarNavigate(record._id)}>
            {" "}
            <Icon as={GrEdit} />{" "}
          </Button>
          <Button bg="none" onClick={onOpen}>
            {" "}
            <Icon as={GiCancel} color="red.300" />{" "}
          </Button>
        </>
      ),
      width: 130,
    },
  ];

  const data = products.map((product) => {
    return {
      name: product.name,
      description: product.description,
      stock: product.stock,
      category: product.category,
      costPrice: product.costPrice,
      salePrice: product.salePrice,
      image: product.image,
      _id: product._id,
    };
  });

  return (
    <>
      <Box h="100vh" bg={"brand.primario"} p="30px">
        <Heading textAlign={"center"} m='30px'>Inventario</Heading>

        <Button leftIcon={<HiUserAdd />} colorScheme='blue' mb='5' onClick={() => navigate('/inventario/nuevo-producto')} >
          Nuevo producto
        </Button>

        <Table
          columns={columns}
          dataSource={data}
          sticky
          rowKey={(record) => record.uuid}
          scroll={{ x: 1500 }}
          pagination={{ pageSize: 5 }}
        />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Eliminar</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>¿Seguro que desea eliminar el producto?</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme='blue'>Confirmar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Inventario;
