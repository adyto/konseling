import React from 'react';
import { Link } from 'react-router-dom';

const MainBanner = () => {
  return (
    <div className="pt-20 pb-10 lg:py-9 bg-color-palette-1">
      <div className="flex flex-row justify-center container mx-auto items-center">
        <div className="flex flex-col w-2/5 pl-4 lg:w-1/3 lg:pl-4">
          <h1 className="font-extrabold uppercase text-color-palette-5 text-xl  lg:text-5xl 2xl:text-7xl">
            Mental <br /> Health
          </h1>
          <h2 className="font-semibold space-y-1 lg:space-y-0 uppercase text-color-palette-5 text-xl  lg:text-4xl 2xl:text-6xl">
            <span className="bg-color-palette-2 inline-block lg:my-4 lg:px-2 lg:py-2">
              Is Just As
            </span>
            <br />
            <span className="inline-block bg-color-palette-2 lg:px-2 lg:py-2 lg:mb-4">
              Important As
            </span>
          </h2>
          <h3 className="font-extrabold uppercase text-color-palette-5 text-xl  lg:text-5xl 2xl:text-7xl">
            Physical <br /> Health
          </h3>
          <Link
            to={'/konselor'}
            className="border-none text-center bg-color-palette-3 text-color-palette-5 font-semibold scale-95 hover:scale-100 duration-300 w-3/4 text-sm py-2 mt-2 lg:w-3/5 rounded-xl lg:mt-4 lg:py-3 2xl:text-2xl 2xl:w-3/4 2xl:py-6"
          >
            Mulai Konselor
          </Link>
        </div>
        <div className="w-2/5 lg:w-1/2">
          <img src="banner1.png" alt="banner1" />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
