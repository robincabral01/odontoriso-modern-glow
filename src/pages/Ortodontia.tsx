import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Ortodontia = () => {
  const benefits = [
    "Alinhamento perfeito dos dentes",
    "Melhora da função mastigatória",
    "Aumento da autoestima e confiança"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero 
        title="Ortodontia"
        subtitle="Alinhamento perfeito para o seu sorriso com tratamentos modernos e eficazes"
      />
      
      {/* Seção Benefícios com Background */}
      <section 
        className="section-padding relative overflow-hidden"
        style={{
          backgroundImage: `url('/lovable-uploads/af43778b-a3b8-4164-a2a0-349509e50017.png')`,
          backgroundPosition: 'right center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay sutil apenas na esquerda */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-primary/20 to-transparent"></div>
        
        {/* Badge de Resultados Reais */}
        <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
          <span className="text-white font-medium text-sm">✨ Resultados Reais</span>
        </div>
        
        {/* Call-to-action sobreposta à imagem */}
        <div className="absolute bottom-8 right-8 bg-primary/90 backdrop-blur-sm p-6 rounded-xl border border-white/20 max-w-sm">
          <h3 className="text-xl font-bold text-white mb-2">
            Transforme seu Sorriso
          </h3>
          <p className="text-white/90 text-sm mb-4">
            Agende sua consulta e descubra como a ortodontia pode mudar sua vida.
          </p>
          <button className="bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:bg-white/90 transition-all">
            Agendar Consulta
          </button>
        </div>
        
        <div className="container-main relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Benefícios com fundo semi-transparente - ocupando mais espaço */}
            <div className="bg-primary/80 backdrop-blur-sm p-8 rounded-xl border border-white/20 lg:max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Benefícios da Ortodontia
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-white text-xl">✓</span>
                    <span className="text-lg text-white/90">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              {/* Informação adicional sobre o tratamento */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">
                  Tecnologia Moderna
                </h3>
                <p className="text-white/90 text-sm">
                  Utilizamos aparelhos de última geração para resultados mais rápidos e confortáveis.
                </p>
              </div>
            </div>
            
            {/* Espaço livre para destacar a imagem */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      <ServicesGrid />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Ortodontia;