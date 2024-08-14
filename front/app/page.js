import dynamic from 'next/dynamic';

const DynamicCarousel = dynamic(() => import('../components/Carousel/Carousel'), {
  ssr: false, // This disables server-side rendering for the component
});

export default function Home() {
  return (
    <main>
      <DynamicCarousel />
    </main>
  );
}
