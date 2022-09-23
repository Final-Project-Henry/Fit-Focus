import React from 'react';
import Footer from '../footer/Footer';
import Navbar from '../Navbar/Navbar';
import Visitor1 from './visitor_1/Visitor1';
import Visitor2 from './visitor_2/Visitor2';
import Visitor3 from './visitor_3/Visitor3';
import Visitor4 from './visitor_4/Visitor4';
import Visitor5 from './visitor_5/Visitor5';
import Visitor6 from './visitor_6/Visitor6';
import Visitor7 from './visitor_7/Visitor7';

export default function HomeVisitor_2() {
  return (
    <div>
        <Navbar />
        <Visitor1 />
        <Visitor2 />
        <Visitor3 />
        <Visitor4 />
        <Visitor5 />
        <Visitor6 />
        <Visitor7 />
        <Footer />
    </div>
  )
}
