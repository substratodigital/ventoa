"use client";

import React from "react";
import { Building2, Landmark, Users, Receipt } from "lucide-react";
import { motion } from "framer-motion";

export function AccountingSolutions() {
  const steps = [
    {
      title: "Abertura & Desenquadramento",
      desc: "Abertura, regularização ou mudança de porte de sua empresa, podemos apoiá-lo em cada etapa com conhecimento e segurança.",
      icon: Building2
    },
    {
      title: "Contabilidade Mensal",
      desc: "Gestão com os principais demonstrativos contábeis em conformidade com a legislação vigente.",
      icon: Landmark
    },
    {
      title: "Departamento Pessoal",
      desc: "Todas as rotinas do DP + gerenciamento avançado da folha de pagamentos para seus funcionários.",
      icon: Users
    },
    {
      title: "Gestão Fiscal",
      desc: "Controle das obrigações fiscais no melhor enquadramento tributário para reduzir custos legais.",
      icon: Receipt
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
        
        {/* Sticky Left Column */}
        <div className="lg:w-1/3 flex flex-col gap-6 lg:sticky lg:top-32 h-fit">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[3rem] md:text-[4rem] font-medium font-lora text-[#1A2B47] tracking-tighter leading-[0.9]"
          >
            Soluções<br /> Contábeis
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-[#4D4D4D] font-barlow text-[1.25rem] leading-relaxed"
          >
            <strong className="text-[#1A2B47]">Troca de Contabilidade sem fricção.</strong> Se estiver descontente com sua assessoria atual, mude com segurança. É essencial manter integradas as rotinas financeiras e contábeis.
          </motion.p>
        </div>

        {/* Right Column (Vertical Animated Cards) */}
        <div className="lg:w-2/3 flex flex-col gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-10 md:p-14 rounded-[2rem] shadow-sm flex flex-col gap-8 group hover:shadow-xl transition-shadow duration-500"
              >
                <div>
                  <div className="p-3 bg-[#1A2B47]/5 group-hover:bg-[#00AEEF]/10 rounded-2xl inline-flex transition-colors">
                    <Icon className="w-10 h-10 text-[#00AEEF]" />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-[2rem] md:text-[2.5rem] font-medium font-lora text-[#1A2B47] leading-[0.9] tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-[1.125rem] text-[#4D4D4D] font-barlow leading-relaxed max-w-lg">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
