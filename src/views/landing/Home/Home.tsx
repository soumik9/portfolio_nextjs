import React from 'react'
import HomeHero from './components/HomeHero/HomeHero'

type Props = {}

const Home = (props: Props) => {
    return (
        <main className='bg-bgDark'>
            <HomeHero />
        </main>
    )
}

export default Home