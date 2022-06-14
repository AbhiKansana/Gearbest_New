import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Hero from '../Components/Hero/Hero';
import Collection from '../Components/ShowProducts/Collection1';
import Collection2 from '../Components/ShowProducts/Collection2';
import Row1 from '../Components/ShowProducts/Row1';
import Row2 from '../Components/ShowProducts/Row2';


function HomePage() {
  return (
    <div>
       <Navbar/>
     <Hero/>
     <Collection/>
     <Collection2/>
     <Row1/>
     <Row2/>
     <Footer />
    </div>
  )
}

export default HomePage