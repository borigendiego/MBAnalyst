import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner'
import OurServices from './components/OurServices';
import WhoWeAre from './components/WhoWeAre';
import Index from './components/WhoWeAre';
import OurWork from './components/OurWork';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
        <Header />
        <Banner />
        <OurServices />
        <WhoWeAre />
        <Index />
        <OurWork />
        <Contact />
    </div>
  );
}

export default App;

