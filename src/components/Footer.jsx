// components/Footer.js
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image';
import logo from '../assets/img/logo-Lounis.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <Image src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
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
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
