import Image from "next/image";
import netflixIcon from "@assets/PNGs/netflixIcon.png";
import Link from "next/link";

function AuthHeader() {
  return (
    <header className=" flex flex-row h-[120px] w-full  bg-opacity-50 pt-[24px] justify-between sm:px-[148px] ">
      <Link href={"/"}>
        <Image
          src={netflixIcon}
          alt="Netflix Icon"
          height={40}
          className=" h-[40px]"
          priority={true}
        />
      </Link>
    </header>
  );
}

export default AuthHeader;
