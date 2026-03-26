import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import Image from "next/image";

export function FooterContact() {
  return (
    <footer className="bg-[#1A2B47] pt-20 pb-12 px-6 md:px-12 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Info Direita - Experiência e Autoridade GEO */}
        <div className="flex flex-col gap-6 lg:w-1/2 order-2 lg:order-1">
          <div className="flex items-center gap-4">
             <div className="w-[12rem] h-12 relative">
                <Image 
                  src="/LOGO_HORIZONTAL_ventoa_white.svg" 
                  alt="Ventoa Financial Logo" 
                  fill 
                  className="object-contain object-left"
                />
             </div>
          </div>
          
          <p className="text-[1.125rem] text-white/80 font-barlow max-w-md leading-relaxed">
            Oferecemos soluções ajustadas para sua empresa, acompanhando de perto sua gestão.
          </p>

          <div className="flex items-start gap-5 mt-4 p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-16 h-16 relative rounded-full overflow-hidden shrink-0 border-2 border-[#00AEEF]">
               <Image src="/Otavio.webp" alt="Otávio Duarte" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-[1.25rem] font-heading text-white">Otávio Duarte</h3>
              <p className="text-[0.75rem] font-bold text-[#00AEEF] uppercase tracking-widest mb-1">
                Fundador & Sócio Diretor
              </p>
              <p className="text-[0.875rem] text-white/80 font-barlow leading-relaxed">
                Administrador de Empresas e Contador (Mais de 25 anos de experiência).
              </p>
            </div>
          </div>

          <div className="flex flex-col mt-4 text-[0.875rem] text-white/80 font-medium">
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-[#00AEEF] shrink-0" />
              <span>contato@ventoafinancial.com.br</span>
            </div>
          </div>
        </div>

        {/* Formulário Esquerda - Contato Rápido */}
        <div className="order-1 lg:order-2 lg:w-1/2 bg-white/5 p-8 md:p-10 rounded-2xl border border-white/10 flex flex-col gap-6 h-fit">
          
          <div className="flex flex-col gap-2">
            <h2 className="text-[2rem] font-heading font-bold text-white tracking-tighter leading-[0.9]">Solicite uma proposta online</h2>
            <p className="text-white/80 font-barlow text-[1rem]">
              Preencha os dados e entraremos em contato o mais breve possível.
            </p>
          </div>

          <form className="flex flex-col gap-5 mt-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[0.75rem] uppercase tracking-widest font-bold text-white/70">Nome</label>
              <Input 
                id="name" 
                placeholder="Seu nome" 
                className="bg-white/10 border-none text-white placeholder:text-white/30 h-12 rounded-xl focus-visible:ring-[#00AEEF] text-[1rem]"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[0.75rem] uppercase tracking-widest font-bold text-white/70">E-mail Corporativo</label>
              <Input 
                id="email" 
                type="email" 
                placeholder="voce@suaempresa.com.br" 
                className="bg-white/10 border-none text-white placeholder:text-white/30 h-12 rounded-xl focus-visible:ring-[#00AEEF] text-[1rem]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="whatsapp" className="text-[0.75rem] uppercase tracking-widest font-bold text-white/70">Whatsapp</label>
              <Input 
                id="whatsapp" 
                type="tel" 
                placeholder="(00) 00000-0000" 
                className="bg-white/10 border-none text-white placeholder:text-white/30 h-12 rounded-xl focus-visible:ring-[#00AEEF] text-[1rem]"
              />
            </div>

            <Button type="button" className="w-full h-14 bg-[#00AEEF] hover:bg-[#00AEEF]/90 text-white font-bold text-[1.125rem] mt-2 rounded-xl shadow-[0_0_30px_-5px_rgba(0,174,239,0.4)] transition-all">
              Solicitar proposta
            </Button>
          </form>

        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[0.75rem] text-white/60 font-barlow gap-4">
        <p>© 2026 Ventoa Financial. Todos os direitos reservados.</p>
        <p>CNPJ: 00.000.000/0000-00</p>
      </div>
    </footer>
  );
}
