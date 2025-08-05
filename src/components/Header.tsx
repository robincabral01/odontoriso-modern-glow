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
  const navLinks = [{
    href: "/",
    label: "Home"
  }, {
    href: "/protese-flexivel",
    label: "Prótese Flexível"
  }, {
    href: "/facetas-dentarias",
    label: "Facetas Dentárias"
  }, {
    href: "/implantes-dentarios",
    label: "Implantes Dentários"
  }, {
    href: "/protese-sobre-implante",
    label: "Prótese sobre Implante"
  }, {
    href: "/ortodontia",
    label: "Ortodontia"
  }];
  return <>
      <header className="header-sticky top-0 hero-gradient border-b border-primary/20">
        <div className="container-main">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/lovable-uploads/187bc179-99dc-4077-8a65-e044f4cf07e3.png" alt="Clínica Odontoriso" className="h-12 w-auto drop-shadow-lg" />
            </div>

            {/* Menu Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => <a key={link.href} href={link.href} className="text-white hover:text-white/80 transition-colors duration-300 font-medium">
                  {link.label}
                </a>)}
            </nav>

            {/* Menu Mobile Toggle */}
            <Button variant="ghost" size="icon" className="md:hidden text-white hover:text-white/80" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Menu Mobile */}
          {isMenuOpen && <nav className="md:hidden pb-4 border-t border-white/20 mt-4 pt-4">
              {navLinks.map(link => <a key={link.href} href={link.href} className="block py-2 text-white hover:text-white/80 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>)}
            </nav>}
        </div>
      </header>
    </>;
};
export default Header;