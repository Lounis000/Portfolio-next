import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Image from 'next/image';
import projImg1 from '../assets/img/LBFORMA.png';
import projImg2 from '../assets/img/p1.png';
import projImg3 from '../assets/img/p2.png';
import projImg4 from '../assets/img/GesCannabis.png';
import projImg5 from '../assets/img/p5.png';
import projImg6 from '../assets/img/p6.png';
import projImg7 from '../assets/img/p7.png';

const projects = [
  {
    id: 1,
    title: "Plateforme de Formation en ligne",
    description: "c'est une plateforme de cours en ligne comme Udemy et openClasseroom l'utilisateur doit faire une demande d'inscription au cours puis le gestionnaire validera l'inscription.",
    technologies: ["React", "Node.js", "Bootstrap"],
    images: [projImg1, projImg2, projImg3],
    githubLink: "https://github.com/BENLABEDdjahid/Analyse-et-conception-de-syst-mes"
  },
  {
    id: 2,
    title: "Application de gestion D'entrepot",
    description: "c'est une application desktop pour un entrepot de cannabis.",
    technologies: ["HTML", "CSS", "JavaScript"],
    images: [projImg4, projImg5, projImg6, projImg7],
    githubLink: "https://github.com/Lounis000/CannabisAPP"
  },
];

const ProjectDetails = ({ id }) => {
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-page">
      <Container>
        <Row>
          <Col>
            <h2 className="project-title">{project.title}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Carousel>
              {project.images.map((imgUrl, index) => (
                <Carousel.Item key={index}>
                  <div className="image-container">
                    <Image
                      src={imgUrl}
                      alt={`${project.title} image ${index + 1}`}
                      layout="fill"
                      objectFit="contain"
                      priority
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="project-description">{project.description}</p>
            <h3>Technologies utilisées</h3>
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
              Voir sur GitHub
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectDetails;
