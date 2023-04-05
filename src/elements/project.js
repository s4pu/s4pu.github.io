import { Col, Row } from "react-bootstrap";

export default function Project({ title, text, image, link }) {
  return (
    <Col key={title}>
      <img className="projects-image" src={image} alt={title} />
      <p className="image-description">
        <a href={link}>
          <b>{title}</b>
        </a>{" "}
        – {text}
      </p>
    </Col>
  );
}
