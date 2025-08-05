import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const FacetasDentarias = () => {
  const benefits = [
    "Transformação imediata do sorriso",
    "Resultado natural e duradouro",
    "Procedimento minimamente invasivo"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero 
        title="Facetas Dentárias"
        subtitle="Transforme seu sorriso com naturalidade e sofisticação usando tecnologia de ponta"
      />
      
      {/* Seção Benefícios */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/6c2ba63e-50f4-4b20-8be6-669c5c27fa08.png" 
                  alt="Facetas dentárias" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Benefícios das Facetas
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
                As facetas dentárias são lâminas ultrafinas de porcelana ou resina que são 
                aplicadas sobre a superfície dos dentes. Elas corrigem imperfeições como 
                manchas, formato, tamanho e pequenos desalinhamentos, proporcionando um 
                sorriso harmônico e natural em poucos procedimentos.
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

export default FacetasDentarias;