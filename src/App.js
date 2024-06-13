import React from 'react';
import { Routes,Route,BrowserRouter } from 'react-router-dom';

import './AppStyle.css';
import Header from './component/Header/Header';
import Home from './component/Pages/Home';
import About from './component/Pages/About/About';
import Services from './component/Pages/Services/Services';
import Portfolio from './component/Pages/Portfolio/Portfolio';
import Contact from './component/Pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <section id='background'></section>
      <Header />
      
      <section className='ms-193'>
        <Routes>
          <Route path='//portfoilo' element={<Home />}/>
          <Route path='About' element={<About />}/>
          <Route path='Services' element={<Services />}/>
          <Route path='Works' element={<Portfolio />}/>
          <Route path='Contact' element={<Contact />}/>
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
