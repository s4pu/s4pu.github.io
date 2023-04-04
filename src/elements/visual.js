import { useEffect, useState } from "react";
// import { textData } from "../content/visualsData";

export default function Visual() {
  const [current, setCurrent] = useState(5);
  const [text, setText] = useState("");

  const textData = ["abc", "def"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevState) =>
        prevState < textData.length - 1 ? prevState + 1 : 0
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [textData.length]);

  useEffect(() => {
    setText(textData[current]);
  }, [textData, current]);

  return (
    <h3>
      Visualtext: {current}
      {text}
    </h3>
  );
}
