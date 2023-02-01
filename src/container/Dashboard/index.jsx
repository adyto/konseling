import React, { useState, useEffect } from 'react';
import { client } from '../../client';
import moment from 'moment';

const Dashboard = () => {
  // console.log(moment(date2).locale('id'));
  // console.log(date2);
  const [dataMessages, setDataMessages] = useState([]);
  useEffect(() => {
    const query = '*[_type == "cardMessage"]';

    client.fetch(query).then((data) => {
      setDataMessages(data);
    });
  }, []);

  console.log(dataMessages);
  return (
    <div className="bg-color-palette-1 font-Poppins">
      <div className="flex flex-col container mx-auto">
        <h1>Data Dashboard</h1>
        <div className="grid grid-cols-7">
          <h2>Nama Mahasiswa</h2>
          <h3>Jenis Layanan</h3>
          <h4>Topic Masalah</h4>
          <h5>Email</h5>
          <h6>No Phone</h6>
          <h6>Nama Dosen</h6>
          <h6>Waktu</h6>
        </div>
        <div>
          {dataMessages.map((item) => (
            <div
              key={item._id}
              className="grid grid-cols-7 break-words gap-1 border"
            >
              <p>{item.name}</p>
              <p>{item.jenisLayanan}</p>
              <p>{item.topicLayanan}</p>
              <p>{item.email}</p>
              <p>{item.noPhone}</p>
              <p>{item.dosen}</p>
              <p>{moment(item.jamStart).format('dddd, DD MM YYYY, HH:mm')}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
