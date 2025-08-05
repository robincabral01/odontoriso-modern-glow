import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const ImplantesDentarios = () => {
  const benefits = [
    "Recuperação completa da função mastigatória",
    "Solução definitiva e duradoura",
    "Preservação dos dentes adjacentes"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero 
        title="Implantes Dentários"
        subtitle="Recupere a função e estética dos seus dentes com segurança e tecnologia avançada"
      />
      
      {/* Seção Benefícios */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Benefícios dos Implantes
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
                O implante dentário é um pino de titânio inserido no osso da mandíbula ou maxila, 
                que substitui a raiz do dente perdido. Após a osseointegração, uma coroa 
                protética é fixada sobre o implante, devolvendo completamente a função e 
                estética do dente natural.
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

export default ImplantesDentarios;