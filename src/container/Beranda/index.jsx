import React from 'react';
import { Navbar, Footer } from '../../components';
import KonselorDetail from '../KonselorDetail';
import AccordionCard from './AccordionCard';
import MainBanner from './MainBanner';

const Beranda = () => {
  return (
    <>
      <Navbar />
      <MainBanner />
      <KonselorDetail simplified />
      <AccordionCard />
      <Footer />
    </>
  );
};

export default Beranda;
