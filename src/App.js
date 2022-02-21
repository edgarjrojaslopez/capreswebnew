import { Routes, Route } from 'react-router-dom';
import './index.css';
import Inicio from './pages/Inicio';
import Socios from './pages/Socios';
import Delegados from './pages/Delegados';
import Servicios from './pages/Servicios';
import Descargas from './pages/Descargas';
import Contacto from './pages/Contacto';
import MainLayout from './layouts/MainLayout';
import Nosotros from './pages/Nosotros';
import AboutUs from './pages/AboutUs';
import Historia from './pages/Historia';
import Junta from './pages/Junta';
import Login from './pages/Login';
import Organizacion from './pages/Organizacion';
import AuthLayout from './layouts/AuthLayout';
import Register from './pages/Register';

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" exact element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/acerca-de" element={<AboutUs />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/junta" element={<Junta />} />
          <Route
            path="/organizacion-administrativa"
            element={<Organizacion />}
          />

          <Route path="/socios" element={<Socios />} />
          <Route path="/delegados" element={<Delegados />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/descargas" element={<Descargas />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
