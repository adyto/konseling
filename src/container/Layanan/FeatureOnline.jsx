import React from 'react';
import { GiTakeMyMoney } from 'react-icons/gi';
import { BsClockFill } from 'react-icons/bs';
import { FaUserLock } from 'react-icons/fa';
import { AiFillVideoCamera } from 'react-icons/ai';

const FeatureOnline = () => {
  const dataOnline = [
    {
      icon: <GiTakeMyMoney />,
      title: 'Biaya lebih hemat',
    },
    {
      icon: <BsClockFill />,
      title: 'Waktu & tempat yang fleksible',
    },
    {
      icon: <FaUserLock />,
      title: 'Privasimu dijamin 100% aman',
    },
    {
      icon: <AiFillVideoCamera />,
      title: 'Kamu bisa memilih untuk konseling via voice atau video call',
    },
  ];
  return (
    <div className="flex flex-row justify-center container mx-auto items-center p-4 max-w-lg lg:max-w-none lg:py-10">
      <div className="flex flex-col lg:w-1/3">
        <h1 className="text-color-palette-5 font-bold text-center lg:text-2xl lg:mb-4">
          Konseling Tatap Muka
        </h1>
        <div className="flex flex-col gap-4">
          {dataOnline.map((item) => (
            <div className="flex flex-row items-center gap-4">
              <span className="border-none bg-color-palette-3 text-color-palette-5 p-3 rounded-3xl lg:p-5">
                {item.icon}
              </span>
              <span className=" text-color-palette-5 capitalize lg:text-lg">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      <img src="/layanan-2.png" className="w-2/5 hidden lg:block" />
    </div>
  );
};

export default FeatureOnline;
