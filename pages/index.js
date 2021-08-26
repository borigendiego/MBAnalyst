import React from 'react';
import dynamic from 'next/dynamic';
//Components
import OurServices from '../components/OurServices';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Contact from '../components/Contact';

const WhoWeAre = dynamic(() => import('../components/WhoWeAre'));
const Explore = dynamic(() => import('../components/Explore'));
const YourData = dynamic(() => import('../components/YourData'));
const Three = dynamic(() => import('../components/Three'));
const OurWork = dynamic(() => import('../components/OurWork'));

function App() {
    return (
        <div className="App">
            <Header />
            <Banner />
            <OurServices />
            <WhoWeAre />
            <Explore />
            <YourData />
            <Three />
            <OurWork />
            <Contact />
        </div>
    );
}

export default App;
