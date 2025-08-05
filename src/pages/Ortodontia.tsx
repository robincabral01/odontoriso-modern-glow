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
      
      {/* Seção Benefícios */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Benefícios da Ortodontia
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