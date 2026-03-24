import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Guilherme Paolozzi",
      role: "CFO Netbr",
      quote: "Trabalhei por 2 anos com o Otavio e ele sempre demonstrou energia, interesse e comprometimento com o negócio."
    },
    {
      id: 2,
      name: "Anderson Chuiti",
      role: "Gerente Financeiro",
      quote: "Ele possui fortes competências técnicas e uma excelente visão estratégica e de negócio."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-[#1A2B47]">
      <div className="max-w-4xl mx-auto flex flex-col gap-10 items-center text-center">
        
        <h2 className="text-[2.25rem] md:text-[3rem] font-bold font-heading text-white tracking-tighter">
          O que dizem nossos parceiros
        </h2>

        <Carousel className="w-full max-w-2xl mt-4">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <Card className="bg-transparent border-none shadow-none">
                  <CardContent className="flex flex-col items-center justify-center p-4 gap-6">
                    <Quote className="w-10 h-10 text-[#00AEEF] opacity-70" />
                    <p className="text-[1.25rem] md:text-[1.5rem] font-lora font-medium italic text-white/95 text-balance leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex flex-col items-center gap-1 mt-2">
                      <span className="text-[1.125rem] font-bold text-white font-heading">{testimonial.name}</span>
                      <span className="text-[0.75rem] font-bold text-[#00AEEF] uppercase tracking-widest">{testimonial.role}</span>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex justify-between w-full absolute top-1/2 -translate-y-1/2 -left-4 -right-4 px-[-2rem] pointer-events-none">
            <CarouselPrevious className="pointer-events-auto bg-[#1A2B47] text-[#00AEEF] border-none hover:bg-[#00AEEF] hover:text-white" />
            <CarouselNext className="pointer-events-auto bg-[#1A2B47] text-[#00AEEF] border-none hover:bg-[#00AEEF] hover:text-white" />
          </div>
        </Carousel>

      </div>
    </section>
  );
}
