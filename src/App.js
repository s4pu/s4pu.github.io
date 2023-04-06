// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./App.css";
import { projectsData } from "./content/projectsData";
import Project from "./elements/project";
import Visual from "./elements/visual";

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar className="head" sticky="top">
          <Navbar.Brand>
            <h2 className="page-title-outer">
              <b className="page-title-inner">
                LEONARD
                <p>PABST</p>
              </b>
            </h2>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              className="navbar-link"
              href="mailto:leonard.pabst@student.hpi.de"
            >
              Email
            </Nav.Link>
            <Nav.Link className="navbar-link" href="https://github.com/s4pu">
              GitHub
            </Nav.Link>
            <Nav.Link
              className="navbar-link"
              href="https://www.linkedin.com/in/leonard-pabst-8b0313153/"
            >
              LinkedIn
            </Nav.Link>
          </Nav>
        </Navbar>
        <Visual />
        <h3 className="section-title">
          <b>MOTIVATION</b>
        </h3>
        <div className="motivation-text">
          <p>Hey there, dear denkwerk talent aquisition team!</p>
          <p>
            I'm Leo and I know that this page looks a bit crappy. I'm not a
            graphics designer, but I felt challenged to do something else other
            than a typical cover letter and hacked *something* together.
          </p>
          <p>
            I am a recent master's graduate, but already bring experience from
            different projects. I aim to work in interdisciplinary teams because
            I have already been able to appreciate their advantages in the
            Design Thinking projects of the HPI School of Design Thinking
            (D-School) and the Global Team-Based Innovation course. There, we
            have explored complex problems in international and
            interdisciplinary teams to find innovative solutions.
          </p>
          <p>
            Anyways, I think I have what you are looking for and would be
            excited if we could talk in person!
          </p>
          <p>Best, Leo</p>
        </div>
        <h3 className="section-title">
          <b>PROJECTS</b>
        </h3>
        <Row>
          <Col xs={6} md className="projects-col-left projects-col">
            {projectsData.map((datum, id) => {
              if (id % 2 === 0) {
                return (
                  <Project
                    title={datum.title}
                    text={datum.text}
                    image={datum.image}
                    link={datum.link}
                  />
                );
              } else {
                return <></>;
              }
            })}
          </Col>
          <Col xs={6} md className="projects-col-right">
            {projectsData.map((datum, id) => {
              if (id % 2 === 1) {
                return (
                  <Project
                    title={datum.title}
                    text={datum.text}
                    image={datum.image}
                    link={datum.link}
                  />
                );
              } else {
                return <></>;
              }
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
