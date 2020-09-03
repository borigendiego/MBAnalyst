import React from 'react';
import './App.css';
//Components
import Header from './components/Header';
import Banner from './components/Banner'
import OurServices from './components/OurServices';
import WhoWeAre from './components/WhoWeAre';
import OurWork from './components/OurWork';
import YourData from './components/YourData';
import Contact from './components/Contact';
import Explore from './components/Explore';

function App() {
  return (
    <div className='App'>
        <Header />
        <Banner />
        <OurServices />
        <WhoWeAre />
        <Explore />
        <YourData />
        <OurWork />
        <Contact />
    </div>
  );
}

export default App;

