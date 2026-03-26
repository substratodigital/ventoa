import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LineChart, ShieldCheck, ListChecks, TrendingDown } from "lucide-react";

export function FeaturesGrid() {
  const features = [
    {
      id: "clarity",
      icon: LineChart,
      title: "Mais clareza dos resultados",
      text: "Tenha seu fluxo de caixa correto, claro e visível para avaliar a saúde financeira de sua empresa."
    },
    {
      id: "headache-free",
      icon: ShieldCheck,
      title: "Menos dor de cabeça com Gestão",
      text: "Evite o desafio de contratar e manter funcionários qualificados. Faremos o acompanhamento profissional para sua lucratividade."
    },
    {
      id: "agility",
      icon: ListChecks,
      title: "Organização e Agilidade",
      text: "Processo claro e rastreável, atendendo rigorosamente os padrões financeiros e contábeis."
    },
    {
      id: "costs",
      icon: TrendingDown,
      title: "Redução de custos",
      text: "Tenha especialistas cuidando das rotinas com excelência, sem os custos internalizados em sua folha (CLT ou PJ)."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-[#F2F2F2]/60">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* Lado Esquerdo - Title */}
        <div className="lg:w-1/3 flex flex-col gap-4">
          <h2 className="text-[2rem] md:text-[3rem] font-bold font-heading tracking-tighter text-[#1A2B47] leading-[0.9]">
            Por que terceirizar sua gestão financeira?
          </h2>
          <p className="text-[1rem] text-[#4D4D4D] font-barlow mt-2">
            A terceirização (BPO) significa trazer expertise e excelência corporativa contínua para dentro do seu fluxo atual.
          </p>
        </div>

        {/* Lado Direito */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.id} 
                className="bg-white border border-[#E5E7EB] hover:border-[#00AEEF]/50 shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl group flex flex-col h-full"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 w-full mb-1">
                    <div className="p-2.5 rounded-full bg-[#1A2B47]/5 group-hover:bg-[#00AEEF]/10 transition-colors shrink-0">
                      <Icon className="w-6 h-6 text-[#1A2B47] group-hover:text-[#00AEEF] transition-colors" />
                    </div>
                  </div>
                  <CardTitle className="text-[1.125rem] font-heading font-bold tracking-tight text-[#1A2B47] leading-[0.9]">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 flex-1 flex flex-col justify-start">
                  <p className="text-[0.9375rem] font-barlow text-[#4D4D4D] leading-relaxed">
                    {feature.text}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
