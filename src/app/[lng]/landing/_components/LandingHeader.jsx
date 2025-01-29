import Image from "next/image";
import netflixIcon from "@assets/PNGs/netflixIcon.png";
import Link from "next/link";
import { translate } from "@/locales/translate";
import { Select, SelectItem } from "@nextui-org/select";
import LanguageSelect from "./LanguageSelect";
function LandingHeader() {
  return (
    <header className="flex flex-row h-[120px] w-full  bg-transparent pt-[24px] justify-between sm:px-[148px]">
      <Image
        src={netflixIcon}
        alt="Netflix Icon"
        height={40}
        className=" h-[40px]"
      />
      <div style={{ display: "flex", gap: "12px" }}>
        <LanguageSelect />
        <Link
          href={"/auth/login"}
          className="bg-[#E50914] text-white text-center text-sm w-[75px] h-[25px]"
        >
          {translate(`logIn`)}
        </Link>
      </div>
    </header>
  );
}

export default LandingHeader;
