
import '@styles/globals.css'
import '@styles/tailwind.css'
import LandingLayout from '@components/LandingLayout/LandingLayout'
import type { AppProps } from 'next/app'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function App({ Component, pageProps }: AppProps) {
  return <LandingLayout> <Component {...pageProps} /></LandingLayout>
}
