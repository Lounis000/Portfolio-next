// components/SignupPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/signup', { email, password, name });
      router.push('/login'); // Rediriger vers la page de connexion après inscription
    } catch (err) {
      console.error('Error during signup:', err);
    }
  };

  return (
    <div className="contact-page">
      <section className="contact">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 offset-md-3">
              <h2>Inscription</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="button-container">
                  <button type="submit">Inscription</button>
                </div>
                <p>Déja membre ?
                  <Link href="/login" passHref>
                    <span className="sign-up">Connexion</span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignupPage;
