import Logo from '../assets/images/capres.jpg';
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import Dropdown from '../components/Dropdown';
import { Menu } from '@headlessui/react';
const NavbarNew = () => {
  return (
    <nav className="absolute left-0 top-0 z-30 w-full bg-blue-700 px-4">
      {/* container */}
      <div className="flex w-auto flex-col md:flex-row md:items-center md:justify-between">
        {/* branding */}
        <Link to="/" className="inline-flex  py-4 md:py-0">
          <img
            src={Logo}
            alt="Capres Logo"
            className="inline-flex h-auto w-16 md:py-2"
          />
        </Link>
        {/* branding */}
        {/* toggler button */}
        <button className="absolute right-2 my-4 rounded-md  border text-gray-100 outline-none md:hidden">
          <svg
            className="h-10 w-10"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        {/* toggler button */}

        {/* menu */}

        <div className="">
          <ul className="flex flex-col md:flex-row md:space-x-4">
            <li className="rounded-md py-2 px-2  hover:bg-blue-800 md:py-0 md:px-0 md:hover:bg-transparent">
              <Link to="/" className="font-medium  text-gray-200">
                Inicio
              </Link>
            </li>
            <Menu
              as="li"
              className="rounded-md py-2 px-2  hover:bg-blue-800 md:py-0 md:px-0 md:hover:bg-transparent"
            >
              <Menu.Button to="/nosotros" className="font-medium text-gray-200">
                Nosotros
              </Menu.Button>
              {/* dropdown  */}
              <Menu.Items className="absolute mt-2 w-60 rounded-md bg-gray-100  py-4 md:mt-6">
                <ul className="">
                  <li className="min-w-max py-2 px-2 text-gray-600 hover:bg-blue-700 hover:text-gray-100 ">
                    <Menu.Item>
                      <Link to="/acerca-de" className="focus:bg-blue-400">
                        Acerca de
                      </Link>
                    </Menu.Item>
                  </li>
                  <li className="py-2 px-2 text-gray-600 hover:bg-blue-700 hover:text-gray-100">
                    <Menu.Item>
                      <Link to="/historia">Historia</Link>
                    </Menu.Item>
                  </li>
                  <li className="py-2 px-2 text-gray-600 hover:bg-blue-700 hover:text-gray-100">
                    <Menu.Item>
                      <Link to="/junta-directiva">Junta Directiva</Link>
                    </Menu.Item>
                  </li>
                  <li className="py-2 px-2 text-gray-600 hover:bg-blue-700 hover:text-gray-100">
                    <Link to="/organizacion-administrativa">
                      Organización Administrativa
                    </Link>
                  </li>
                </ul>
              </Menu.Items>
              {/* dropdown  */}
            </Menu>

            <li className="rounded-md py-2 px-2  hover:bg-blue-800 md:py-0 md:px-0 md:hover:bg-transparent">
              <Link to="/socios" className="font-medium text-gray-200">
                Socios
              </Link>
            </li>
            <li className="rounded-md py-2 px-2  hover:bg-blue-800 md:py-0 md:px-0 md:hover:bg-transparent">
              <Link to="/delegados" className="font-medium text-gray-200">
                Delegados
              </Link>
            </li>
            <li className="rounded-md py-2 px-2  hover:bg-blue-800 md:py-0 md:px-0 md:hover:bg-transparent">
              <Link to="/servicios" className="font-medium text-gray-200">
                Servicios
              </Link>
            </li>
            <li className="rounded-md py-2 px-2  hover:bg-blue-800 md:py-0 md:px-0 md:hover:bg-transparent">
              <Link to="/descargas" className="font-medium text-gray-200">
                Descargas
              </Link>
            </li>
            <li className="rounded-md py-2 px-2  hover:bg-blue-800 md:py-0 md:px-0 md:hover:bg-transparent">
              <Link to="/contacto" className="font-medium text-gray-200">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        {/* menu */}
        {/* login button */}

        <button className="my-4 w-full rounded-md bg-blue-500 py-2 px-6 font-medium text-gray-100 md:my-auto md:inline-flex md:w-auto">
          <Link to="/register">Regístrate</Link>
        </button>

        {/* login button */}
      </div>

      {/* container */}
      {/* <Dropdown /> */}
    </nav>
  );
};

export default NavbarNew;
