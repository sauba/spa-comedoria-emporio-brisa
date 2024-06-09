import About from "@/components/About";
import CardapioBebidasGeladas from "@/components/CardapioBebibasGeladas";
import CardapioBebidasQuentes from "@/components/CardapioBebidasQuentes";
import CardapioDoces from "@/components/CardapioDoces";
import CardapioPasteis from "@/components/CardapioPasteis";
import CardapioSalgados from "@/components/CardapioSalgados";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-own-yellow/50">
      <Header />
      <About />
      <CardapioSalgados />
      <CardapioDoces />
      <CardapioPasteis />
      <CardapioBebidasGeladas />
      <CardapioBebidasQuentes />
      <Footer />
    </main>
  );
}
