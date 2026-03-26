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
        
        <div className="flex flex-col items-start md:items-center text-left md:text-center gap-4">
          <h2 className="text-[2rem] md:text-[2.5rem] font-bold font-heading text-[#1A2B47] tracking-tighter leading-[0.9]">
            Etapas da Implantação (Metodologia)
          </h2>
          <p className="text-[#4D4D4D] font-barlow text-[1rem] max-w-3xl leading-relaxed">
            Nossos processos seguem um padrão de automação das rotinas, o controle não fica internalizado na cabeça de um colaborador, ele está estruturado através de ferramentas seguras de gestão de processos. Cada cliente tem seu espaço e seus dados estão muito bem guardados e seguros.
          </p>
        </div>

        <ol className="relative flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:grid md:grid-cols-4 md:space-x-0 md:gap-4 before:hidden md:before:block before:absolute before:top-10 before:left-12 before:w-[calc(100%-6rem)] before:h-px before:bg-[#E5E7EB] before:-z-10 mt-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
               <li key={step.number} className="relative flex-none w-[80vw] sm:w-[60vw] md:w-auto snap-start flex flex-col items-start md:items-center text-left md:text-center gap-5 md:gap-4 bg-white/50 md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none border border-slate-100 md:border-none shadow-sm md:shadow-none">
                
                {/* Icon Circle */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-2 border-[#E5E7EB] shadow-sm flex items-center justify-center z-10 text-[#1A2B47] group hover:border-[#00AEEF] hover:text-[#00AEEF] transition-all hover:scale-105 duration-300">
                  <Icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                
                {/* Content Area */}
                <div className="flex flex-col gap-2 w-full bg-transparent z-10 relative">
                  <div className="flex flex-col items-start md:items-center gap-1">
                    <span className="text-[0.75rem] md:text-[0.875rem] font-bold w-6 h-6 flex items-center justify-center rounded-full bg-[#1A2B47] text-white md:bg-[#F2F2F2] md:text-[#4D4D4D] absolute -top-[4rem] md:-top-3 -left-4 md:left-[calc(50%-1.5rem)] md:translate-x-4 border md:border-white shadow-md md:shadow-none z-20">
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
