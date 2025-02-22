import CardServices from "./servicos_card";
import { Container, Section } from "./craft";

const Servicos = () => {
  return (
    <Section id="servicos" className="border-b">
      <Container className="flex flex-col text-center">
        <h1 className="text-3xl font-bold mb-6">Conheça nossos serviços</h1>
      </Container>
      <Container className="flex text-center flex justify-between gap-6 rounded-lg">
        <CardServices titulo="Aparelhos Invisiveis" img="aparelho_invisivel.jpg" />
        <CardServices titulo="Implantes" img="implante.webp" />
        <CardServices titulo="Lipo de papada" img="lipopapada.jpg" />
      </Container>
      <Container className="flex text-center flex justify-between gap-6 rounded-lg">
        <CardServices titulo="Harmonização Facial" img="harmonizacao.webp"/>
        <CardServices titulo="Botox" img="botox.jpg"/>
        <CardServices titulo="Protocolos" img="protocolos.webp" />
      </Container>
    </Section>
  );
};

export default Servicos;
