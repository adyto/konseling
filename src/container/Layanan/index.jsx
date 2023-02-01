import React from 'react';
import { Navbar } from '../../components';
import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import FeatureOffline from './FeatureOffline';
import FeatureOnline from './FeatureOnline';

const Layanan = () => {
  return (
    <div className="font-Poppins bg-color-palette-1">
      <Navbar />
      <Breadcrumb separator="-" className="container mx-auto py-4">
        <BreadcrumbItem className="text-color-palette-5">
          <Link to="/">Home</Link>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage className="text-gray-500">
          <Link to="/layanan">Layanan</Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <h1 className="text-center font-bold text-2xl text-color-palette-5">
        Layanan Konseling
      </h1>
      <FeatureOffline />
      <FeatureOnline />
    </div>
  );
};

export default Layanan;
