import React from 'react';

const CardDays = ({ handleJadwalFilter, todayJadwal }) => {
  return (
    <div className="flex flex-row justify-center space-x-4">
      {['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].map(
        (item, index) => (
          <div
            key={item + index}
            onClick={() => handleJadwalFilter(item)}
            className={`py-2 px-2 border-none rounded-xl cursor-pointer font-semibold ${
              todayJadwal === item
                ? 'bg-color-palette-4 text-color-palette-5'
                : 'bg-color-palette-3 text-white'
            }`}
          >
            {item === 'monday'
              ? 'Senin'
              : item === 'tuesday'
              ? 'Selasa'
              : item === 'wednesday'
              ? 'Rabu'
              : item === 'thursday'
              ? 'Kamis'
              : item === 'friday'
              ? 'Jumat'
              : item}
          </div>
        ),
      )}
    </div>
  );
};

export default CardDays;
