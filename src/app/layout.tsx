import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Toaster } from "sonner";

import { MouseGradient } from "@/components/ui/mouse-gradient";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "DP-Portfolio",
  description: "Freelancer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn(inter.variable, plusJakarta.variable, "font-sans antialiased bg-background text-foreground")}>
        <SmoothScroll>
          <MouseGradient />
          <div className="noise-overlay" />
          {children}
          <Toaster position="top-center" richColors theme="dark" />
          <ScrollProgress />
        </SmoothScroll>
      </body>
    </html>
  );
}
