import React from 'react';
import Content from '../components/Content';
import Features from '../components/Features';
import Hero from '../components/Hero';
import HeroNew from '../components/HeroNew';

function Inicio() {
  return (
    <div className=" flex flex-col justify-evenly">
      <HeroNew />
      <Features />
      <Content />
    </div>
  );
}

export default Inicio;
