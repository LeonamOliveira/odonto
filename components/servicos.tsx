import CardServices from "./servicos_card";
import { Container, Section } from "./craft";

const Servicos = () => {
  return (
    <Section className="border-b">
      <Container className="flex flex-col text-center">
        <h1 className="!mb-0">Conheça os nossos serviços aqui</h1>
      </Container>
      <Container className="flex text-center flex justify-between gap-6 rounded-lg">
        <CardServices titulo="Aparelhos Invisiveis" />
        <CardServices titulo="Implantes" />
        <CardServices titulo="Lipo de papada" />
      </Container>
      <Container className="flex text-center flex justify-between gap-6 rounded-lg">
        <CardServices titulo="Harmonização Facial" />
        <CardServices titulo="Botox" />
        <CardServices titulo="Protocolos" />
      </Container>
    </Section>
  );
};

export default Servicos;
