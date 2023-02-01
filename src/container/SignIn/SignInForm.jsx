import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { client } from '../../client';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const SignInForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
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

  const [loginUsers, setLoginUsers] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const query = '*[_type == "users"]';
    client.fetch(query).then((data) => {
      setLoginUsers(data);
    });
  }, []);

  console.log(user);
  // console.log(loginUsers);

  // console.log(loginUsers);
  const onSubmitMessage = () => {
    setLoading(true);

    loginUsers.map((item) => {
      if (item.email != email && item.password != password) {
        console.log('Akun tidak terdaftar');
      } else if (item.email == email && item.password == password) {
        setUser(item.filter((res) => res.includes(email)));
        console.log('Berhasil Login');
      } else {
        console.log('Email / Password Salah');
      }
    });

    // setLoading(false);
    // setIsFormSubmitted(true);
  };

  return (
    <>
      {!isFormSubmitted ? (
        <form
          onSubmit={handleSubmit(onSubmitMessage)}
          className="flex flex-col max-w-md w-full"
        >
          <div className="flex flex-col items-center">
            <h1>Sign In</h1>
            <h2>Login Akun </h2>
            <div className="flex flex-col gap-3 w-80 md:w-96">
              <input
                type="text"
                placeholder="Email"
                {...register('email', { required: true })}
                className="bg-color-palette-1 px-2 py-2 rounded-lg"
                value={email}
                name="email"
                onChange={handleChangeInput}
              />
              <input
                type="text"
                placeholder="Password"
                {...register('password', { required: true })}
                className="bg-color-palette-1 px-2 py-2 rounded-lg"
                value={password}
                name="password"
                onChange={handleChangeInput}
              />
            </div>
            <div className="text-color-palette-4 flex flex-col my-2">
              <div></div>
              <ErrorMessage
                errors={errors}
                name="email"
                message="Email harus diisi!"
              />
              <ErrorMessage
                errors={errors}
                name="password"
                message="Password harus diisi!"
              />
            </div>
            <button
              type="submit"
              className=" bg-color-palette-4 text-color-palette-1 px-2 py-2 rounded-lg md:w-48"
            >
              {loading ? 'Sucess' : 'Sign-Up'}
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

export default SignInForm;
