import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../commons/Footer';
import Navbar from '../commons/Navbar';
import NavbarNew from '../commons/NavbarNew';

function MainLayout() {
  return (
    <div className="w-full">
      <NavbarNew />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
