import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/about" element={<Layout />}>
        <Route index element={<About />} />
      </Route>
      <Route path="/contact" element={<Layout />}>
        <Route index element={<Contact />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
