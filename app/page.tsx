import ContatoLocalizacao from "@/components/contato-localizacao";
import Depoimento from "@/components/depoimentos";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Servicos from "@/components/servicos";
import Sobre from "@/components/sobre";
import Diferenciais from "@/components/diferenciais";

export default function Home() {
  const sections = [Servicos, Sobre, Diferenciais, Depoimento, ContatoLocalizacao, Footer];

  return (
    <>
      <div className="relative min-h-screen">
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat md:bg-contain"
          style={{ backgroundImage: "url('/assets/background-doctors.jpeg')" }}
        ></div>
        <div className="relative z-10 min-h-screen">
          <Header />
          {sections.map((SectionComponent, index) => (
            <div
              key={index}
              className={`bg-black/${index % 2 === 0 ? "30" : "10"} z-0`}
            >
              <SectionComponent />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
