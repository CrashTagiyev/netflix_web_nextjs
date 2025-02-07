"use client";
import { redirect, usePathname } from "next/navigation";

const LanguageSelect = () => {
  const pathname = usePathname().split("/");
  const route = pathname.slice(2).join("/");
  const languages = ["en", "ru"];
  return (
    <select
      className="bg-[#161616B2] border  border-[#808080B2] text-[#FFFFFF] p-1 w-[58px] h-[25px]"
      defaultValue={pathname[1]}
      onChange={(e) => redirect(`/${e.target.value}/${route}`)}
    >
      {languages.map((lng,index) => (
        <option key={index} value={lng}>
          {lng.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelect;
