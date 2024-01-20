import React from 'react'
import './main.css';
import { Routes, Route } from 'react-router-dom';
import * as Pages from '../../pages';


const Main = () => {
  return (
      <Routes>
        <Route index element={<Pages.Home />} />
        <Route path="/home" element={<Pages.Home />} />
        <Route path="/about" element={<Pages.About />} />
        <Route path="/menu" element={<Pages.Menu />} />
        <Route path="/reservations" element={<Pages.Reservations />} />
        <Route path="/order" element={<Pages.Order />} />
        <Route path="/login" element={<Pages.Login />} />
        <Route path="*" element={<Pages.NoPage />} />
      </Routes>
  );
};

export default Main;
