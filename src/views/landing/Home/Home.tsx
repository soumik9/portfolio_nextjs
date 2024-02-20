import React, { useEffect } from 'react'
import HomeHero from './components/HomeHero/HomeHero'
import HReviews from './components/HReviews/HReviews'
import Intro from './components/Intro/Intro'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home: React.FC = () => {

    useEffect(() => {
        AOS.init({
            // once: true,
            duration: 800,
            offset: 400, // Adjust this value to control the starting position
            easing: "ease-in-out",
        })
        AOS.refresh();
    }, [])

    return (
        <main className='bg-bgDark'>
            <HomeHero />
            <Intro />
            <Skills />
            <Services />
            <Projects />
            <HReviews />
            <Contact />
        </main>
    )
}

export default Home