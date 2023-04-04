import {
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage,
} from "@coreui/react";
import { useEffect, useState } from "react";
import { horizontalData, verticalData } from "../content/visualsData";

export default function Visual() {
  const [current, setCurrent] = useState(0);
  const [text, setText] = useState("");
  const [image, setImage] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevState) =>
        prevState < horizontalData.length - 1 ? prevState + 1 : 0
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setText(horizontalData[current].text);
    setImage(horizontalData[current].image);
  }, [current]);
  // hier noch nen Titel
  // mit Animation versehen
  // überlagern
  return (
    <div className="carousel-wrapper">
      {/* <h3>
        Visualtext: {current}
        {text}
      </h3>
      <img src={image} alt="Leo" /> */}
      <CCarousel
        className="h-carousel"
        controls
        indicators
        dark
        interval={false}
        // interval={1000}
        pause={false}
      >
        {horizontalData.map((datum) => {
          return (
            <CCarouselItem key={datum.text}>
              <CImage className="d-block w-100" src={datum.image} />
              <CCarouselCaption className="h-caption">
                <h5>{datum.title}</h5>
                <p>{datum.text}</p>
              </CCarouselCaption>
            </CCarouselItem>
          );
        })}
      </CCarousel>
      <CCarousel
        className="v-carousel"
        controls
        indicators
        dark
        interval={false}
        // interval={1000}
        pause={false}
      >
        {verticalData.map((datum) => {
          return (
            <CCarouselItem key={datum.text}>
              <CImage className="d-block w-100" src={datum.image} />
              <CCarouselCaption className="v-caption">
                <h5 className="v-title">{datum.title}</h5>
                <p>{datum.text}</p>
              </CCarouselCaption>
            </CCarouselItem>
          );
        })}
      </CCarousel>
    </div>
  );
}
