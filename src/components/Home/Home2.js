import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import ftd from "../../Assets/Projects/Foto4.jpeg";
import "../style/Home2.css";

function Home2() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
  };
  return (
    
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming, and I have learned at least something, I think... 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> TypeScript, Javascript, React, Redux, Node.js, Express, Java, PostgreSQL, MySQL and Python. </b>
              </i>
              <br />
              <br />
              My field of interest is building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> as well as areas related to{" "}
                <b className="purple">
                Full stack development.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">React</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Node.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src= {ftd} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/serblaor"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/serblaor7/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sergio.bo7/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <br/>
        <Row>
        <Col md={12} className="contact-form">
          <Form onSubmit={handleSubmit} className="contact-form">
            <Form.Group controlId="formName">
              <h2 className="purple">Name</h2>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="white-text input-transparent"
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <h2 className="purple">Email</h2>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="white-text input-transparent"
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <h2 className="purple">Message</h2>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="white-text input-transparent"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              SUBMIT
            </Button>
          </Form>
        </Col>
      </Row>
      </Container>
    </Container>
  );
}
export default Home2;
