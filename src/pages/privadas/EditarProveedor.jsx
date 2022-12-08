import { useState, useEffect } from "react";
import {
  Heading,
  Input,
  Button,
  Box,
  FormControl,
  FormLabel,
  Link,
  Flex,
  Text,
  Skeleton,
  Textarea,
} from "@chakra-ui/react";

import { Link as RouteLink, useParams, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import useProveedor from "../../hooks/useProveedor";
// import Header from "../../components/Header";

const EditarProveedor = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const { id } = params;
  const toast = useToast();
  const { proveedores, editarProveedor } = useProveedor();
  const [form, setForm] = useState({
    name: "",
    representative: "",
    telephone: "",
    email: "",
    web: "",
    comment: "",
  });

  function buscarProveedor() {
    const proveedor = proveedores.find((proveedor) => {
      return proveedor._id == id;
    });
    setForm(proveedor)
}

useEffect(() => {
    if (proveedores.length > 0) {
        buscarProveedor(proveedores);
        setIsLoading(false);
    }else {
        setIsLoading(true)
    }
  }, [proveedores]);

  const validateForm = () => {
    if (proveedores) {
        if (form.name === "" || form.representative === "" || form.email === "") {
          toast({
            title: "Hay campos vacios",
            description: "Los campos con * son obligatorios",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          return;
        }
    
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
          // setError({msg: "Ingresa un email valido", isError: true})
          toast({
            title: "Error",
            description: "Ingresa un email valido",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          return;
        }
        // // Aqui va el codigo del put
        editarProveedor(id, form);
        navigate('/proveedor');
    }
  };

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <Box h="100vh" bg={"brand.primario"}>
          <Heading p="40px 0 20px 0" color="#ad7b5b" textAlign="center">
            Editar Proveedor
          </Heading>

          <Box
            backgroundColor="whiteAlpha.900"
            borderRadius="5px"
            boxShadow="md"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            w="600px"
            m="0 auto"
            p="15px"
          >
            <FormControl id="name" isRequired>
              <FormLabel m="20px 0 10px 0">Nombre</FormLabel>
              <Input
                type="text"
                name="name"
                placeholder="Escribe tu nombre"
                p="15px"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, [e.target.name]: e.target.value })
                }
              />
            </FormControl>

            <FormControl id="representative" isRequired>
              <FormLabel m="20px 0 10px 0">Persona representante</FormLabel>
              <Input
                type="text"
                name="representative"
                placeholder="Escribe tu nombre"
                p="15px"
                value={form.representative}
                onChange={(e) =>
                  setForm({ ...form, [e.target.name]: e.target.value })
                }
              />
            </FormControl>

            <FormControl id="telephone">
              <FormLabel m="20px 0 10px 0">Número de telefono</FormLabel>
              <Input
                type="string"
                name="telephone"
                placeholder="Escribe tu contraseña"
                p="15px"
                value={form.telephone}
                onChange={(e) =>
                  setForm({ ...form, [e.target.name]: e.target.value })
                }
              />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel m="20px 0 10px 0">Email</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="correo@correo.com"
                backgroundColor="#FFF"
                p="15px"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, [e.target.name]: e.target.value })
                }
              />
            </FormControl>

            <FormControl id="web">
              <FormLabel m="20px 0 10px 0">Pagina web</FormLabel>
              <Input
                type="string"
                name="web"
                placeholder="http://proveedor.com"
                backgroundColor="#FFF"
                p="15px"
                value={form.web}
                onChange={(e) =>
                  setForm({ ...form, [e.target.name]: e.target.value })
                }
              />
            </FormControl>

            <FormControl id="comment">
              <FormLabel m="20px 0 10px 0">Nota o descripción</FormLabel>
              <Textarea
                type="string"
                name="comment"
                overflow={"auto"}
                placeholder="Proveedor de collares..."
                backgroundColor="#FFF"
                p="15px"
                value={form.comment}
                onChange={(e) =>
                  setForm({ ...form, [e.target.name]: e.target.value })
                }
              />
            </FormControl>

            <Button
              borderRadius={0}
              variant="solid"
              backgroundColor="brand.secundario"
              colorScheme="#8c532e"
              color={"#000"}
              width="full"
              m="20px 0 20px 0"
              onClick={(e) => validateForm(e)}
            >
              Guardar Cambios
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default EditarProveedor;
