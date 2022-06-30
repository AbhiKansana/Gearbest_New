import React from 'react'
import Hero from '../Components/Hero/Hero';
import Collection from '../Components/ShowProducts/Collection1';
import Collection2 from '../Components/ShowProducts/Collection2';
import Row1 from '../Components/ShowProducts/Row1';
import Row2 from '../Components/ShowProducts/Row2';


function HomePage() {
  return (
    <div>
     <Hero/>
     <Collection/>
     <Collection2/>
     <Row1/>
     <Row2/>
    </div>
  )
}

export default HomePage