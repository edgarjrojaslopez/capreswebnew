/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { LockClosedIcon } from '@heroicons/react/solid'
import Logo from '../assets/images/capres.jpg'
import {Link} from 'react-router-dom'

export default function Register() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="bg-gray-100 min-h-min max-w-max flex items-center justify-center border-2 rounded-md border-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-4">
          <div>
            <img
              className="mx-auto h-20 w-auto"
              src={Logo}
              alt="Capres Logo"
            />
            <h2 className="mt-6 mx-1 text-center text-3xl font-extrabold text-gray-900">Registra tu cuenta</h2>
            {/* <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="#" className="font-medium text-blue-600 -mt-2 hover:text-blue-500">
                start your 14-day free trial
              </a>
            </p> */}
          </div>
          <form className="mt-6 space-y-2" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="text" className="text-gray-500 ">
                  Nombre Completo
                </label>
                <input
                  id="full-name"
                  name="full-name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 mb-4 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Escribe tu nombre"
                />
              </div>
              <div>
                <label htmlFor="text" className="text-gray-500 ">
                  Identificación
                </label>
                <input
                  id="identification"
                  name="full-name"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 mb-4 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Número de cédula"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="text-gray-500 ">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 mb-4 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Correo electrónico"
                />
              </div>
              <div>
                <label htmlFor="password" className="text-gray-500">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 mb-4 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Recordarme
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-blue-700 hover:text-blue-500">
                  Olvidaste tu password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-blue-500 group-hover:text-blue-400" aria-hidden="true" />
                </span>
                Log in
              </button>
            </div>
            <div>
              <p className="text-center  text-gray-700 text-sm font-medium mt-2">
                Si ya tienes una cuenta, pulsa <strong>
                  <Link to="/login" className='text-blue-700'>aquí</Link>
                </strong>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
