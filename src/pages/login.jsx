import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'; // Assurez-vous d'importer Link
import NavBar from '../components/NavBar'; // Assurez-vous que le chemin est correct
import Footer from '../components/Footer'; // Assurez-vous que le chemin est correct

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    if (auth === 'true') {
      router.push('/feedbacks');
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('isAuthenticated', 'true');
    setMessage('Connexion réussie!');
    setTimeout(() => {
      router.push('/feedbacks');
    }, 1000);
  };

  return (
    <>
      <NavBar />
      <div className="contact-page">
        <section className="contact">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 offset-md-3">
                <h2>Connectez-vous</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                  />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                  <div className="button-container">
                    <button type="submit">Connexion</button>
                  </div>
                </form>
                {message && <p>{message}</p>}
                <p>Vous n'avez pas de compte? <Link href="/signup">Inscription</Link></p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Login;
