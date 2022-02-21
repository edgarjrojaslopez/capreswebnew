import React from 'react';
import HeroImg from '../assets/images/img6.jpg';
function Hero() {
  return (
    <div>
      <section className="body-font flex h-screen w-full bg-hero-pattern  bg-repeat text-gray-600">
        <div className="mx-auto flex flex-col px-10 py-24 md:flex-row md:items-center md:justify-center ">
          <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
            <h1 className="title-font mb-4 font-medium text-gray-900 sm:text-4xl md:text-7xl">
              Bienvenidos a <br className="hidden lg:inline-block" />
              <span className="font-bold text-blue-500/80">Capres</span>
              <span className="text-blue-500/80">.</span>
              <hr className="mx-auto block w-1/2" />
              <span className="text-5xl">tu caja de ahorros</span>
            </h1>
            <p className="mb-8 font-medium leading-relaxed text-gray-600">
              Nuestra misión: mantener informados a nuestros Asociados en sus
              líneas maestras que son su razón de ser.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex rounded border-0 bg-blue-700 py-3 px-10 text-2xl text-gray-50 hover:bg-blue-600 focus:outline-none">
                No tienes una cuenta?
              </button>
            </div>
          </div>
          <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
            <img
              className="rounded object-cover object-center"
              alt="hero"
              src={HeroImg}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
