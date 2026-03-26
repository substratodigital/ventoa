"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircleHeart } from "lucide-react"; // As a placeholder, or we can use an SVG for actual WhatsApp logo.

export function WhatsAppButton() {
  const phoneNumber = "5511995562403";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Ventoa%20Financial!`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20bd5a] transition-colors"
      style={{ boxShadow: "0 0 20px rgba(37, 211, 102, 0.4)" }}
    >
      {/* CSS animado nativo para o efeito "pulse" no background */}
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-30"></span>

      {/* SVG customizado oficial do WhatsApp para melhor estética */}
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8 md:w-10 md:h-10 relative z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.031 0C5.406 0 .025 5.378.025 11.996c0 2.115.553 4.18 1.603 6.002L.003 24l6.143-1.61c1.761.956 3.754 1.458 5.882 1.458h.005c6.621 0 12.002-5.38 12.002-12.001C24 5.21 21.365.006 12.031.006zM12.025 21.84h-.005c-1.785 0-3.535-.48-5.068-1.385l-.364-.216-3.765.987.99-3.666-.236-.376A9.972 9.972 0 011.91 11.996C1.91 6.438 6.442 1.91 12.029 1.91c2.693 0 5.223 1.05 7.126 2.955 1.9 1.905 2.947 4.437 2.947 7.13 0 5.56-4.531 10.091-10.077 10.091V21.84v.001zm5.534-7.56c-.304-.153-1.794-.887-2.072-1.002-.278-.115-.483-.153-.685.153-.203.305-.733 1.001-.884 1.205-.152.204-.305.228-.609.076-.304-.153-1.28-.472-2.438-1.503-.9-1.012-1.508-2.261-1.685-2.566-.178-.305-.02-.472.133-.625.137-.137.304-.356.457-.534.152-.178.203-.306.305-.508.102-.204.051-.382-.025-.534-.076-.153-.685-1.653-.94-2.264-.249-.594-.501-.514-.685-.523h-.583c-.203 0-.533.076-.812.382-.279.306-1.065 1.043-1.065 2.541s1.09 2.95 1.243 3.153c.152.204 2.152 3.284 5.216 4.606 2.459 1.061 3.257.94 3.868.864.693-.087 1.794-.733 2.046-1.425.253-.693.253-1.288.178-1.425-.078-.135-.281-.212-.585-.365z" />
      </svg>
    </motion.a>
  );
}
