import React from 'react';
//Components
import OurServices from '../components/OurServices';
import Header from "../components/Header";
import Banner from "../components/Banner";
import WhoWeAre from "../components/WhoWeAre";
import Explore from "../components/Explore";
import YourData from "../components/YourData";
import Three from "../components/Three";
import OurWork from "../components/OurWork";
import Contact from "../components/Contact";

function App() {
    return (
        <div className="App">
            <Header />
            <Banner />
            <YourData />
            <Explore />
            <OurServices />
            <WhoWeAre />
            <Three />
            <OurWork />
            <Contact />
        </div>
    );
}

export default App;
