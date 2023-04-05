import { Col } from "react-bootstrap";

export default function Project({ title, text, image, link }) {
  return (
    <Col className="project-group" key={title}>
      <p className="image-description">
        <a href={link}>
          <div className="image-container">
            <img className="projects-image" src={image} alt={title} />
          </div>
          <b>{title}</b>
        </a>{" "}
        – {text}
      </p>
    </Col>
  );
}
