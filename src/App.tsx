/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Methodology from './pages/Methodology';
import Projects from './pages/Projects';
import ProjectPerdizes01 from './pages/ProjectPerdizes01';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-integra-black bg-integra-bg">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/perdizes-01" element={<ProjectPerdizes01 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
