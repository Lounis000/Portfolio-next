// pages/skills.jsx
import React from 'react';
import NavBar from '../components/NavBar';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

const SkillsPage = () => {
  return (
    <div className="wrapper">
      <NavBar />
      <div className="content">
        <Skills />
      </div>
      <Footer />
    </div>
  );
};

export default SkillsPage;
