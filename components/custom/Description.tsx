import React from "react";
import Paragraph from "./Paragraph";

interface Props {}

const Description = () => {
  return (
    <div>
      <h1 className="scroll-m-20 text-2xl font-extrabold tracking-wide lg:text-4xl md:tex-3xl text-red-400 my-2 from-neutral-950 outline outline-2  ">
        Save Child Foundation
      </h1>
      <Paragraph />
    </div>
  );
};

export default Description;
