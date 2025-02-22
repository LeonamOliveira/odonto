// React and Next.js
import Link from "next/link";

// Third-party libraries
import Balancer from "react-wrap-balancer";

// Custom components
import { Section, Container } from "@/components/craft";

// Icons
import { Coins, ArrowRight } from "lucide-react";
import { JSX } from "react";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Localização",
    href: "https://maps.app.goo.gl/krmzYbMdXBiPnZuz9",
    description: "Venha nos visitar",
    cta: "Link da Localização",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Entre em Contato Conosco",
    href: "https://api.whatsapp.com/send?phone=5562998669824&text=Ol%C3%A1,%20vi%20sua%20landing%20page%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.",
    description: "Fale Conosco pelo nosso WhatsApp.",
    cta: "WhatsApp",
  },
];

const ContatoLocalizacao = () => {
  return (
    <Section id="contato" className="border-b">
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>Venha nos fazer uma visita</Balancer>
          </h3>
          <h4 className="text-2xl font-light opacity-70">
            <Balancer>Estamos em promoção</Balancer>
          </h4>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-2">
            {featureText.map(
              ({ icon, title, description, href, cta }, index) => (
                <Link target="_blank"
                  href={`${href}`}
                  className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2"
                  key={index}
                >
                  <div className="grid gap-4">
                    {icon}
                    <h4 className="text-xl text-primary">{title}</h4>
                    <p className="text-base opacity-75">{description}</p>
                  </div>
                  {cta && (
                    <div className="flex h-fit items-center text-sm font-semibold">
                      <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  )}
                </Link>
              )
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ContatoLocalizacao;
