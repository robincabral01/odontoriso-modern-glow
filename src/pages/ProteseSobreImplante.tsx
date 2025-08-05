import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const ProteseSobreImplante = () => {
  const benefits = [
    "Máxima estabilidade e segurança",
    "Conforto superior às próteses convencionais",
    "Melhora significativa na qualidade de vida"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero 
        title="Prótese sobre Implante"
        subtitle="Solução definitiva e segura para recuperar completamente sua mastigação e confiança"
      />
      
      {/* Seção Benefícios */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/466a7d91-5f05-4c89-8751-9312287d4832.png" 
                alt="Prótese sobre Implante - Resultado" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Benefícios da Prótese sobre Implante
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-secondary text-xl">✓</span>
                    <span className="text-lg text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="service-card p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Como Funciona
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A prótese sobre implante combina a estabilidade dos implantes dentários com 
                o conforto de uma prótese bem adaptada. Fixada sobre 2 a 6 implantes, 
                oferece segurança total na mastigação e fala, eliminando o desconforto e 
                instabilidade das próteses convencionais.
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

export default ProteseSobreImplante;