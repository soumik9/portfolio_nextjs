
import '@styles/globals.css'
import '@styles/tailwind.css'
import LandingLayout from '@components/LandingLayout/LandingLayout'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function App({ Component, pageProps }: AppProps) {
  return <LandingLayout>

    <Toaster
      position="top-right"
      reverseOrder={false}
    />

    <Component {...pageProps} />

  </LandingLayout>
}
