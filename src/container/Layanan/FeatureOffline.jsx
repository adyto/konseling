import React from 'react';
import { MdOutlineHomeWork, MdOutlinePeople } from 'react-icons/md';
import { FaPeopleArrows } from 'react-icons/fa';
import { IoGitNetwork } from 'react-icons/io5';

const FeatureOffline = () => {
  const dataOffline = [
    {
      icon: <MdOutlineHomeWork className="lg:h-7 lg:w-auto" />,
      title: 'Ruangan konseling yang nyaman & aman',
    },
    {
      icon: <FaPeopleArrows className="lg:h-7 lg:w-auto" />,
      title: 'Efektivitas konseling maksimal',
    },
    {
      icon: <MdOutlinePeople className="lg:h-7 lg:w-auto" />,
      title: 'Langsung bertemu psikolog & konseling tatap muka',
    },
    {
      icon: <IoGitNetwork className="lg:h-7 lg:w-auto" />,
      title: 'Bisa melakukan test assessment & psikoterapi',
    },
  ];
  return (
    <div className="flex flex-row justify-center container mx-auto items-center lg:py-10">
      <img src="/layanan-1.png" className="w-2/5" />
      <div className="flex flex-col w-1/3">
        <h1 className="text-color-palette-5 font-bold text-center lg:text-2xl lg:mb-4">
          Konseling Tatap Muka
        </h1>
        <div className="flex flex-col gap-4">
          {dataOffline.map((item) => (
            <div className="flex flex-row items-center gap-4">
              <span className="border-none bg-color-palette-3 text-color-palette-5 rounded-3xl lg:p-5">
                {item.icon}
              </span>
              <span className=" text-color-palette-5 capitalize lg:text-lg">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureOffline;
