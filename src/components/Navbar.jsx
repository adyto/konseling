import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-color-palette-2 font-Poppins">
      <div className="flex flex-row justify-between items-center container mx-auto py-10">
        <Link to={'/'} className="text-color-palette-4 text-2xl font-bold">
          E - Konseling
        </Link>
        <div className="flex flex-row space-x-8">
          {['beranda', 'layanan', 'konselor'].map((item) => (
            <NavLink
              key={item}
              to={`/${item}` === '/beranda' ? '/' : `/${item}`}
              className={({ isActive }) =>
                isActive
                  ? 'text-color-palette-4 capitalize text-xl font-semibold'
                  : 'capitalize text-xl font-semibold text-color-palette-5 hover:text-color-palette-1'
              }
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
