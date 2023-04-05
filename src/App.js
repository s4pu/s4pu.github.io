// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Navbar, Row } from "react-bootstrap";
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
        </Navbar>
        <Visual />
        <h3 className="projects-title">
          <b>PROJECTS</b>
        </h3>
        <Row>
          <Col md className="projects-col-left projects-col">
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
          <Col md className="projects-col-right">
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
