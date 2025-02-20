import ContatoLocalizacao from "@/components/contato-localizacao";
import Depoimento from "@/components/depoimentos";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Servicos from "@/components/servicos";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen">
        <div  className="fixed inset-0 bg-cover bg-center bg-no-repeat md:bg-contain"
              style={{ backgroundImage: "url('/assets/background-doctors.jpeg')" }}>
        </div>
        <div className="relative z-10 min-h-screen">
          <Header />
          <div className="bg-black/30 z-0">
              <Servicos />
          </div>
          <div className="bg-black/10 z-0">
            <Depoimento />
          </div>
          <div className="bg-black/30 z-0">
            <ContatoLocalizacao />
          </div>
          <div className="bg-black/10 z-0">
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
   