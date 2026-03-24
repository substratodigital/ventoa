import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      name: "Bronze",
      description: "Ideal para iniciar com clareza",
      items: [
        "Diagnóstico inicial.",
        "Contas a pagar e lançamentos no sistema.",
        "Agendamento bancário e emissão de NFS/Cobranças.",
        "Até 40 agendamentos mensais."
      ],
      highlighted: false
    },
    {
      name: "Prata",
      badge: "Mais Escolhido",
      description: "Solução completa de ponta a ponta",
      items: [
        "Todos os itens do Bronze",
        "Conciliação bancária completa.",
        "Fluxo de caixa on-line (Bússola).",
        "Reunião mensal de fechamento on-line.",
        "Até 60 agendamentos mensais."
      ],
      highlighted: true
    },
    {
      name: "Ouro",
      description: "Visão estratégica e crescimento",
      items: [
        "Todos os itens do Prata",
        "Elaboração de Orçamento e análise Orçado x Realizado.",
        "Sugestão de ações para melhoria de resultados.",
        "Até 220 agendamentos mensais."
      ],
      highlighted: false
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-[#F2F2F2]/60">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        <div className="flex flex-col items-center text-center gap-3">
          <h2 className="text-[2.25rem] md:text-[3rem] font-bold font-heading text-[#1A2B47] tracking-tighter leading-tight">
            Planos e Pacotes
          </h2>
          <p className="text-[1rem] text-[#4D4D4D] font-lora max-w-xl">
            Escolha o cenário que melhor se adapta à atual maturidade financeira e rotina da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative flex flex-col h-full rounded-2xl ${
                plan.highlighted 
                  ? "border-2 border-[#00AEEF] shadow-xl md:-translate-y-4 scale-100 md:scale-[1.03] z-10 bg-white" 
                  : "border border-[#E5E7EB] shadow-sm bg-white"
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-[#00AEEF] text-white text-[0.75rem] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">
                    ⭐ {plan.badge}
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-6 pt-8 gap-1">
                <CardTitle className="text-[2rem] font-heading font-bold text-[#1A2B47]">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-[1rem] font-lora text-[#4D4D4D]">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 px-8">
                <ul className="flex flex-col gap-4">
                  {plan.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.highlighted ? "text-[#00AEEF]" : "text-[#1A2B47]/60"}`} />
                      <span className="text-[0.9375rem] text-[#4D4D4D] font-lora font-medium leading-normal">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-6 pb-8 px-8">
                <Button 
                  className={`w-full h-14 rounded-xl text-[1.125rem] font-bold transition-all ${
                    plan.highlighted 
                      ? "bg-[#00AEEF] hover:bg-[#00AEEF]/90 text-white shadow-lg shadow-[#00AEEF]/20" 
                      : "bg-[#1A2B47] hover:bg-[#1A2B47]/90 text-white"
                  }`}
                >
                  Selecionar {plan.name}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
