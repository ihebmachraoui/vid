"use client"

import About from '../components/About/About';
import Testimonial from '../components/Testimonial/Testimonial';
import Services from '../components/Services/Services';
import dynamic from 'next/dynamic';

const DynamicCarousel = dynamic(() => import('../components/Carousel/Carousel'), {
  ssr: false, // This disables server-side rendering for the component
});

export default function Home() {
  return (
    <>
 
   <DynamicCarousel />
     <About/>
     <Testimonial />
     <Services />
     </>

  );
}
