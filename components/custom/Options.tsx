import React from "react";

interface Props {}

const Options = () => {
  return (
    <div className="scroll-m-20 text-sm font-extrabold tracking-tight text-white  shadow-md  bg-stone-500 p-5">
      <h1 className="text-2xl underline   space-y-2">
        Given below are the objectives of the Save Child Foundation
      </h1>
      <ul className="p-2 tracking-normal line-clamp-none text-justify font-normal text-md">
        <li>
          To provide education to poor and needy children up to the primary
          level.
        </li>
        <li>To emphasize the importance of education.</li>
        <li>To improve the standards of living for people in villages.</li>
        <li>To promote inter-tribal unity.</li>
        <li>To showcase how beneficial education can be.</li>
        <li>To educate people on health, cleanliness, and social harmony.</li>
        <li>
          These objectives are what drive the organization and are fundamental
          to their core.
        </li>
      </ul>
    </div>
  );
};

export default Options;
