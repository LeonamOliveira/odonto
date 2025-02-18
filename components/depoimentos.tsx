import * as React from "react";
// import Image from "next/image";

import { Section, Container } from "@/components/craft";
import CardDepoimentos from "./depoimentos_card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// import FileImage from "../public/file.svg";
// import GlobeImage from "../public/globe.svg";
// import NextImage from "../public/file.svg";
// const photos = [
//   {
//     src: FileImage,
//   },
//   {
//     src: GlobeImage,
//   },
//   {
//     src: NextImage,
//   },
// ];

const Depoimentos = () => {
  return (
    <Section>
      <Container>
        <h2 className="!mt-0 mb-4">
          Confira os depoimentos dos nossos clientes
        </h2>

        <Carousel className="mt-6 w-full flex text-center flex justify-between gap-6 rounded-lg">
          <CarouselContent className="-ml-1">
            <div className="flex gap-4">
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 mx-2">
                <CardDepoimentos nome="Josefa" depoimento="Muito bao, top" />
              </CarouselItem>
            </div>
            <div className="flex gap-4">
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 mx-2">
                <CardDepoimentos nome="Filezitis" depoimento="Muito bao, top" />
              </CarouselItem>
            </div>
            <div className="flex gap-4">
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 mx-2">
                <CardDepoimentos nome="Ronisley" depoimento="Muito bao, top" />
              </CarouselItem>
            </div>
            <div className="flex gap-4">
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 mx-2">
                <CardDepoimentos nome="Henzo" depoimento="Muito bao, top" />
              </CarouselItem>
            </div>
            <div className="flex gap-4">
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 mx-2">
                <CardDepoimentos nome="Josefa" depoimento="Muito bao, top" />
              </CarouselItem>
            </div>
            <div className="flex gap-4">
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 mx-2">
                <CardDepoimentos nome="Filezitis" depoimento="Muito bao, top" />
              </CarouselItem>
            </div>
            <div className="flex gap-4">
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 mx-2">
                <CardDepoimentos nome="Ronisley" depoimento="Muito bao, top" />
              </CarouselItem>
            </div>
            <div className="flex gap-4">
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 mx-2">
                <CardDepoimentos nome="Henzo" depoimento="Muito bao, top" />
              </CarouselItem>
            </div>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </Section>
  );
};

export default Depoimentos;
