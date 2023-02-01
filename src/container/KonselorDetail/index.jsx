import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../../client';
import moment from 'moment';
import { Link, useParams } from 'react-router-dom';
import { Navbar } from '../../components';
import CardMessage from './CardMessage';
import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';

const KonselorDetail = ({ simplified }) => {
  const current = new Date();
  const [todayJadwal, setTodayJadwal] = useState([]);

  const { slug } = useParams();
  const [dosenId, setDosenId] = useState([]);

  useEffect(() => {
    const query = '*[_type == "dosen"]';
    const queryDosenId = `*[_type == "dosen" && slug.current == '${slug}'][0]`;

    client.fetch(query).then((data) => {
      setTodayJadwal(
        data.filter((res) =>
          res.jadwal.includes(
            moment(current).locale('').format('dddd').toLowerCase(),
          ),
        ),
      );
    });

    if (slug) {
      client.fetch(queryDosenId).then((data) => {
        setDosenId(data);
      });
    }
  }, [slug]);

  console.log(todayJadwal);

  return (
    <>
      {simplified ? (
        <div className="bg-color-palette-2 py-8">
          <div className="container mx-auto flex flex-col">
            <h1 className="text-center lg:text-4xl font-bold text-color-palette-5 mb-4">
              Daftar Konselor Hari Ini
            </h1>
            {todayJadwal.length > 0 ? (
              <div className="flex flex-wrap justify-center w-full gap-4">
                {todayJadwal.map((item) => (
                  <Link
                    to={`/konselor/${item.slug.current}`}
                    className="border-none p-4 bg-color-palette-1 rounded-xl max-w-xs w-full flex flex-col items-center scale-95 hover:scale-100 duration-300"
                    key={item.nid}
                  >
                    <img
                      src={urlFor(item.imgUrl)}
                      alt="avatarLogo"
                      className="h-24 w-auto rounded-full lg:mb-4"
                    />
                    <h1 className="font-bold text-color-palette-5">
                      {item.nama}
                    </h1>
                    <h2 className="font-bold text-color-palette-5">
                      {item.nid}
                    </h2>
                    <div className="flex flex-col">
                      <h3 className="font-bold lg:mt-4 text-color-palette-3">
                        Jadwal Konselor
                      </h3>
                      <h4 className="font-semibold text-color-palette-5 capitalize text-center">
                        {item.schedules.map((res) => (
                          <div className="flex flex-col">
                            <h4 key={res._key}>{res.jadwalabsen}</h4>
                            {res.clock.map((r) => (
                              <h5 key={r} className="font-normal">
                                {r}
                              </h5>
                            ))}
                          </div>
                        ))}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex flex-col w-full justify-center items-center">
                <h1 className="text-center capitalize font-semibold text-2xl max-w-3xl lg:mt-10 text-color-palette-5">
                  Jadwal layanan konseling dilaksanakan pada hari kerja yaitu
                  senin-jum’at, Waktu konseling tergantung masing-masing
                  konselor.
                </h1>
                <Link
                  to={'/konselor'}
                  className="border-none rounded-xl font-bold bg-color-palette-1 text-color-palette-5 scale-95 duration-300 hover:scale-100 lg:mt-6 lg:py-3 lg:px-6"
                >
                  Jadwal Konselor
                </Link>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="font-Poppins bg-color-palette-1 h-full w-full">
          <Navbar />
          <Breadcrumb separator="-" className="container mx-auto py-4">
            <BreadcrumbItem className="text-color-palette-5">
              <Link to="/">Home</Link>
            </BreadcrumbItem>

            <BreadcrumbItem className="text-color-palette-5">
              <Link to="/konselor">Konselor</Link>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage className="text-gray-500">
              <Link to={`/konselor/${slug}`}>{dosenId.nid}</Link>
            </BreadcrumbItem>
          </Breadcrumb>
          <div className="flex flex-col container mx-auto py-10">
            <div className="flex flex-row justify-evenly items-center">
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
          </div>
          <CardMessage dosenId={dosenId} />
        </div>
      )}
    </>
  );
};

export default KonselorDetail;
