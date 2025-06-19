import React from 'react'
import Hero from './Hero';
import Awards from './Awards';
import Stast from './Stast';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage(){
    return (
        <>
        <Hero/>
        <Awards />
        <Stast />
        <Pricing />
        <Education />
        <OpenAccount />
        </>
    );
}

export default HomePage;