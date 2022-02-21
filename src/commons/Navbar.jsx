import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/capres.jpg';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const items = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Socios', path: '/socios' },
    { name: 'Delegados', path: '/delegados' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Descargas', path: '/descargas' },
    { name: 'Contacto', path: '/contacto' }
  ];

  return (
    <div className=" fixed top-0 left-0 z-30 w-full ">
      <div className="bg-blue-700 shadow-md shadow-blue-900/50">
        <div className="mx-auto px-4 py-2 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <div className="relative flex items-center justify-between">
            <div>
              <Link to="/" className="flex items-center">
                <img className="h-16 w-auto" src={Logo} alt="Logo Capres" />
              </Link>
            </div>
            <ul className="hidden space-x-8 md:items-center lg:flex">
              {items.map((item) => (
                <li key={item.name} className="font-medium text-gray-50">
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
            <ul className="hidden items-center space-x-8 lg:flex">
              <li>
                <Link
                  to="/login"
                  className="focus:shadow-outline inline-flex h-12 items-center justify-center rounded bg-blue-400 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-blue-300 focus:outline-none"
                >
                  Log in
                </Link>
              </li>
            </ul>
            <div className="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="focus:shadow-outline -mr-1 rounded p-2 transition duration-200 focus:outline-none"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-8 text-gray-100 " viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full">
                  <div className="rounded border bg-white p-5 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <Link to="/" className="inline-flex items-center">
                          <img src={Logo} alt="Logo Capres" className="w-16" />
                        </Link>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="focus:shadow-outline -mt-2 -mr-2 rounded p-2 transition duration-200 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg
                            className="w-5 text-gray-600"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4">
                        {items.map((item) => (
                          <li
                            key={item.name}
                            className="font-medium text-gray-500 hover:text-blue-500 focus:text-blue-500"
                          >
                            <Link to={item.path}>{item.name}</Link>
                          </li>
                        ))}
                        <li>
                          <a
                            href="/"
                            className="focus:shadow-outline inline-flex h-12 w-full items-center justify-center rounded bg-blue-400 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-blue-700 focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                          >
                            Sign up
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
