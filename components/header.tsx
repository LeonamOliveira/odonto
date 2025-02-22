import Link from "next/link";
import { Container, Section } from "./craft";

const Header = () => {
  return (
    <Section className="border-b bg-white shadow-md sticky top-0 z-50">
      <Container className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">@estudiodeodontologia</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#sobre" className="hover:text-blue-500">
                Sobre
              </a>
            </li>
            <li>
              <a href="#servicos" className="hover:text-blue-500">
                Serviços
              </a>
            </li>
            <li>
              <a href="#depoimentos" className="hover:text-blue-500">
                Depoimentos
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-blue-500">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </Section>
  );
};

export default Header;
