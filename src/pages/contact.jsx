// src/pages/contact.js
import Head from 'next/head';
import Contact from '../components/Contact'; // Assurez-vous que le chemin est correct
import NavBar from '../components/NavBar'; // Assurez-vous que le chemin est correct
import Footer from '../components/Footer'; // Assurez-vous que le chemin est correct

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <NavBar />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default ContactPage;
