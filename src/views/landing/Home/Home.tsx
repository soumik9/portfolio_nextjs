import React from 'react'
import HomeHero from './components/HomeHero/HomeHero'
import HReviews from './components/HReviews/HReviews'
import Intro from './components/Intro/Intro'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'

type Props = {}

const Home = (props: Props) => {
    return (
        <main className='bg-bgDark'>
            <HomeHero />
            <Intro />
            <Skills />
            <Services />
            {/* <HReviews /> */}
        </main>
    )
}

export default Home