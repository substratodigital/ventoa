"use client";

import React from "react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* 1. Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 bg-[#1A2B47]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
        >
          <source 
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_074215_04640ca7-042c-45d6-bb56-58b1e8a42489.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Shadow overlay to improve text legibility */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#1A2B47] via-transparent to-[#1A2B47]/80" />
      </div>

      {/* 2. Conteúdo Principal */}
      <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center text-center mt-20 md:mt-0">
        
        {/* Acentos de Design (Quadrados nos 4 cantos) - Ocultos em telas pequenas para não quebrar layout */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          <span className="absolute -top-1 -left-1 w-[7px] h-[7px] bg-white"></span>
          <span className="absolute -top-1 -right-1 w-[7px] h-[7px] bg-white"></span>
          <span className="absolute -bottom-1 -left-1 w-[7px] h-[7px] bg-white"></span>
          <span className="absolute -bottom-1 -right-1 w-[7px] h-[7px] bg-white"></span>
        </div>

        {/* Featured Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 inline-flex items-center p-[1px] rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
        >
          <div className="px-4 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-slate-900">
            Terceirização e Consultoria
          </div>
        </motion.div>

        {/* Dynamic Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-2 md:gap-4 leading-[0.9]"
        >
          <span className="font-barlow font-light text-white text-[32px] md:text-[64px] leading-[0.9]">
            Terceirize suas
          </span>
          <span className="font-lora italic text-[#00AEEF] text-[40px] md:text-[72px] leading-[0.9] drop-shadow-md">
            rotinas financeiras
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 md:mt-12 max-w-2xl flex flex-col gap-4 md:gap-6 text-white/90"
        >
          <h2 className="text-xl md:text-2xl font-barlow font-medium text-white drop-shadow-sm">
            Saia do mundo Operacional para o estratégico!
          </h2>
          <p className="font-barlow text-base md:text-lg leading-relaxed text-white/80">
            Tenha mais tempo para gerar mais dinheiro, deixe sua empresa regularizada e com clareza dos resultados.
          </p>
        </motion.div>

        {/* Botões */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 md:mt-14 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a href="#contato" className="flex items-center justify-center px-8 py-4 md:py-5 w-full sm:w-auto rounded-[12px] bg-[#00AEEF] text-white font-barlow text-[1.125rem] font-bold transition-all hover:bg-[#00AEEF]/90 hover:scale-105 shadow-lg">
            Solicitar Proposta
          </a>
        </motion.div>

      </div>
    </section>
  );
}
