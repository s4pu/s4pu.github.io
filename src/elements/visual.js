import {
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage,
} from "@coreui/react";
import { horizontalData, verticalData } from "../content/visualsData";

export default function Visual() {
  return (
    <div className="carousel-wrapper">
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
                <h5 className="h-title">{datum.title}</h5>
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
