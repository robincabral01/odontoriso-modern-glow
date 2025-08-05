const About = () => {
  return <section className="section-padding">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Sobre a Clínica Odontoriso
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">Localizada no coração de Imperatriz - MA, a Clínica Odontoriso é referência em tratamentos odontológicos de excelência. Com mais de 15 anos de experiência, nossa equipe de profissionais altamente qualificados oferece os mais modernos procedimentos dentários.</p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Equipada com tecnologia de ponta e seguindo os mais rigorosos protocolos de 
              segurança e qualidade, proporcionamos um atendimento humanizado e resultados 
              que superam as expectativas de nossos pacientes.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">15+</div>
                <div className="text-muted-foreground">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">1000+</div>
                <div className="text-muted-foreground">Pacientes atendidos</div>
              </div>
            </div>
          </div>
          <div className="service-card p-8">
            <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80" alt="Interior moderno da Clínica Odontoriso" className="w-full h-64 object-cover rounded-lg mb-6" />
            <h3 className="text-2xl font-bold text-primary mb-4">
              Nossa Missão
            </h3>
            <p className="text-muted-foreground leading-relaxed">
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