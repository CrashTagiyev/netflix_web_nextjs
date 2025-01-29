import Link from "next/link";
import React from "react";
import { translate } from "@/locales/translate";
async function GetStarted() {
  
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-[18px]  w-[600px] mt-[137px]">
        <h1 className="md:text-5xl text-center font-bold">
          { translate(`landingUnlimitedMovies`)}
        </h1>
        <p className="text-center font-bold">{ translate("landingStartAt")}</p>
        <p className="text-center">{ translate(`readyToWatch`)}</p>
        <div className="flex flex-wrap justify-center flex-row gap-2">
          <input
            type="text"
            placeholder={ translate("emailAddress")}
            className="p-2 bg-transparent border w-[333px] h-[56px] border-[#808080B2]"
          />
          <Link
            href={"/auth/login"}
            type="submit"
            className="w-[206px] flex items-center justify-center h-[56px] bg-[#E50914]"
          >
            <p className="text-center text-2xl"> {  translate(`getStarted`)}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
