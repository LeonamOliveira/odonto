// import Image from "next/image";
import Link from "next/link";

import { Section, Container } from "../components/craft";
// import Logo from "@/public/logo.svg";

export default function Footer() {
  return (
    <footer className="not-prose border-t">
      <Section >
        <Container className="grid gap-6">
          <div className="grid gap-6">
            <Link href="/">
              <h3 className="sr-only">brijr/components</h3>
              {/* <Image
                src={Logo}
                alt="Logo"
                width={120}
                height={27.27}
                className="transition-all hover:opacity-75 dark:invert"
              ></Image> */}
            </Link>
            <div className="mb-6 flex flex-col gap-4 text-sm text-muted-foreground underline underline-offset-4 md:mb-0 md:flex-row">
              <Link href="/privacy-policy">Política de Privacidade</Link>
              <Link href="/terms-of-service">Termos de Serviço</Link>
              <Link href="/cookie-policy">Política de Cookies</Link>
            </div>
            <p className="text-muted-foreground">
              ©{" "}
              <a href="https://github.com/brijr/components">Benkyou</a>
              . Todos os direitos reservados. 2025-presente.
            </p>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
