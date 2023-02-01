import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { client } from '../../client';
import Select from 'react-select';

const CardMessage = ({ dosenId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    noPhone: '',
  });
  const { name, email, noPhone } = formData;
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [dateStart, setDateStart] = useState();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const optionsLayanan = [
    { value: 'layananOffline', label: 'Konseling Tatap Muka' },
    { value: 'layananOnline', label: 'Konseling Online' },
  ];
  const optionsTopic = [
    { value: 'topicAkademic', label: 'Konseling Masalah Akademik' },
    { value: 'topicKarier', label: 'Konseling Masalah Karier' },
    { value: 'topicSeks', label: 'Konseling Kekerasan Seks' },
    { value: 'topicKeluarga', label: 'Konseling Kekesaran Keluarga' },
    { value: 'topicPribadi', label: 'Konseling Masalah Pribadi' },
    { value: 'topicSosial', label: 'Konseling Masalah Sosial' },
  ];

  const onSubmitMessage = (data) => {
    setLoading(true);

    const cardMessage = {
      _type: 'cardMessage',
      name: name,
      email: email,
      noPhone: noPhone,
      jenisLayanan: data.selectedLayanan.label,
      topicLayanan: data.selectedTopic.label,
      dosen: dosenId.nama,
      jamStart: dateStart,
    };

    client.create(cardMessage).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      {!isFormSubmitted ? (
        <div className="bg-color-palette-2">
          <form
            onSubmit={handleSubmit(onSubmitMessage)}
            className="flex flex-row items-center container mx-auto py-10 justify-center "
          >
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
                {errors.name && (
                  <p className="text-red-500">Nama Harus Diisi!</p>
                )}
                <input
                  type="text"
                  placeholder="Email"
                  {...register('email', {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  className="bg-color-palette-1 px-2 py-2 rounded-lg"
                  value={email}
                  name="email"
                  onChange={handleChangeInput}
                />
                {errors.email && (
                  <p className="text-red-500">Email Harus Diisi!</p>
                )}
                <input
                  type="text"
                  placeholder="Nomer WhatsApp"
                  {...register('noPhone', {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                  })}
                  className="bg-color-palette-1 px-2 py-2 rounded-lg"
                  value={noPhone}
                  name="noPhone"
                  onChange={handleChangeInput}
                />
                {errors.noPhone && (
                  <p className="text-red-500">Nomor HP Harus Diisi!</p>
                )}
                <Controller
                  name="selectedLayanan"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={optionsLayanan}
                      placeholder="Pilih Layanan"
                    />
                  )}
                />
                {errors.selectedLayanan && (
                  <p className="text-red-500">Jenis Layanan Harus Diisi!</p>
                )}
                <Controller
                  name="selectedTopic"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={optionsTopic}
                      placeholder="Pilih Topic Masalah"
                    />
                  )}
                />
                {errors.selectedLayanan && (
                  <p className="text-red-500">Topic Masalah Harus Diisi!</p>
                )}
              </div>
              <div className="flex flex-col items-center lg:py-6">
                <p className="text-color-palette-5 font-bold text-lg">
                  Date Start {dateStart}
                </p>
                <input
                  type="datetime-local"
                  onChange={(e) => setDateStart(e.target.value)}
                  className="py-2 px-4 rounded-lg"
                />
              </div>
              <button
                type="submit"
                className=" bg-color-palette-4 text-color-palette-1 px-2 py-2 rounded-lg md:w-48"
              >
                {loading ? 'Terkirim' : 'Kirim Konseling'}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-color-palette-2 py-32">
          <h3 className="text-center max-w-4xl font-semibold capitalize text-color-palette-5 w-full mx-auto text-4xl">
            Data Konselor sudah terkirim. pihak konselor akan menghubungi anda
            untuk melakukan ketersediaan konseling, terimakasih
          </h3>
        </div>
      )}
    </>
  );
};

export default CardMessage;
