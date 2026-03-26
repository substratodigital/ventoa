import React from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Guilherme Paolozzi",
      role: "CFO Netbr",
      photo: "/depoimentos/depoimento_guilherme.jpeg",
      quote: "Sempre demonstrou energia, interesse e comprometimento com o negócio e com os resultados...!"
    },
    {
      id: 2,
      name: "Anderson Chuiti",
      role: "Gerente Financeiro",
      photo: "/depoimentos/depoimento_anderson.jpeg",
      quote: "Ele possui fortes competências técnicas e uma excelente visão estratégica e de negócio."
    },
    {
      id: 3,
      name: "Alessandra Gonçalves",
      role: "Analista Financeira",
      photo: "/depoimentos/depoimento_alessandra.jpeg",
      quote: "Trocamos conhecimentos técnicos tanto na área financeira quanto administrativa..."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-[#1A2B47] overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col gap-10 items-center text-center">
        
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-[2.25rem] md:text-[3rem] font-bold font-heading text-white tracking-tighter leading-[0.9]">
            O que dizem nossos parceiros
          </h2>
          <p className="font-barlow text-white/80">Resultados reais de quem já transformou seu fluxo financeiro com nossa assessoria.</p>
        </div>

        <Carousel className="w-full max-w-2xl mt-4">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <Card className="bg-transparent border-none shadow-none">
                  <CardContent className="flex flex-col items-center justify-center p-4 gap-6">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-[#00AEEF] shadow-lg mb-2">
                      <Image 
                        src={testimonial.photo}
                        alt={`Foto de ${testimonial.name}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <Quote className="w-8 h-8 md:w-10 md:h-10 text-[#00AEEF] opacity-80" />
                    
                    <p className="text-[1.125rem] md:text-[1.5rem] font-barlow font-medium italic text-white/95 text-balance leading-relaxed">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    
                    <div className="flex flex-col items-center gap-1 mt-4">
                      <span className="text-[1.125rem] font-bold text-white font-heading">{testimonial.name}</span>
                      <span className="text-[0.75rem] font-bold text-[#00AEEF] uppercase tracking-widest">{testimonial.role}</span>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex justify-between w-full absolute top-[60%] -translate-y-1/2 -left-4 -right-4 px-[-2rem] pointer-events-none">
            <CarouselPrevious className="pointer-events-auto bg-white/10 border-white/20 text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white hover:border-[#00AEEF] transition-all" />
            <CarouselNext className="pointer-events-auto bg-white/10 border-white/20 text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white hover:border-[#00AEEF] transition-all" />
          </div>
        </Carousel>

      </div>
    </section>
  );
}
