import CardDepoimentos from "./depoimentos_card";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Depoimentos = () => {
  const depoimentos = [
    {
      nome: "João Silva",
      texto: "Ótimo atendimento!",
    },
    {
      nome: "Maria Souza",
      texto: "Experiência incrível!",
    },
    {
      nome: "João Silva",
      texto: "Ótimo atendimento!",
    },
    {
      nome: "Maria Souza",
      texto: "Experiência incrível!",
    },
    {
      nome: "João Silva",
      texto: "Ótimo atendimento!",
    },
    {
      nome: "Maria Souza",
      texto: "Experiência incrível!",
    },
  ];

  return (
    <section id="depoimentos" className="py-12 text-center">
      <h2 className="text-3xl font-bold mb-6">O que nossos clientes dizem</h2>
      <Carousel opts={{ align: "start", loop: true }}>
        <CarouselContent className="gap-4">
          {depoimentos.map((depoimento, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/3 sm:basis-1/2 basis-full"
            >
              <CardDepoimentos
                nome={depoimento.nome}
                depoimento={depoimento.texto}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Depoimentos;
