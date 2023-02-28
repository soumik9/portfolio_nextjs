import React from 'react'
import HomeHero from './components/HomeHero/HomeHero'
import HReviews from './components/HReviews/HReviews'

type Props = {}

const Home = (props: Props) => {
    return (
        <main className='bg-bgDark'>
            <HomeHero />
            <HReviews />
        </main>
    )
}

export default Home