import React from 'react';
import { urlFor } from '../../client';

const Profile = ({ dosenId }) => {
  return (
    <div className="flex flex-col justify-center container mx-auto items-center space-y-6 pb-10 lg:py-10 lg:flex-row lg:justify-evenly">
      {dosenId.imgUrl && (
        <img
          alt="avatarLogo"
          src={urlFor(dosenId?.imgUrl).url()}
          className="w-auto h-80 rounded-xl"
        />
      )}
      <div className="max-w-xs w-full border-none shadow-xl p-4 rounded-xl flex flex-col items-center text-color-palette-5 bg-color-palette-2">
        <div className="flex flex-col items-center font-bold lg:mb-4">
          <h1>{dosenId.nama}</h1>
          <h2>{dosenId.nid}</h2>
        </div>
        <h1 className="font-bold text-color-palette-4 lg:mb-2">
          Jadwal Konselor
        </h1>
        <div className="grid grid-cols-2 gap-2 justify-center lg:w-64">
          {dosenId.schedules &&
            dosenId.schedules.map((item) => (
              <div
                key={item.jadwalabsen}
                className="flex flex-col items-center"
              >
                <h1 className="capitalize font-bold">
                  {item.jadwalabsen === 'monday'
                    ? 'senin'
                    : item.jadwalabsen === 'tuesday'
                    ? 'selasa'
                    : item.jadwalabsen === 'wednesday'
                    ? 'rabu'
                    : item.jadwalabsen === 'thursday'
                    ? 'kamis'
                    : item.jadwalabsen === 'friday'
                    ? 'jumat'
                    : item.jadwalabsen}
                </h1>
                {item.clock.map((res) => (
                  <h2 key={res}>{res}</h2>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
