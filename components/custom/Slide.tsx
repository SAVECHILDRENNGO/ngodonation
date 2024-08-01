import * as React from "react";
import image1 from "../../images/1.jpg";
import image2 from "../../images/2.jpg";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function Slide() {
  return (
    <section className=" p-2">
      <Carousel className="max-w-md h-full">
        <CarouselContent>
          <CarouselItem key={Math.random()}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Image alt="child" src={image1} />
              </CardContent>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Image alt="child" src={image2} />
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem key={Math.random()}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Image alt="child" src={image1} />
              </CardContent>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Image alt="child" src={image2} />
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem key={Math.random()}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Image alt="child" src={image1} />
              </CardContent>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Image alt="child" src={image2} />
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem key={Math.random()}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Image alt="child" src={image1} />
              </CardContent>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Image alt="child" src={image2} />
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
