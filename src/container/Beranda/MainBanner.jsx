import React from 'react';
import { Link } from 'react-router-dom';

const MainBanner = () => {
  return (
    <div className="py-9 bg-color-palette-1">
      <div className="flex flex-row justify-center container mx-auto items-center">
        <div className="flex flex-col w-1/3 font-Poppins lg:pl-4">
          <h1 className="font-extrabold uppercase text-color-palette-5 lg:text-5xl 2xl:text-7xl">
            Mental <br /> Health
          </h1>
          <h2 className="font-semibold uppercase text-color-palette-5 lg:text-4xl 2xl:text-6xl">
            <span className="bg-color-palette-2 inline-block lg:my-4 lg:px-2 lg:py-2">
              Is Just As
            </span>
            <br />
            <span className="inline-block bg-color-palette-2 lg:px-2 lg:py-2 lg:mb-4">
              Important As
            </span>
          </h2>
          <h3 className="font-extrabold uppercase text-color-palette-5 lg:text-5xl 2xl:text-7xl">
            Physical <br /> Health
          </h3>
          <Link
            to={'/konselor'}
            className="border-none text-center bg-color-palette-3 text-color-palette-5 font-semibold scale-95 hover:scale-100 duration-300 w-3/5 rounded-xl lg:mt-4 lg:py-3 2xl:text-2xl 2xl:w-3/4 2xl:py-6"
          >
            Mulai Konselor
          </Link>
        </div>
        <div className="w-1/2 ">
          <img src="banner1.png" />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
