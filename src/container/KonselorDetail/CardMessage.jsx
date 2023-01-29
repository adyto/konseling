import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { client } from '../../client';

const CardMessage = () => {
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

  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

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
  return (
    <>
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
    </>
  );
};

export default CardMessage;
