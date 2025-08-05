const Testimonials = () => {
  const testimonials = [
    {
      text: "Excelente atendimento! A equipe é muito profissional e o resultado superou minhas expectativas. Recomendo a todos!",
      author: "Maria Silva",
      stars: 5
    },
    {
      text: "Fiz meus implantes na Odontoriso e estou muito satisfeita. Clínica moderna, tecnologia de ponta e profissionais qualificados.",
      author: "João Santos",
      stars: 5
    },
    {
      text: "Tratamento ortodôntico impecável! Hoje tenho o sorriso que sempre sonhei. Muito obrigada à toda equipe!",
      author: "Ana Costa",
      stars: 5
    },
    {
      text: "As facetas ficaram perfeitas! Resultado natural e muito bonito. Clínica de excelência em Imperatriz.",
      author: "Carlos Oliveira",
      stars: 5
    }
  ];

  const renderStars = (count: number) => {
    return "⭐".repeat(count);
  };

  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            O que nossos pacientes dizem
          </h2>
          <p className="text-lg text-muted-foreground">
            Depoimentos reais de quem confia no nosso trabalho
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="service-card p-6">
              <div className="mb-4 text-2xl">
                {renderStars(testimonial.stars)}
              </div>
              <p className="text-muted-foreground italic mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="text-primary font-semibold">
                - {testimonial.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;