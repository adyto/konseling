import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../../client';
import moment from 'moment';
import { Link, useParams } from 'react-router-dom';
import { Navbar } from '../../components';

import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const KonselorDetail = ({ simplified }) => {
  const current = new Date();
  const [todayJadwal, setTodayJadwal] = useState([]);

  const { slug } = useParams();
  const [dosenId, setDosenId] = useState([]);

  const [formData, setFormData] = useState({ name: '', message: '' });
  const { name, message } = formData;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query = '*[_type == "dosen"]';

    client.fetch(query).then((data) => {
      setTodayJadwal(
        data.filter((res) =>
          res.jadwal.includes(
            moment(current).locale('').format('dddd').toLowerCase(),
          ),
        ),
      );
    });
  }, []);

  useEffect(() => {
    const queryDosenId = `*[_type == "dosen" && slug.current == '${slug}'][0]`;

    if (slug) {
      client.fetch(queryDosenId).then((data) => {
        setDosenId(data);
      });
    }
  }, [slug]);

  const onSubmitMessage = () => {
    setLoading(true);

    const cardMessage = {
      _type: 'cardMessage',
      name: name,
      message: message,
    };

    client.create(cardMessage).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  //   console.log(dosenId.imgUrl);

  //   const src = urlFor(dosenId.imgUrl && dosenId.imgUrl[0]).url();

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

          {/* <img src={urlFor(dosenId.imgUrl)} /> */}
          <div className="flex flex-row items-center container mx-auto py-10 justify-center">
            {dosenId.imgUrl && (
              <img
                src={urlFor(dosenId?.imgUrl).url()}
                className="w-auto h-80 rounded-xl"
              />
            )}
            {/* <img src={urlFor(dosenId.imgUrl)} /> */}
            <div className="flex flex-col ml-10">
              <h1>Nama Dosen{dosenId.nama}</h1>
              <h2>NID Dosen {dosenId.nid}</h2>
              {!isFormSubmitted ? (
                <form onSubmit={handleSubmit(onSubmitMessage)}>
                  <div className="flex flex-col items-center">
                    <div className="flex flex-col gap-3 w-80 md:w-96">
                      <input
                        type="text"
                        placeholder="Nama"
                        {...register('name', { required: true })}
                        className="bg-color-palette-1 px-2 py-2 rounded-lg"
                        value={name}
                        name="name"
                        onChange={handleChangeInput}
                      />

                      <textarea
                        type="text"
                        rows={3}
                        placeholder="Pesan"
                        {...register('message', { required: true })}
                        className="bg-color-palette-1 px-2 py-2 rounded-lg resize-none"
                        value={message}
                        name="message"
                        onChange={handleChangeInput}
                      />
                    </div>
                    <div className="text-color-palette-4 flex flex-col my-2">
                      <div>
                        <ErrorMessage
                          errors={errors}
                          name="name"
                          message="Nama harus diisi!"
                        />
                      </div>
                      <ErrorMessage
                        errors={errors}
                        name="message"
                        message="Pesan harus diisi!"
                      />
                    </div>
                    <button
                      type="submit"
                      className=" bg-color-palette-4 text-color-palette-1 px-2 py-2 rounded-lg md:w-48"
                    >
                      {loading ? 'Terkirim' : 'Kirim Ucapan'}
                    </button>
                  </div>
                </form>
              ) : (
                <h3 className="text-center max-w-2xl font-semibold text-color-palette-1 text-sm lg:text-base capitalize">
                  Terimakasih
                </h3>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KonselorDetail;
