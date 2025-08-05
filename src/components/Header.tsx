import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/protese-flexivel", label: "Prótese Flexível" },
    { href: "/facetas-dentarias", label: "Facetas Dentárias" },
    { href: "/implantes-dentarios", label: "Implantes Dentários" },
    { href: "/protese-sobre-implante", label: "Prótese sobre Implante" },
    { href: "/ortodontia", label: "Ortodontia" },
  ];

  return (
    <>
      {/* Linha fixa no topo para destaque da logo */}
      <div className="bg-primary/10 backdrop-blur-sm border-b border-primary/20 fixed top-0 left-0 right-0 z-50">
        <div className="header-gradient h-1"></div>
      </div>
      
      <header className="header-sticky top-1 bg-primary/5 backdrop-blur-md shadow-[var(--shadow-header)]">
        <div className="container-main">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/187bc179-99dc-4077-8a65-e044f4cf07e3.png" 
                alt="Clínica Odontoriso"
                className="h-12 w-auto drop-shadow-lg"
              />
            </div>

            {/* Menu Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-secondary transition-colors duration-300 font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Menu Mobile Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Menu Mobile */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4 border-t border-border mt-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-foreground hover:text-secondary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;