import Image from "next/image";

const Diferenciais = () => {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-center text-white">
      <Image 
        src="/assets/DraRafaela.jpg" 
        alt="Dra. Rafaela"
        layout="fill" 
        objectFit="cover" 
        quality={80}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>

      <div className="relative max-w-3xl mx-auto text-center p-6 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Nossos Diferenciais</h2>
        <p className="text-lg mb-4">
          Atendimento humanizado, tecnologia de ponta e um ambiente confortável.
        </p>
        <ul className="text-lg list-disc list-inside">
          <li>Equipe altamente qualificada</li>
          <li>Tratamentos modernos e indolores</li>
          <li>Ambiente acolhedor e seguro</li>
          <li>Atendimento personalizado</li>
        </ul>
      </div>
    </section>
  );    
};

export default Diferenciais;
