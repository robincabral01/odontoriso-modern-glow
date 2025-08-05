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
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/60"></div>
        
        {/* Badge de Resultados Reais */}
        <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
          <span className="text-white font-medium text-sm">✨ Resultados Reais</span>
        </div>
        
        <div className="container-main relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Benefícios com fundo semi-transparente */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
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
            </div>
            
            {/* Como Funciona com fundo semi-transparente */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Como Funciona
              </h3>
              <p className="text-white/90 leading-relaxed">
                O tratamento ortodôntico utiliza aparelhos fixos ou móveis para corrigir 
                o posicionamento dos dentes e melhorar a oclusão. Com tecnologia moderna 
                e materiais de alta qualidade, conseguimos resultados eficazes em menos 
                tempo, proporcionando o sorriso perfeito que você sempre desejou.
              </p>
            </div>
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