import ContatoLocalizacao from "@/components/contato-localizacao";
import Depoimento from "@/components/depoimentos";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Servicos from "@/components/servicos";

export default function Home() {
  return (
    <>
      <Header />
      <Servicos />
      <ContatoLocalizacao />
      <Depoimento />
      <Footer />
    </>
  )
}
   