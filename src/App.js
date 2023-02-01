import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Beranda,
  Layanan,
  Konselor,
  KonselorDetail,
  Dashboard,
  SignUp,
  SignIn,
} from './container';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="layanan" element={<Layanan />} />
      <Route path="konselor" element={<Konselor />} />
      <Route path="konselor/:slug" element={<KonselorDetail />} />
      <Route path="dashboard" element={<Dashboard />} />
      {/* <Route path="sign-up" element={<SignUp />} />
      <Route path="sign-in" element={<SignIn />} /> */}
    </Routes>
  );
};

export default App;
