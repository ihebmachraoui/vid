"use client"
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
		import('flowbite');
	  }, []);

  return (
    <main >
     <h1>First</h1>
    </main>
  );
}
