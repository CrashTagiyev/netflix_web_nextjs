import TopTenIcon from "@assets/SVGs/top10Icon.svg";
import Image from "next/image";

function HomePage({ movie }) {
  return (
    <div className="h-screen pt-[156px]">
      <h1 className="text-6xl w-[300px] font-bold">{movie?.title}</h1>
      <div className="flex items-center gap-[15px] mt-[21px]">
        <Image src={TopTenIcon} alt="Top Ten Icon" width={35} height={35} />
        <h2>#1 in Movies Today</h2>
      </div>
      <h4 className=" text-sm w-[385px] mt-[21px] h-[83px] overflow-hidden">{movie?.overview}</h4>
      <div className="flex items-center gap-[15px] mt-[21px]">
        <button className="w-[83px] h-[48px] bg-white text-black  rounded-[5px] font-bold">
          Play
        </button>
        <button className="w-[124px] h-[48px] bg-[#515451] text-white  rounded-[5px] font-bold">
          More Info
        </button>
      </div>
    </div>
  );
}

export default HomePage;
