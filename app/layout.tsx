import type { Metadata } from "next";
import { Figtree, JetBrains_Mono } from "next/font/google";
import { MotionProvider } from "@/components/motion";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Real Forte Consultoria",
  description:
    "Somos médicos de empresas. Consultoria empresarial em Vitória, ES, há 40 anos.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${figtree.variable} ${jetbrains.variable}`}>
      <body className="antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
