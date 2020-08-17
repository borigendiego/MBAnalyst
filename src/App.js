import React from 'react';
import './App.css';
import Header from './components/Header/NeoHeader';
import Banner from './components/Banner'
import OurServices from './components/OurServices';
import WhoWeAre from './components/WhoWeAre/WhoWeAre';

function App() {
  return (
    <div className='App'>
        <Header />
        <Banner />
        <OurServices />
        <WhoWeAre />
    </div>
  );
}

export default App;

