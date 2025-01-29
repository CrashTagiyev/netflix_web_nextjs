import Link from "next/link";
import { footerItems } from "./footerItems";

function Footer() {
  return (
    <footer className=" w-full lg:px-[148px] py-4 mt-[72px]">
      <div>
        <p>Questions? Call 1-844-505-2993</p>
      </div>
      <ul className="grid grid-cols-4 gap-3 mt-[32px] text-[#FFFFFFB2] text-sm">
        {footerItems.map((item, index) => (
          <li key={index}>
            <Link
              style={{ borderBottom: "1px solid #FFFFFFB2" }}
              href={item.url}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <button className="border border-[#808080B2] text-[#FFFFFF] w-[128px] h-[32px] lg:mt-[57px]">
        English
      </button>
    </footer>
  );
}

export default Footer;
