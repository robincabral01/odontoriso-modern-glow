const About = () => {
  return <section className="section-padding relative overflow-hidden" style={{
      backgroundImage: `url('/lovable-uploads/woman-smile-bg.jpg')`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/30 to-primary/20"></div>
      
      {/* Badge de Resultados Reais */}
      <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
        <span className="text-white font-medium text-sm">✨ Resultados Reais</span>
      </div>
      
      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Informações da Clínica com fundo semi-transparente */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-950">
              Sobre a Clínica Odontoriso
            </h2>
            <p className="text-lg mb-6 leading-relaxed text-slate-900">Localizada no coração de Imperatriz - MA, a Clínica Odontoriso é referência em tratamentos odontológicos de excelência. Com mais de 15 anos de experiência, nossa equipe de profissionais altamente qualificados oferece os mais modernos procedimentos dentários.</p>
            <p className="text-lg mb-6 leading-relaxed text-slate-900">
              Equipada com tecnologia de ponta e seguindo os mais rigorosos protocolos de 
              segurança e qualidade, proporcionamos um atendimento humanizado e resultados 
              que superam as expectativas de nossos pacientes.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-950 mb-2">15+</div>
                <div className="text-slate-900">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-950 mb-2">1000+</div>
                <div className="text-slate-900">Pacientes atendidos</div>
              </div>
            </div>
          </div>
          
          {/* Nossa Missão com fundo semi-transparente */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80" alt="Interior moderno da Clínica Odontoriso" className="w-full h-64 object-cover rounded-lg mb-6" />
            <h3 className="text-2xl font-bold text-blue-950 mb-4">
              Nossa Missão
            </h3>
            <p className="leading-relaxed text-slate-900">
              Proporcionar saúde bucal e sorrisos transformadores através de tratamentos 
              personalizados, tecnologia avançada e atendimento humanizado, sempre priorizando 
              o bem-estar e a satisfação de nossos pacientes.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default About;