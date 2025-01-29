import Image from "next/image";
import React from "react";

function MoreReasonCart({ title, description, icon }) {
  return (
    <div
      className="w-[274px] h-[268px] rounded-lg p-4 flex flex-col justify-between"
      style={{
        background: "linear-gradient(149deg, #192247 0%, #210e17 99.08%)",
        color: "white",
      }}
    >
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-sm mt-2">{description}</p>
      </div>
      <div className="flex justify-end">
        <Image src={icon} alt="more_reason_icon" height={72} className="w-auto" />
      </div>
    </div>
  );
}

export default MoreReasonCart;
