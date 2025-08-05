const Footer = () => {
  return <footer className="bg-primary text-primary-foreground py-8">
      <div className="container-main">
        <div className="text-center">
          <p className="mb-4">
            © 2025 Clínica Odontoriso – Imperatriz, MA
          </p>
          
          <div className="flex justify-center space-x-4 mb-6">
            <a href="https://share.google/jatjVek3Tfqv7tE4L" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors">
              Avalie-nos no Google
            </a>
          </div>
          
          {/* Créditos ALCA Mídias */}
          <div className="text-xs text-primary-foreground/60 pt-4 border-t border-primary-foreground/20">
            <a href="https://www.somosalca.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80 transition-colors">Desenvolvido por uma agência especializada em resultados para clínicas</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;