"use client";
import { useState } from "react";
import HomeNavBar from "./HomeNavBar";
import HomePage from "./HomePage";
import ContentSection from "./ContentSection";

function HomeMainSection({ topMovie, locale }) {
  const [currentContent, setCurrentContent] = useState("home");
  return (
    <div
      style={{
        backgroundImage:
          currentContent === `home`
            ? `url(https://image.tmdb.org/t/p/original${topMovie?.backdrop_path})`
            : "",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="px-[90px] bg-black/50  bg-blend-overlay"
    >
      <HomeNavBar setCurrentContent={setCurrentContent} />
      {currentContent === `home` ? (
        <HomePage movie={topMovie} />
      ) : (
        <ContentSection locale={locale} currentContent={currentContent} />
      )}
    </div>
  );
}

export default HomeMainSection;
