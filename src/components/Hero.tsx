import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  subtitle?: string;
  showCTA?: boolean;
}

const Hero = ({ title, subtitle, showCTA = true }: HeroProps) => {
  return (
    <section className="hero-gradient relative min-h-[60vh] md:min-h-screen flex items-center justify-center">
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container-main relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            {subtitle}
          </p>
        )}
        
        {showCTA && (
          <Button 
            size="lg"
            className="cta-button text-lg px-8 py-4"
            asChild
          >
            <a 
              href="https://wa.me/5599984350206"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agende no WhatsApp
            </a>
          </Button>
        )}
      </div>
    </section>
  );
};

export default Hero;