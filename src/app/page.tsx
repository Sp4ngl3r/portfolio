import { FloatingNav } from "@/components/ui/floating-navbar";
import Hero from "../components/Hero";
import Grid from "@/components/Grid";
import Projects from "@/components/Projects";
import { navItems } from "@/data";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center px-5 mx-auto overflow-clip bg-black-100 sm:px-10">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        <Testimonials />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
