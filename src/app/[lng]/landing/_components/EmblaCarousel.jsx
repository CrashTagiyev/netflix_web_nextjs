"use client";

import { useEffect, useState } from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../_hooks/usePrevNextButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import ContentModal from "./ContentModal";

const EmblaCarousel = ({ contentType }) => {
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

  const fetchTrending = async () => {
    const response = await fetch(
      `http://localhost:5001/api/v1/${contentType}/Trending`
    );
    const data = await response.json();
    setSlides(data.content);
    console.log(data.content);
  };

  useEffect(() => {
    fetchTrending();
  }, [contentType]);

  return (
    <section className="embla relative z-10">
      {modalIsOpen && (
        <ContentModal
          content={currentContent}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
      )}
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map(
            (content, index) =>
              index < 9 && (
                <div className="embla__slide relative" key={index}>
                  <button
                    className="relative"
                    onClick={() => {
                      setCurrentContent(content);
                      setModalIsOpen((p) => !p);
                    }}
                  >
                    <p
                      className="text-9xl absolute top-[30%] left-[-15%]"
                      style={{
                        fontWeight: "900",
                        WebkitTextStroke: "2px white",
                        WebkitTextFillColor: "black",
                      }}
                    >
                      {index + 1}
                    </p>
                    <Image
                      src={`https://image.tmdb.org/t/p/original${content.poster_path}`}
                      alt="alt"
                      width={244}
                      height={252}
                    />
                  </button>
                </div>
              )
          )}
        </div>
      </div>

      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </section>
  );
};

export default EmblaCarousel;
