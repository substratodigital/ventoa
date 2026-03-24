import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const loraSerif = Lora({
  variable: "--font-lora-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ventoa Financial | Terceirize suas rotinas financeiras",
  description: "Tenha tempo para gerar mais dinheiro, deixe sua empresa regularizada com a Ventoa Financial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${interSans.variable} ${loraSerif.variable} antialiased`}
      style={{ fontSize: "18px" }}
    >
      <body className="min-h-screen flex flex-col font-lora text-[1rem] leading-relaxed">{children}</body>
    </html>
  );
}
