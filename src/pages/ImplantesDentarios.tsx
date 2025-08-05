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
      <section className="section-padding relative overflow-hidden" style={{
          backgroundImage: `url('/lovable-uploads/40fcd238-3e63-49cd-b882-97c1be4ecfde.png')`,
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
            {/* Benefícios com fundo semi-transparente */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/9d525e40-6366-439a-aede-bd4948b6ba6d.png" 
                  alt="Implante dentário"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-950">
                Benefícios dos Implantes
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-blue-950 text-xl">✓</span>
                    <span className="text-lg text-slate-900">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Como Funciona com fundo semi-transparente */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl font-bold text-blue-950 mb-4">
                Como Funciona
              </h3>
              <p className="text-slate-900 leading-relaxed">
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