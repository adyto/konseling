import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Beranda, Layanan, Konselor } from './container';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="layanan" element={<Layanan />} />
      <Route path="konselor" element={<Konselor />} />
    </Routes>
  );
};

export default App;
