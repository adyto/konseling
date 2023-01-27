import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <Link to={'/'} className="text-color-palette-4 text-2xl font-bold">
        E - Konseling
      </Link>
      <div className="flex flex-row space-x-8">
        {['beranda', 'layanan', 'konselor'].map((item) => (
          <NavLink
            end
            to={`/${item}` === '/beranda' ? '/' : `/${item}`}
            className={({ isActive }) =>
              isActive
                ? 'text-color-palette-3 capitalize text-xl font-semibold'
                : 'capitalize text-xl font-semibold text-black hover:text-color-palette-4'
            }
          >
            {item}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
