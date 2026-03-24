import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3 } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] bg-[#1A2B47] text-white pt-24 pb-16 px-6 md:px-12 overflow-hidden">
      
      {/* Header Incorporado - Logo Ventoa */}
      <header className="absolute top-0 left-0 right-0 p-8 flex justify-center md:justify-start max-w-7xl mx-auto z-50">
         <div className="relative w-[11rem] h-12">
            <Image 
              src="/Logo_ventoa.svg" 
              alt="Ventoa Financial Logo" 
              fill 
              className="object-contain"
              priority
            />
         </div>
      </header>

      {/* Shapes Conceptuais Soft */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] bg-[#00AEEF]/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-[#F2F2F2]/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-6 mt-12 md:mt-0">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00AEEF]/10 text-white border border-[#00AEEF]/40 hover:bg-[#00AEEF]/20 transition-colors mb-2">
          <BarChart3 className="w-4 h-4 text-[#00AEEF]" />
          <span className="text-[0.875rem] font-semibold tracking-wide uppercase">BPO Financeiro Integrado</span>
        </div>

        {/* Grupo de Títulos com Espaçamento Reduzido (Vercel Guidelines) */}
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold font-heading tracking-tighter text-white leading-tight">
            Terceirize suas rotinas financeiras
          </h1>
          
          <h2 className="text-[1.125rem] md:text-[1.5rem] font-medium text-white/90 text-balance font-heading tracking-tight">
            Saia do mundo Operacional para o Estratégico!
          </h2>
        </div>

        <p className="max-w-2xl text-[1rem] md:text-[1.125rem] text-white/80 font-lora mt-2 leading-relaxed">
          Tenha mais tempo para gerar mais dinheiro, deixe sua empresa regularizada e com clareza dos resultados.
        </p>

        <div className="mt-6 flex flex-col w-full sm:w-auto sm:flex-row gap-4">
          <Button className="bg-[#00AEEF] hover:bg-[#00AEEF]/80 text-white px-8 h-14 text-[1.125rem] rounded-full font-bold shadow-lg shadow-[#00AEEF]/20 transition-all hover:scale-105">
            Solicitar proposta
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
