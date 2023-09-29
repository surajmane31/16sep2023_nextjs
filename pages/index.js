import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Aside from '../components/Aside'
import Section from '../components/Section'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main> <Aside></Aside>
      <Section></Section>
      </main>
     <Footer />

      </>
  )
}
