const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5599984350206"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 whatsapp-pulse"
      aria-label="Conversar no WhatsApp"
    >
      <img 
        src="/whatsapp-icon.png" 
        alt="WhatsApp"
        className="w-12 h-12"
        loading="eager"
        decoding="sync"
      />
    </a>
  );
};

export default WhatsAppFloat;