import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Image from 'next/image';
import logo from '../assets/img/logo-Lounis.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(auth === 'true');

    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActiveLink = (path) => {
    return router.pathname === path ? 'active navbar-link' : 'navbar-link';
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    router.push('/login');
  };

  const handleFeedbackClick = (e) => {
    e.preventDefault();
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      router.push('/login');
    } else {
      router.push('/feedbacks');
    }
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Link href="/" passHref legacyBehavior>
          <a className="navbar-brand">
            <Image src={logo} alt="Logo" width={130} height={50} />
          </a>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/" passHref legacyBehavior>
              <a className={isActiveLink('/') + " nav-link navbar-link"}>Accueil</a>
            </Link>
            <Link href="/skills" passHref legacyBehavior>
              <a className={isActiveLink('/skills') + " nav-link navbar-link"}>Compétences</a>
            </Link>
            <Link href="/projects" passHref legacyBehavior>
              <a className={isActiveLink('/projects') + " nav-link navbar-link"}>Projets</a>
            </Link>
            <a href="/feedbacks" onClick={handleFeedbackClick} className="nav-link navbar-link">Feedbacks</a>
            {isAuthenticated && (
              <button onClick={handleLogout} className="btn btn-outline-light ms-3">Déconnexion</button>
            )}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/lounis-bourouina-431a2b204" target="_blank" rel="noopener noreferrer">
                <Image src={navIcon1} alt="LinkedIn" width={30} height={30} />
              </a>
              <a href="https://www.facebook.com/lounis.bourouina.9" target="_blank" rel="noopener noreferrer">
                <Image src={navIcon2} alt="Facebook" width={30} height={30} />
              </a>
              <a href="https://www.instagram.com/lounis_bourouina/" target="_blank" rel="noopener noreferrer">
                <Image src={navIcon3} alt="Instagram" width={30} height={30} />
              </a>
              <a href="https://github.com/Lounis000" target="_blank" rel="noopener noreferrer">
                <Image src={navIcon4} alt="GitHub" width={30} height={30} />
              </a>
            </div>
            <Link href="/contact" passHref legacyBehavior>
              <button className="vvd"><span>Contactez-moi</span></button>
            </Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
