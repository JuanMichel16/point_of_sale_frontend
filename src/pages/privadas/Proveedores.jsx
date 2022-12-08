import {
  Box,
  Heading,
  Text,
  Icon,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Table} from "antd";
import useProveedor from "../../hooks/useProveedor";

import { HiUserAdd } from "react-icons/hi";
import { GrEdit } from "react-icons/gr";
import { GiCancel } from "react-icons/gi";

import { useNavigate } from "react-router-dom";

const Proveedores = () => {
  const { Column} = Table;
  const { proveedores, eliminarProveedor } = useProveedor();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const editarNavigate = (id) => {
    navigate(`/proveedor/editar/${id}`);
  };

  const eliminarNavigate = (id) => {
    eliminarProveedor(id)
  }

  const columns = [
    {
      title: "Numero de proveedor",
      dataIndex: "_id",
      width: 200,
    },
    {
      title: "Nombre",
      dataIndex: "name",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.name.length - b.name.length,
      width: 150,
    },
    {
      title: "Representante",
      dataIndex: "representative",
      width: 150,
    },
    {
      title: "Telefono",
      dataIndex: "telephone",
      width: 150,
    },
    {
      title: "Correo",
      dataIndex: "email",
      width: 150,
    },
    {
      title: "Pagina web",
      dataIndex: "web",
      width: 150,
    },
    {
      title: "Comentario",
      dataIndex: "comment",
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
  
  const data = proveedores.map((proveedores) => {
    return {
      name: proveedores.name,
      representative: proveedores.representative,
      telephone: proveedores.telephone,
      email: proveedores.email,
      web: proveedores.web,
      comment: proveedores.comment,
      _id: proveedores._id,
    };
  });
  


  return (
    <>
      <Box h="100vh" bg={"brand.primario"} p="30px">
        <Heading textAlign={"center"}>Proveedores</Heading>

        <Button leftIcon={<HiUserAdd />} colorScheme='blue' mb='5' onClick={() => navigate('/proveedor/nuevo-proveedor')} >
          Nuevo proveedor 
        </Button>

        <Table
          columns={columns}
          dataSource={data}
          sticky
          rowKey={(record) => record._id}
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
            <Text>¿Seguro que desea eliminar el proveedor?</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme='blue' onClick={(e) => console.log(e.target.parentElement)}>Confirmar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default Proveedores;
