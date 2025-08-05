import { MapPin, Phone, MessageCircle, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Localização e Contato
          </h2>
          <p className="text-lg text-muted-foreground">
            Venha nos visitar ou entre em contato conosco
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="service-card p-6">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">Endereço</p>
                    <p className="text-muted-foreground">
                      Rua Antonio de Miranda, 1304<br />
                      Imperatriz, MA
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <a 
                      href="tel:+559935256485"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      (99) 3525-6485
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MessageCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a 
                      href="https://wa.me/5599984350206"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      (99) 98435-0206
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Instagram className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <a 
                      href="https://www.instagram.com/odontorisoimperatriz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      @odontorisoimperatriz
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <a
                  href="https://share.google/jatjVek3Tfqv7tE4L"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-secondary hover:text-accent transition-colors font-medium"
                >
                  ⭐ Avalie-nos no Google
                </a>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="service-card p-6">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Como Chegar
            </h3>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.344!2d-47.491!3d-5.526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92c55f8f8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2sRua%20Antonio%20de%20Miranda%2C%201304%20-%20Imperatriz%2C%20MA!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Clínica Odontoriso"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;