import React from 'react';
import { Navigation, SectionA, SectionB, SectionC, SectionD, Footer } from '../../molecules';
import './Home.css';

// const cards = [<CardA />, <CardA />, <CardA />, <CardA />];

export default function Home() {
  return (
    <div>
      <Navigation />
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
      <Footer />
    </div>
  );
}
