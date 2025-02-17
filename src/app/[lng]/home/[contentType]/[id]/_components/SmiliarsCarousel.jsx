"use client";

import { useEffect, useState } from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../../../../landing/_hooks/usePrevNextButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import ContentChart from "../../../_components/ContentChart";

const SmiliarsCarousel = ({ similiars ,contentType,lng}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentContent, setCurrentContent] = useState({});

  const [slides, setSlides] = useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    setSlides(similiars);
    console.log(similiars);
  }, []);

  return (
    <section className="embla relative z-10 ">
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <div className="embla__viewport " ref={emblaRef}>
        <div className="similiars__container ">
          {slides.map((content, index) => (
            <div className="similiars__slide" key={index}>
              <ContentChart
                contentType={contentType}
                content={content}
                locale={lng}
                cardWidth={300}
                cardHeight={350}
              />
            </div>
          ))}
        </div>
      </div>

      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </section>
  );
};

export default SmiliarsCarousel;
