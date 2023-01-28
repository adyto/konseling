import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Beranda, Layanan, Konselor, KonselorDetail } from './container';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="layanan" element={<Layanan />} />
      <Route path="konselor" element={<Konselor />} />
      <Route path="konselor/:slug" element={<KonselorDetail />} />
    </Routes>
  );
};

export default App;
