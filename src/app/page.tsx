import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contacts />
      <Footer />
    </main>
  );
}
