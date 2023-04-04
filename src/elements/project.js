export default function Project({ title, text, image, link }) {
  return (
    <>
      <p>{title}</p>
      <p>{text}</p>
      <p>{image}</p>
      <p>{link}</p>
    </>
  );
}
