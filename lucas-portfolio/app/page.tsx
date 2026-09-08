import { Header } from "@/app/components/header";
import { Hero } from "@/app/components/hero";
import { About } from "@/app/components/about";
import { Stack } from "@/app/components/stack";
import { Projects } from "@/app/components/projects";
import { Contact } from "@/app/components/contact";
import { Footer } from "@/app/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="relative">
          {/* separador sutil entre hero y contenido */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <About />
          <Stack />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
