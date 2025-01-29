"use client";

import { useState } from "react";
import EmblaCarousel from "./EmblaCarousel";
import SelectType from "./SelectType";

function TrendingNow() {
  const [contentType, setContentType] = useState("movie");

  return (
    <div className="flex flex-col gap-6 bg-black sm:px-[148px]">
      <div className="flex flex-col gap-6 ">
        <h1 className="text-3xl">Trending now</h1>
        <SelectType conentType={contentType} setContentType={setContentType} />
      </div>
      <div>
        <EmblaCarousel contentType={contentType} />
      </div>
    </div>
  );
}

export default TrendingNow;
