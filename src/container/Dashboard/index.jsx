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
        <div className="flex flex-col">
          {dataMessages.map((item) => (
            <div className="flex flex-row gap-5">
              <p>{item.name}</p>
              <p>{item.message}</p>
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
