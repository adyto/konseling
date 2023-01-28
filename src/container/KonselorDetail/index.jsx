import React, { useEffect, useState } from 'react';
import { client } from '../../client';
import moment from 'moment';
import { Link, useParams } from 'react-router-dom';

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

    client.fetch(queryDosenId).then((data) => {
      setDosenId(data);
    });
  }, []);

  console.log(dosenId);
  return (
    <>
      {!simplified ? (
        <div className="flex flex-col">
          <h1>KOnsul dengan dosen {dosenId.nama}</h1>
          <h2>KOnsule dengan nid dosen {dosenId.nid}</h2>
        </div>
      ) : (
        <>
          <div className="bg-color-palette-2 py-8">
            <div className="container mx-auto flex flex-col">
              <h1 className="text-center lg:text-4xl font-bold text-color-palette-5">
                Daftar Konseler Hari Ini
              </h1>
              <div className="flex flex-wrap justify-center">
                {todayJadwal.map((item) => (
                  <Link to={`/konselor/${item.slug.current}`}>
                    <h1>{item.nama}</h1>
                  </Link>
                ))}
                <h1>312</h1>
                <h2>123</h2>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default KonselorDetail;
