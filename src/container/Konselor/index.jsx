import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../../client';
import moment from 'moment';
import { Footer, Navbar } from '../../components';
import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import CardDays from './CardDays';

const Konselor = () => {
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
  }, [todayJadwal]);

  return (
    <div className="bg-color-palette-1 pt-20 lg:pt-0">
      <Navbar />
      <Breadcrumb
        separator="-"
        className="container mx-auto py-4 hidden lg:block"
      >
        <BreadcrumbItem className="text-color-palette-5">
          <Link to="/">Home</Link>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage className="text-gray-500">
          <Link to="/konselor">Konselor</Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <CardDays
        handleJadwalFilter={handleJadwalFilter}
        todayJadwal={todayJadwal}
      />
      <div className="flex flex-wrap justify-center w-full max-w-4xl mx-auto my-10 gap-2">
        {filterJadwal.length > 0 ? (
          <>
            {filterJadwal.map((item) => (
              <Link
                to={`/konselor/${item.slug.current}`}
                className="flex flex-col max-w-xs w-full border-none shadow-lg p-4 bg-color-palette-2 rounded-xl items-center scale-95 duration-300 hover:scale-100 text-color-palette-5 "
                key={item.nid}
              >
                <img
                  src={urlFor(item.imgUrl)}
                  alt="avatarLogo"
                  className="h-24 w-auto rounded-full lg:mb-4"
                />
                <div className="flex flex-col font-bold text-center">
                  <h1>{item.nama}</h1>
                  <h2>{item.nid}</h2>
                </div>
                <div className="flex flex-col text-center lg:py-4">
                  <h1 className="font-bold text-color-palette-4 lg:pb-2">
                    Jadwal Konseling
                  </h1>
                  {item.schedules.map((res) => (
                    <div key={res.jadwalabsen} className="flex flex-col">
                      <p className="font-semibold">
                        {res.jadwalabsen === 'monday'
                          ? 'Senin'
                          : res.jadwalabsen === 'tuesday'
                          ? 'Selasa'
                          : res.jadwalabsen === 'wednesday'
                          ? 'Rabu'
                          : res.jadwalabsen === 'thursday'
                          ? 'Kamis'
                          : res.jadwalabsen === 'friday'
                          ? 'Jumat'
                          : res.jadwalabsen}
                      </p>
                      <p>
                        {res.clock.length > 1 ? (
                          res.clock.map((e, i) => (
                            <div key={e + i} className="flex flex-col">
                              <span>{e} WIB</span>
                            </div>
                          ))
                        ) : (
                          <span>{res.clock} WIB</span>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </>
        ) : (
          <h1 className="h-96 flex justify-center items-center">
            Jadwal Konseling Libur!
          </h1>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Konselor;
