import React from 'react';
import { Navbar } from '../../components';
import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Layanan = () => {
  return (
    <div className="font-Poppins bg-color-palette-1">
      <div className="container mx-auto py-14">
        <Navbar />
        Layanan
        <Breadcrumb separator="/">
          <BreadcrumbItem className="text-red-500">
            <Link to="/">Home</Link>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage className="text-gray-500">
            <Link to="/layanan">Layanan</Link>
          </BreadcrumbItem>
        </Breadcrumb>
        {/* <Breadcrumbs /> */}
      </div>
    </div>
  );
};

export default Layanan;
