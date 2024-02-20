
import '@styles/globals.css'
import '@styles/tailwind.css'
import LandingLayout from '@components/LandingLayout/LandingLayout'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@smastrom/react-rating/style.css'

import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {

  // *states
  const [laoding, setLoading] = useState(true);

  // *checking the window
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLoading(false);
    }
  }, []);

  // *loading
  if (laoding) return <>Loading...</>

  return <LandingLayout>

    <Head>
      <title>Soumik Ahammed | Full Stack Web Developer</title>
      <meta name="description" content="Crafting Exceptional Digital Experiences | Full Stack Web Developer | Expertise in React.js, Next.js, MERN Stack | Transforming Ideas into Engaging Websites, E-commerce Solutions, and Innovative Applications for Your Success." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Toaster
      position="top-right"
      reverseOrder={false}
    />

    <Component {...pageProps} />

  </LandingLayout>
}
