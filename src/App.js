import React from 'react';
import './App.css';
import Header from './components/Header/NeoHeader';
import Banner from './components/Banner'
import OurServices from './components/OurServices';
import Index from './components/WhoWeAre';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
        <Header />
        <Banner />
        <OurServices />
        <Index />
        <Contact />
    </div>
  );
}

export default App;

