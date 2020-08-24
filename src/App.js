import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner'
import OurServices from './components/OurServices';
import WhoWeAre from './components/WhoWeAre';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
        <Header />
        <Banner />
        <OurServices />
        <WhoWeAre />
        <Contact />
    </div>
  );
}

export default App;

