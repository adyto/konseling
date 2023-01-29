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
        data.filter(
          (res) =>
            // res.schedules.map((item) => (item)).includes(
            //   moment(current).locale('').format('dddd').toLowerCase(),
            // ),
            res.jadwal.includes(
              moment(current).locale('').format('dddd').toLowerCase(),
            ),
          // res.jadwal,
          // res.schedules,
          // res.schedules.filter((item) => item.jadwalabsen),
        ),
      );
    });
    if (slug) {
      client.fetch(queryDosenId).then((data) => {
        setDosenId(data);
      });
    }
  }, [slug]);
  console.log(dosenId);

  return (
    <>
      {simplified ? (
        <div className="bg-color-palette-2 py-8">
          <div className="container mx-auto flex flex-col">
            <h1 className="text-center lg:text-4xl font-bold text-color-palette-5 mb-4">
              Daftar Konseler Hari Ini
            </h1>
            <div className="flex flex-wrap justify-center w-full gap-4">
              {todayJadwal.map((item) => (
                <Link
                  to={`/konselor/${item.slug.current}`}
                  className="border-none p-4 bg-color-palette-1 rounded-xl max-w-xs w-full flex flex-col items-center scale-95 hover:scale-100 duration-300"
                  key={item.nid}
                >
                  <img
                    src={urlFor(item.imgUrl)}
                    className="h-24 w-auto rounded-full lg:mb-4"
                  />
                  <h1 className="font-bold text-color-palette-5">
                    {item.nama}
                  </h1>
                  <h2 className="font-bold text-color-palette-5">{item.nid}</h2>
                  <div className="flex flex-col">
                    <h3 className="font-bold lg:mt-4 text-color-palette-3">
                      Jadwal Konseler
                    </h3>
                    <h4 className="font-semibold text-color-palette-5 capitalize text-center">
                      {item.jadwal.map((item) => (
                        <p key={item}>{item}</p>
                      ))}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="font-Poppins bg-color-palette-1 h-screen">
          <Navbar />
          <Breadcrumb separator="/">
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <Link to="/konselor">Konsoler</Link>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <Link to={`/konselor/${slug}`}>{slug}</Link>
            </BreadcrumbItem>
          </Breadcrumb>
          <div className="flex flex-row items-center container mx-auto py-10 justify-center">
            {dosenId.imgUrl && (
              <img
                src={urlFor(dosenId?.imgUrl).url()}
                className="w-auto h-80 rounded-xl"
              />
            )}
            <div className="flex flex-col ml-10">
              <h1>Nama Dosen{dosenId.nama}</h1>
              <h2>NID Dosen {dosenId.nid}</h2>
              <h1>Jadwal Konselor</h1>
              {dosenId.schedules &&
                dosenId.schedules.map((item) => (
                  <div>
                    <h1>{item.jadwalabsen}</h1>
                    {item.clock.map((res) => (
                      <h2>{res}</h2>
                    ))}
                  </div>
                ))}
              <CardMessage dosenId={dosenId} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KonselorDetail;
