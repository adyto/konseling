import React from 'react';
import { Navbar, Footer } from '../../components';
import KonselorDetail from '../KonselorDetail';
import AccordionCard from './AccordionCard';
import MainBanner from './MainBanner';

const Beranda = () => {
  return (
    <div className="font-Poppins">
      <Navbar />
      <MainBanner />
      <KonselorDetail simplified />
      <AccordionCard />
      <Footer />
    </div>
  );
};

export default Beranda;
