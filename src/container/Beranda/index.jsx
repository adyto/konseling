import React from 'react';
import { Navbar } from '../../components';
import KonselorDetail from '../KonselorDetail';
import MainBanner from './MainBanner';

const Beranda = () => {
  return (
    <div className="font-Poppins">
      <Navbar />
      <MainBanner />
      <KonselorDetail simplified />
    </div>
  );
};

export default Beranda;
