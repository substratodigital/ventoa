import React from "react";
import { Search, FileText, Settings2, RotateCw } from "lucide-react";

export function MethodologyTimeline() {
  const steps = [
    {
      number: "1",
      title: "DIAGNÓSTICO",
      duration: "1 Hora",
      desc: "Levantamento de perfil, dores e certidões para relatório prévio.",
      icon: Search
    },
    {
      number: "2",
      title: "PROPOSTA",
      duration: "Máximo 24 Horas",
      desc: "Apresentação da solução detalhada e custos.",
      icon: FileText
    },
    {
      number: "3",
      title: "EXECUÇÃO",
      duration: "Imediato",
      desc: "Aceite da proposta e início do plano de ação com ferramentas de controle.",
      icon: Settings2
    },
    {
      number: "4",
      title: "ENTREGA",
      duration: "Contínuo",
      desc: "Ciclo contínuo conforme o serviço contratado.",
      icon: RotateCw
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-[2rem] md:text-[2.5rem] font-bold font-heading text-[#1A2B47] tracking-tighter">
            Etapas da Implantação (Metodologia)
          </h2>
          <p className="text-[#4D4D4D] font-lora text-[1rem] max-w-2xl">
            Uma transição suave e controlada. Entenda como integramos nossa rotina BPO ao fluxo atual do seu negócio.
          </p>
        </div>

        <ol className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 before:hidden md:before:block before:absolute before:top-10 before:left-12 before:w-[calc(100%-6rem)] before:h-px before:bg-[#E5E7EB] before:-z-10 mt-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <li key={step.number} className="relative flex flex-col items-center text-center gap-4">
                
                {/* Conector Mobile Vertical */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#E5E7EB] -z-10 md:hidden" />
                
                {/* Icon Circle */}
                <div className="w-20 h-20 rounded-full bg-white border-2 border-[#E5E7EB] shadow-sm flex items-center justify-center z-10 text-[#1A2B47] group hover:border-[#00AEEF] hover:text-[#00AEEF] transition-all hover:scale-105 duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                
                {/* Content Area */}
                <div className="flex flex-col gap-2 px-4 w-full bg-white z-10">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[0.875rem] font-bold w-6 h-6 flex items-center justify-center rounded-full bg-[#F2F2F2] text-[#4D4D4D] absolute top-0 -left-2 md:-top-3 md:left-[calc(50%-1.5rem)] md:translate-x-4 border border-white">
                      {step.number}
                    </span>
                    <h3 className="text-[1.125rem] font-bold font-heading text-[#1A2B47] uppercase tracking-wide">
                      {step.title}
                    </h3>
                  </div>
                  <span className="text-[0.875rem] font-semibold text-[#00AEEF]">
                    {step.duration}
                  </span>
                  <p className="text-[0.9375rem] text-[#4D4D4D] font-lora leading-relaxed mt-1">
                    {step.desc}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

      </div>
    </section>
  );
}
