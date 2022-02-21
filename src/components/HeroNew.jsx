import React from 'react';
import HeroImg from '../assets/images/img6.jpg';
import Button from './Button';
import { Link } from 'react-router-dom';

const HeroNew = () => {
  return (
    <div className="mb-60 flex min-w-full flex-col items-center justify-center md:mb-0 md:min-h-screen">
      <div className="absolute w-full  bg-gray-800/60 md:h-screen ">
        <div className="absolute z-30 h-full w-full bg-gray-900/50 md:hidden" />
        <img
          className="aspect-video absolute min-h-fit min-w-full mix-blend-overlay md:h-full md:w-full"
          src={HeroImg}
          alt="hero"
        />
        <div className="items-left absolute mt-20 flex min-h-full flex-col justify-center px-10 py-4 md:mt-auto">
          <h2 className="mb-0 font-body text-lg font-semibold tracking-wider text-gray-100 md:mb-4 md:text-5xl">
            Bienvenidos a
          </h2>{' '}
          <h1 className="mt- font-heading text-5xl font-extrabold uppercase tracking-wider text-gray-100 md:text-8xl">
            capres
          </h1>
          <p className="prose text-xl font-medium leading-normal text-gray-100 md:text-3xl">
            Tu caja de ahorros
          </p>
          <Button
            size="md"
            textColor="gray-100"
            buttonWidth="max-w-fit"
            bgColor="blue-700"
            fontWheight="medium"
          >
            <Link to="/login" className="text-sm md:text-xl">
              Ingresa aquí
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroNew;
