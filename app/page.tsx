import Description from "@/components/custom/Description";
import Options from "@/components/custom/Options";
import { Slide } from "@/components/custom/Slide";
import React from "react";

interface Props {}

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="p-5  lg:flex lg:flex-col lg:gap-20 gap-10 w-screen justify-center justify-items-center bg-[url('/bg.jpg')] h-screen ">
        <section className="lg:flex lg:gap-10 lg:justify-around lg:items-center max-w-5xl m-auto bg-stone-500 shadow-md px-20 py-2 rounded-md">
          <Description />
          <Slide />
        </section>
        <section>
          <Options />
        </section>
      </section>
    </main>
  );
}
