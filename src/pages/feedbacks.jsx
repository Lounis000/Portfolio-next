// pages/feedbacks.jsx
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import FeedbackForm from '../components/FeedbackForm';

const FeedbacksPage = () => {
  const [feedbacks, setFeedbacks] = useState([
    { User: { name: 'John Doe' }, feedback: 'Great service!', rating: 5 },
    { User: { name: 'Jane Smith' }, feedback: 'Very helpful!', rating: 4 },
  ]);

  const addFeedback = (newFeedback) => {
    setFeedbacks([...feedbacks, newFeedback]);
  };

  return (
    <>
      <NavBar />
      <section className="feedbacks-page">
        <Container>
          <Row>
            <Col className="text-center">
              <h2>Feedbacks</h2>
              <p>Voici tous les feedbacks laissés par nos utilisateurs :</p>
              <div className="feedbacks-container">
                {feedbacks.map((feedback, index) => (
                  <div key={index} className="feedback-item">
                    <strong>{feedback.User.name}</strong>
                    <p>{feedback.feedback}</p>
                    <div className="star-rating-display">
                      {[...Array(5)].map((star, i) => (
                        <span key={i} className={`star ${i < feedback.rating ? 'on' : 'off'}`}>&#9733;</span>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="feedback-item feedback-form-container">
                  <FeedbackForm addFeedback={addFeedback} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default FeedbacksPage;
