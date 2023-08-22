
import Home from '@views/landing/Home/Home'
import Head from 'next/head'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Soumik Ahammed | Full Stack Web Developer</title>
        <meta name="description" content="Crafting Exceptional Digital Experiences | Full Stack Web Developer | Expertise in React.js, Next.js, MERN Stack | Transforming Ideas into Engaging Websites, E-commerce Solutions, and Innovative Applications for Your Success." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </>
  )
}
