"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function NavbarVentoa() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "Benefícios", id: "beneficios" },
    { name: "Metodologia", id: "metodologia" },
    { name: "Soluções", id: "solucoes" },
    { name: "Planos", id: "planos" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 flex justify-center px-6 py-4 md:py-6 transition-all duration-300 ${
        scrolled ? "bg-[#1A2B47]/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-7xl flex items-center justify-between relative">
        
        {/* Logo */}
        <div className="flex items-center gap-2 z-50">
          <motion.a 
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-[10rem] h-10 block"
          >
            <Image 
              src="/LOGO_HORIZONTAL_ventoa_white.svg" 
              alt="Ventoa Financial Logo" 
              fill 
              className="object-contain object-left"
              priority
            />
          </motion.a>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={`#${item.id}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="font-barlow text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-[2px] transition-all duration-300"
            >
              {item.name}
            </motion.a>
          ))}
          
          <motion.a
            href="#contato"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="group relative px-6 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-[2px] overflow-hidden transition-all hover:bg-[#00AEEF] hover:border-[#00AEEF] hover:shadow-[0_0_20px_rgba(0,174,239,0.3)]"
          >
            <span className="relative z-10 font-barlow text-xs font-bold uppercase tracking-widest text-white transition-colors">
              Falar com Especialista
            </span>
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden z-50">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-[#1A2B47] flex flex-col items-center justify-center gap-8 lg:hidden z-40"
            >
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className="font-barlow text-3xl font-light text-white hover:italic transition-all"
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="#contato"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-8 py-4 bg-[#00AEEF] text-white font-barlow font-bold uppercase tracking-widest rounded-[2px] transition-all hover:scale-105"
              >
                Falar com Especialista
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Detalhe Visual: Linha fina inferior (opcional) */}
        {!scrolled && (
          <div className="absolute -bottom-6 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        )}
      </div>
    </nav>
  );
}
