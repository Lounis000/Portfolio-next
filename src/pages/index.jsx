// pages/index.js
import Head from 'next/head';
import Banner from '../components/Banner';
import Skills from '../components/Skills'; // Assurez-vous que le chemin est correct
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mon Portfolio</title>
      </Head>
      <NavBar />
      <main>
        <Banner />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
