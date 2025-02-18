// Third-party library imports
import Balancer from "react-wrap-balancer";

// Local component imports
import { Container, Section } from "./craft";

const Header = () => {
  return (
    <Section className="border-b">
      <Container className="flex flex-col text-center">
        <h1 className="!mb-0">@estudiodeodontologia</h1>
        <h3 className="text-muted-foreground">
          <Balancer>
            Qualidade total para você!
          </Balancer>
        </h3>
      </Container>
    </Section>
  );
};

export default Header;
