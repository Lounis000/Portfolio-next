import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image';
import headerImg from '../assets/img/profile.png';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Développeur Web", "Développeur Mobile", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Bienvenue sur mon Portfolio</span>
                  <h1>{`Bonjour! Je suis Lounis Bourouina`} <span className="txt-rotate" data-period="1000" data-rotate='[ "Développeur Web", "Développeur Mobile", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Je m'appelle Lounis Bourouina j'ai 23 ans je suis diplomé d'une Licence en informatique à l'université Adberrahmane Mira Béjaia, et je suis actuellement étudiant en programmation informatique au collège la Cité à Ottawa. Mon expérience m'a permis d'acquérir beaucoup de connaissances dans tous les domaines de l'informatique comme la cyber sécurité, les bases de données, le développement web et mobile.</p>
                  <a href="#feedbackForm">
                    <button>Notez Moi ! <ArrowRightCircle size={25} /></button>
                  </a>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <Image src={headerImg} alt="Header Img" layout="responsive" width={500} height={500} />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner;
