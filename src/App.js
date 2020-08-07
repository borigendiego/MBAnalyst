import React from 'react';
import './App.css';
import Header from './components/Header/NeoHeader';
import Banner from './components/Banner'
import OurServices from './components/OurServices';

function App() {
  return (
    <div className='App'>
        <Header />
        <Banner />
        <OurServices />
    </div>
  );
}

export default App;

