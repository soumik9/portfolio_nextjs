
import Home from '@views/landing/Home/Home'
import Head from 'next/head'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Soumik Ahammed | Full Stack Web Developer</title>
        <meta name="description" content="A full-stack web developer who can develop amazing websites or web applications. React.js, Next.js, MERN, Express, MongoDB, Landing website, E-commerce website, POS application & many more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </>
  )
}
