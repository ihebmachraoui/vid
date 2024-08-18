"use client"
import { useEffect } from 'react';
import Carousel from "../components/Carousel/Carousel";
import About from '../components/About/About';
import Testimonial from '../components/Testimonial/Testimonial';
import Services from '../components/Services/Services';

export default function Home() {


  return (
    <main >
     <Carousel />
     <About/>
     <Testimonial />
     <Services />
     
    {/*  <div className="h-36"></div> */}

    </main>
  );
}
