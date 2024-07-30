// pages/projects.jsx
import Head from 'next/head';
import Projects from '../components/Projects'; // Assurez-vous que le chemin est correct
import Footer from '../components/Footer'; // Assurez-vous que le chemin est correct
import NavBar from '../components/NavBar'; // Assurez-vous que le chemin est correct

export default function ProjectsPage() {
  return (
    <div className="wrapper">
      <Head>
        <title>Projects</title>
      </Head>
      <NavBar />
      <div className="content">
        <main>
          <Projects />
        </main>
      </div>
      <Footer />
    </div>
  );
}
