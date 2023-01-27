import React, { useEffect, useState } from 'react';
import { client } from './client';

import moment from 'moment';

const App = () => {
  const current = new Date();
  const [todayJadwal, setTodayJadwal] = useState(
    moment(current).locale('').format('dddd').toLowerCase(),
  );
  const [jadwal, setJadwal] = useState([]);
  const [filterJadwal, setFilterJadwal] = useState([]);

  const handleJadwalFilter = (item) => {
    setTodayJadwal(item);
    setFilterJadwal(jadwal.filter((work) => work.jadwal.includes(item)));
  };

  useEffect(() => {
    const query = '*[_type == "dosen"]';

    client.fetch(query).then((data) => {
      setJadwal(data);
      setFilterJadwal(data.filter((res) => res.jadwal.includes(todayJadwal)));
    });
  }, []);
  return (
    <div className="text-red-400 flex flex-col">
      <h1>App</h1>
      <div className="flex flex-row justify-center space-x-4">
        {['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].map(
          (item, index) => (
            <div
              key={item + index}
              onClick={() => handleJadwalFilter(item)}
              className={`py-2 px-2 border-none rounded-xl cursor-pointer  text-white ${
                todayJadwal === item
                  ? 'bg-violet-500 text-black'
                  : 'bg-slate-400'
              }`}
            >
              {item}
            </div>
          ),
        )}
      </div>
      <div className="flex flex-row justify-center mt-10 gap-2">
        {filterJadwal.map((item, index) => (
          <div className="flex flex-col border-2 py-2 px-2 ">
            <h1>{item.nama}</h1>
            <h2>{item.nid}</h2>
            <div className="flex flex-col mt-4">
              <p>Jadwal Dosen: </p>
              {item.jadwal}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
