import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const ProteseFlexivel = () => {
  const benefits = [
    "Maior conforto e adaptação natural",
    "Material flexível e resistente",
    "Estética superior sem grampos metálicos"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero 
        title="Prótese Dentária Flexível"
        subtitle="Conforto e naturalidade para o seu sorriso com a mais moderna tecnologia em próteses"
      />
      
      {/* Seção Benefícios */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Benefícios da Prótese Flexível
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
                A prótese flexível é confeccionada com materiais termoplásticos de alta qualidade, 
                proporcionando maior conforto e adaptação. Sem grampos metálicos visíveis, 
                oferece uma estética superior e maior naturalidade ao sorriso. O processo é 
                rápido e indolor, com moldagem precisa e ajuste personalizado.
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

export default ProteseFlexivel;