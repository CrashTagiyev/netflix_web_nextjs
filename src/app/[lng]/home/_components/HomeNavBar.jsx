"use client";

import Image from "next/image";
import netflixIcon from "@assets/PNGs/netflixIcon.png";
import Link from "next/link";

function HomeNavBar({ setCurrentContent }) {
  return (
    <div className="flex  gap-[67px] pt-[30px]">
      <Link href={"/home"}>
        <Image
          src={netflixIcon}
          alt="Netflix Icon"
          height={40}
          className=" h-[40px]"
          priority={true}
        />
      </Link>
      <div className="flex flex-row  gap-7">
        <button className="text-2xl" onClick={() => setCurrentContent(`home`)}>
          Home
        </button>
        <button className="text-2xl" onClick={() => setCurrentContent(`tv`)}>
          Tv Shows
        </button>
        <button className="text-2xl" onClick={() => setCurrentContent(`movie`)}>
          Movies
        </button>
      </div>
    </div>
  );
}

export default HomeNavBar;
