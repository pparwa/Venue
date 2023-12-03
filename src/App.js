import React from 'react';
import Header from './Compenent/Header/header';
import './resources/styles.css';
import Footer from './Compenent/Footer/footer';
import Featured from './Compenent/Featured/Featured';
import Info from './Compenent/Info';
import Highlights from './Compenent/Highlight';
import Pricing from './Compenent/Pricing/pricing';
import Location from './Location';
import { Element } from 'react-scroll';
function App() {
  return (
    <>
    <Header />
    <Element name='featured'>
    <Featured />
    </Element>
    <Element name='venuenfo'>
      <Info />
    </Element>
    <Element name='highlights'>
      <Highlights />
    </Element>
    <Element name='pricing'>
       <Pricing />
   </Element>
   <Element name='location'>
   <Location />
   </Element>
    <Footer />

    </>
  );
}

export default App;
