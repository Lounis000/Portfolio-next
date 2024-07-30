import Head from 'next/head';
import { useRouter } from 'next/router';
import ProjectDetails from '../../components/ProjectDetails';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

export default function ProjectDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Project Details</title>
      </Head>
      <NavBar />
      <main>
        {id && <ProjectDetails id={id} />}
      </main>
      <Footer />
    </>
  );
}
