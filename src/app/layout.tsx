import type { Metadata } from "next";
import { Barlow, Lora } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
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
      className={`${barlow.variable} ${lora.variable} antialiased`}
      style={{ fontSize: "18px" }}
    >
      <body className="min-h-screen flex flex-col font-barlow text-[1rem] leading-relaxed overflow-x-hidden">{children}</body>
    </html>

  );
}
