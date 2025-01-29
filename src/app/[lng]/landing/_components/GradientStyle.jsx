import React from "react";

function GradientStyle() {
  return (
    <div>
      <div className="relative mt-[10px] ">
        <div className="absolute inset-0  -mt-1 border-radius-gradient"></div>
      </div>
      <div className="flex items-center justify-center">
        <div className="h-[100px]   w-screen self-center custom-gradient mt-10"></div>
      </div>
    </div>
  );
}

export default GradientStyle;
