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
        src="/whatsapp-icon-new.png" 
        alt="WhatsApp"
        className="w-12 h-12"
        loading="eager"
        decoding="sync"
        onError={(e) => {
          e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2325D366'%3E%3Cpath d='M12.017 2.011c-5.506 0-9.988 4.482-9.988 9.988 0 1.749.448 3.394 1.235 4.83L2.011 21.99l5.241-1.241c1.376.698 2.929 1.093 4.571 1.093 5.506 0 9.988-4.482 9.988-9.988C21.811 6.348 17.523 2.011 12.017 2.011z'/%3E%3C/svg%3E";
        }}
      />
    </a>
  );
};

export default WhatsAppFloat;