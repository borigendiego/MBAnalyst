import React from 'react';
import logo from './logo.svg';
import './App.css';
import OurServices from './components/OurServices'
import WeAreGomi from "./components/WeAreGomi";
import OurWork from "./components/OurWork";

function App() {
  return (
    <div className="App">
     {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gomi
        </a>
      </header>*/}
      <OurServices title={'Gomi section'} />
      <WeAreGomi title={"We are Gomi"} />
      <OurWork title={'Our Work'}/>
    </div>
  );
}

export default App;
