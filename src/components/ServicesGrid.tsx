import { Smile, Sparkles, Plus, Shield, AlignLeft } from 'lucide-react';
import ToothIcon from './icons/ToothIcon';

const ServicesGrid = () => {
  const services = [
    {
      title: "Prótese Dentária Flexível",
      description: "Conforto e naturalidade para o seu sorriso",
      href: "/protese-flexivel",
      icon: ToothIcon
    },
    {
      title: "Facetas Dentárias",
      description: "Transforme seu sorriso com naturalidade",
      href: "/facetas-dentarias",
      icon: Sparkles
    },
    {
      title: "Implantes Dentários",
      description: "Recupere a função e estética dos seus dentes",
      href: "/implantes-dentarios",
      icon: Plus
    },
    {
      title: "Prótese sobre Implante",
      description: "Solução definitiva e segura",
      href: "/protese-sobre-implante",
      icon: Shield
    },
    {
      title: "Ortodontia",
      description: "Alinhamento perfeito para o seu sorriso",
      href: "/ortodontia",
      icon: AlignLeft
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos os mais modernos tratamentos odontológicos com tecnologia de ponta
            e profissionais altamente qualificados.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <a
              key={service.href}
              href={service.href}
              className="service-card p-6 text-center group cursor-pointer"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={48} className="mx-auto text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;