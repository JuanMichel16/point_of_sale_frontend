import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import RutaProtegida from './layouts/RutaProtegida';

// Importando paginas
// Publicas
import Login from './pages/publicas/Login';
import Signup from './pages/publicas/Signup';
import ConfirmarCuenta from './pages/publicas/ConfirmarCuenta';
import NuevoPassword from './pages/publicas/NuevoPassword';
import OlvidePassword from './pages/publicas/OlvidePassword';
import NoFoundPage from './pages/publicas/NoFoundPage';

// Privadas
import Usuario from './pages/privadas/Usuario';
import EditarUsuario from "./pages/privadas/EditarUsuario";

import MenuPrincipal from './pages/privadas/MenuPrincipal';

import Ventas from './pages/privadas/Ventas';
import Reportes from './pages/privadas/Reportes';

import Proveedores from './pages/privadas/Proveedores';
import EditarProveedor from './pages/privadas/EditarProveedor';
import NuevoProveedor from './pages/privadas/NuevoProveedor';

import Inventario from './pages/privadas/Inventario';
import EditarProducto from './pages/privadas/EditarProducto';
import NuevoProducto from './pages/privadas/NuevoProducto';

// Context
import { AuthProvider } from './context/AuthProvider';
import { StoreProvider } from "./context/StoreProvider";
import { ProductProvider } from './context/ProductsProvider';
import { ProveedorProvider } from './context/ProveedorProvider';

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <StoreProvider>
          <ProductProvider>
            <ProveedorProvider>
            <Routes>
            <Route path="/">
              <Route index element={<Login/>}/>
              <Route path='sign-up' element={<Signup/>}/>
              <Route path='confirmar/:token' element={<ConfirmarCuenta/>}/>
              <Route path='olvide-password' element={<OlvidePassword/>}/>
              <Route path='olvide-password/:token' element={<NuevoPassword/>}/>
            </Route>

            <Route path='/menu-principal' element={<RutaProtegida/>}>
              <Route index element={<MenuPrincipal/>}/>
            </Route>

            <Route path='/perfil' element={<RutaProtegida/>}>
              <Route index element={<Usuario/>}/>
              <Route path='editar' element={<EditarUsuario/>}></Route>
            </Route>

            <Route path='/proveedor' element={<RutaProtegida/>}>
              <Route index element={<Proveedores/>}/>
              <Route path='nuevo-proveedor' element={<NuevoProveedor/>}></Route>
              <Route path='editar/:id' element={<EditarProveedor/>}></Route>
            </Route>

            <Route path='/inventario' element={<RutaProtegida/>}>
              <Route index element={<Inventario/>}/>
              <Route path='nuevo-producto' element={<NuevoProducto/>}></Route>
              <Route path='editar/:id' element={<EditarProducto/>}></Route>
            </Route>

            <Route path='/ventas' element={<RutaProtegida/>}>
              <Route index element={<Ventas/>}/>
            </Route>

            <Route path='/reportes' element={<RutaProtegida/>}>
              <Route index element={<Reportes/>}/>
            </Route>

            <Route path='*' element={<NoFoundPage/>}></Route>

          </Routes>
            </ProveedorProvider>
          </ProductProvider>
        </StoreProvider>
      </AuthProvider>
    </BrowserRouter>
    )
  }
export default App
