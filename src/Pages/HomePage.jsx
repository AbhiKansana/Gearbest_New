import React from 'react'
import Hero from '../Components/Hero/Hero';
import Collection from '../Components/ShowProducts/Collection1';
import Collection2 from '../Components/ShowProducts/Collection2';
import Row1 from '../Components/ShowProducts/Row1';
import Row2 from '../Components/ShowProducts/Row2';
import GoToTop from '../Components/GoToTop';


function HomePage() {
  return (
    <div>
     <Hero/>
     <Collection/>
     <Row1/>
     <Collection2/>
     <Row2/>
     <GoToTop/>
    </div>
  )
}

export default HomePage