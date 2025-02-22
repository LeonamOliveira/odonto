const Sobre = () => {
    return (
      <section  id="sobre" className="relative w-full h-[500px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-contain"
          style={{ backgroundImage: "url('/assets/drFernando.jpg')" }}
        ></div>
        
        <div className="relative z-10 bg-black bg-opacity-50 p-8 max-w-2xl text-center rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Sobre Nós</h2>
          <p className="text-lg">
            Na <strong>Estudio Odontologia</strong>, cuidamos do seu sorriso com excelência e dedicação.
            Nossa equipe especializada utiliza tecnologia de ponta para oferecer tratamentos odontológicos
            modernos e humanizados, garantindo conforto e segurança para cada paciente.
          </p>
          <p className="mt-4">
            Com anos de experiência, nossa missão é transformar sorrisos e melhorar a qualidade de vida,
            sempre priorizando um atendimento personalizado. Agende sua consulta e descubra como um
            sorriso saudável pode transformar sua vida!
          </p>
        </div>
      </section>
    );
  };
  
  export default Sobre;
  