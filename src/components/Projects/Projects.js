import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Countries from "../../Assets/Projects/Countries-app.png";
import OrionMusicX from "../../Assets/Projects/OrionMusicX.png";
import RickAndMorty from "../../Assets/Projects/Rick-And-Morty-app.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OrionMusicX}
              isBlog={false}
              title="OrionMusicX"
              description="OrionMusicX is a group project, it is an e-commerce page that offers musical beats, this app is made with Firebase, Bootstrap, React and javascript.
              This app has:
              login,
              authentication with google,
              User and administrator profile each with its functions,
              combined filters,
              Shopping cart with PayPal,
              listen to previews of the beats and
              Like and dislike button"
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://orion-proyect.web.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RickAndMorty}
              isBlog={false}
              title="Rick-And-Morty-app"
              description="this web app was built with React, javascript and css, consumes  to the Rick and Morty API, in addition to this it has functions like: 
              login 
             Search bar 
             Filters 
             Like button."
              ghLink="https://github.com/Serblaor/rick_and_morty/"
              demoLink="https://rick-and-morty-app-navy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Countries}
              isBlog={false}
              title="Countries-App"
              description="This App allows you to view information from different countries using the external api restcountries and you can:
              Search countries
              Filter / Sort them
              Create a list of activities associated with the countries you visit or plan to visit. The Activities sections include:
              Creation form
              Custom calendar
              Section to view, filter and sort."
              ghLink="#"
              demoLink="https://github.com/Serblaor/Proyecto-Individual"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
