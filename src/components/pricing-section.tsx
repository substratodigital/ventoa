"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";

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
      fullItems: [
        "Diagnóstico",
        "Contas a pagar com Lançamentos no sistema financeiro",
        "Agendamento de Contas a pagar no Banco",
        "Lançamentos de tarifas e movimentações no sistema",
        "Emissão de NFS",
        "Emissão de Cobranças",
        "Compartilhamento de doc online para o contador/cliente",
        "Até 40 agendamentos mensais"
      ],
      highlighted: false
    },
    {
      name: "Prata",
      badge: "Mais Escolhido",
      description: "Solução completa de ponta a ponta",
      items: [
        "Todos os itens do Bronze +",
        "Conciliação bancária completa.",
        "Fluxo de caixa on-line (Bússola).",
        "Reunião mensal de fechamento on-line.",
        "Até 60 agendamentos mensais."
      ],
      fullItems: [
        "Diagnóstico",
        "Contas a pagar com Lançamentos no sistema",
        "Agendamento de Contas a pagar no Banco",
        "Lançamentos de tarifas e movimentações",
        "Emissão de NFS e Cobranças",
        "Conciliação bancária",
        "Compartilhamento de documentos online",
        "Fluxo de caixa on-line (Bússola)",
        "Classificação e priorização das contas",
        "Reunião Mensal de fechamento on-line",
        "Até 60 agendamentos mensais"
      ],
      highlighted: true
    },
    {
      name: "Ouro",
      description: "Visão estratégica e crescimento",
      items: [
        "Todos os itens do Prata +",
        "Elaboração de Orçamento e análise.",
        "Sugestão de ações para resultados.",
        "Até 220 agendamentos mensais."
      ],
      fullItems: [
        "Tudo do plano Prata incl.",
        "Elaboração de Orçamento",
        "Classificação e priorização das contas",
        "Sugestão de ações para melhoria de resultados",
        "Relatório de acompanhamento orçado x realizado",
        "Reunião Mensal de Fechamento On-line",
        "Até 220 agendamentos mensais"
      ],
      highlighted: false
    }
  ];

  const consultoria = [
    "Modelagem/ revisão de processos",
    "Revisão de plano de contas",
    "Estudo de resultado por produto",
    "Margem de Lucro",
    "Revisão/definição de preços",
    "Sugestão de ações para melhoria de resultados",
    "Definição de principais índices de controle"
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-[#F2F2F2]/60">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        <div className="flex flex-col items-center text-center gap-3">
          <h2 className="text-[2.25rem] md:text-[3rem] font-bold font-heading text-[#1A2B47] tracking-tighter leading-[0.9]">
            Planos e Pacotes
          </h2>
          <p className="text-[1rem] text-[#4D4D4D] font-barlow max-w-xl leading-relaxed">
            Os serviços são precificados com base no volume de lançamentos e complexidade das rotinas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>

        {/* Banner Consultoria */}
        <Card className="bg-white border-[#E5E7EB] shadow-sm rounded-2xl w-full mx-auto p-8 md:p-12 lg:flex-row flex-col flex items-center justify-between gap-8">
          <div className="flex flex-col gap-4 lg:w-1/3 text-center lg:text-left">
            <h3 className="text-[2rem] font-bold font-heading text-[#1A2B47]">Consultoria</h3>
            <p className="text-[#4D4D4D] font-barlow leading-relaxed">
              Atuação customizada para empresas que necessitam repensar o modelo de negócio ou encontrar o ponto de equilíbrio de seus resultados.
            </p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {consultoria.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 shrink-0 text-[#00AEEF]" />
                <span className="text-[0.9375rem] text-[#4D4D4D] font-barlow font-medium leading-normal">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </Card>

      </div>
    </section>
  );
}

interface PlanType {
  name: string;
  badge?: string;
  description: string;
  items: string[];
  fullItems: string[];
  highlighted: boolean;
}

function PlanCard({ plan }: { plan: PlanType }) {
  const [showFull, setShowFull] = useState(false);
  const itemsToShow = showFull ? plan.fullItems : plan.items;

  return (
    <Card 
      className={`relative flex flex-col h-full rounded-[24px] mt-6 lg:mt-0 transition-all duration-300 ${
        plan.highlighted 
          ? "border-2 border-[#00AEEF] shadow-xl lg:scale-[1.05] z-10 bg-white" 
          : "border border-[#E5E7EB] shadow-sm bg-white"
      }`}
    >
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-max">
          <span className="bg-[#00AEEF] text-white text-[0.75rem] font-bold uppercase tracking-widest py-2 px-6 rounded-full shadow-lg flex items-center gap-2">
            ⭐ {plan.badge}
          </span>
        </div>
      )}
      
      <CardHeader className="text-center pb-6 pt-10 gap-1">
        <CardTitle className="text-[2rem] font-heading font-bold text-[#1A2B47]">
          {plan.name}
        </CardTitle>
        <CardDescription className="text-[1rem] font-barlow text-[#4D4D4D]">
          {plan.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 px-6 md:px-8">
        <ul className="flex flex-col gap-4">
          {itemsToShow.map((item: string, idx: number) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle2 className={`w-6 h-6 shrink-0 ${plan.highlighted ? "text-[#00AEEF]" : "text-[#1A2B47]/60"}`} />
              <span className="text-[0.9375rem] text-[#4D4D4D] font-barlow font-medium leading-normal max-w-full">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <button 
          onClick={() => setShowFull(!showFull)}
          className="mt-6 flex items-center justify-center gap-1 w-full text-sm font-bold text-[#1A2B47] hover:text-[#00AEEF] transition-colors"
        >
          {showFull ? (
            <>Ver resumo <ChevronUp className="w-6 h-6" /></>
          ) : (
            <>Ver o pacote completo <ChevronDown className="w-6 h-6" /></>
          )}
        </button>
      </CardContent>

      <CardFooter className="pt-6 pb-8 px-6 md:px-8">
        <a 
          href="#contato"
          className={`flex items-center justify-center w-full h-14 rounded-xl text-[1.125rem] font-bold font-barlow transition-all ${
            plan.highlighted 
              ? "bg-[#00AEEF] hover:bg-[#00AEEF]/90 text-white shadow-lg shadow-[#00AEEF]/20" 
              : "bg-[#1A2B47] hover:bg-[#1A2B47]/90 text-white"
          }`}
        >
          Solicitar Proposta
        </a>
      </CardFooter>
    </Card>
  );
}
