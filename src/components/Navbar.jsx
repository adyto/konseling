import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-color-palette-2">
      <div className="flex flex-row justify-between items-center container mx-auto py-10 max-lg:hidden">
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
      <div className="fixed inset-x-0 top-0 z-50 bg-white/25 backdrop-blur-sm border-b-2 p-4 border-white/20 lg:hidden">
        <div
          className="flex flex-row w-full
         justify-between items-center"
        >
          <h1 className="text-color-palette-5 font-bold text-2xl">
            E-Learning
          </h1>
          <div className="flex flex-col ">
            <HiMenuAlt4
              onClick={() => setToggle(true)}
              className="w-9 h-9 text-black transition-all duration-300 ease-in-out"
            />
            {toggle && (
              <div className="fixed z-20 w-3/4 h-screen right-0 top-0 flex flex-col items-end justify-start bg-color-palette-3 p-4">
                <HiX onClick={() => setToggle(false)} className="w-9 h-9" />
                <div className="flex flex-col items-start w-full gap-8 mt-10">
                  {['beranda', 'layanan', 'konselor'].map((item) => (
                    <NavLink
                      key={item}
                      to={`/${item}` === '/beranda' ? '/' : `/${item}`}
                      className={({ isActive }) =>
                        isActive
                          ? 'text-color-palette-1 capitalize text-xl font-semibold'
                          : 'capitalize text-xl font-semibold text-color-palette-5 '
                      }
                    >
                      {item}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
