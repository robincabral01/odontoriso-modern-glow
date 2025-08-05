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
      <section 
        className="section-padding relative overflow-hidden"
        style={{
          backgroundImage: 'url("/lovable-uploads/4e1a136a-fb83-4824-ae02-f70b5e3ecc6a.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/30 to-primary/20"></div>
        
        {/* Badge Resultados Reais */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 z-10">
          <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
            ✨ Resultados Reais
          </div>
        </div>
        
        <div className="container-main relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <img 
                src="/lovable-uploads/adda76f3-cb1c-4f78-b565-96713235985f.png" 
                alt="Prótese Dentária Flexível" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Benefícios da Prótese Flexível
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-secondary text-xl">✓</span>
                    <span className="text-lg text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Como Funciona
              </h3>
              <p className="text-slate-700 leading-relaxed">
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