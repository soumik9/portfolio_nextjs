import React, { useEffect } from 'react'
import HomeHero from './components/HomeHero/HomeHero'
import HReviews from './components/HReviews/HReviews'
import Intro from './components/Intro/Intro'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

const Home: React.FC = () => {
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