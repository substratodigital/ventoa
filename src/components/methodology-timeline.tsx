import React from "react";
import { Search, Briefcase, TrendingUp, MonitorCheck } from "lucide-react";

export function MethodologyTimeline() {
  const steps = [
    {
      number: "1",
      title: "DIAGNÓSTICO",
      desc: "Avaliação gratuita do nível maturidade da sua organização. Avaliamos quais são os gaps que estão prejudicando sua empresa.",
      icon: Search
    },
    {
      number: "2",
      title: "Terceirização Financeira",
      desc: "Ganhe tempo e mantenha o foco em seu negócio, garantindo precisão, conformidade e eficiência.",
      icon: Briefcase
    },
    {
      number: "3",
      title: "Consultoria Financeira",
      desc: "Modelagem/ revisão de processos. Margem de lucro, revisão/definição de preços, consultoria tributária e regime adequado.",
      icon: TrendingUp
    },
    {
      number: "4",
      title: "Otimização ERP",
      desc: "Assessoramos sua empresa na escolha, correções ou substituição da ferramenta de gestão que melhor se encaixa às necessidades da organização.",
      icon: MonitorCheck
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-[2rem] md:text-[2.5rem] font-bold font-heading text-[#1A2B47] tracking-tighter leading-[0.9]">
            Etapas da Implantação (Metodologia)
          </h2>
          <p className="text-[#4D4D4D] font-barlow text-[1rem] max-w-3xl leading-relaxed">
            Nossos processos seguem um padrão de automação das rotinas, o controle não fica internalizado na cabeça de um colaborador, ele está estruturado através de ferramentas seguras de gestão de processos. Cada cliente tem seu espaço e seus dados estão muito bem guardados e seguros.
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
                  <p className="text-[0.9375rem] text-[#4D4D4D] font-barlow leading-relaxed mt-1">
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
