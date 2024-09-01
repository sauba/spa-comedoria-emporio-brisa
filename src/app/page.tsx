import About from "@/components/About";
import AcceptablePaymentMethods from "@/components/AcceptablePaymentMethods";
import CardapioBebidasGeladas from "@/components/CardapioBebibasGeladas";
import CardapioBebidasQuentes from "@/components/CardapioBebidasQuentes";
import CardapioCuscuz from "@/components/CardapioCuscuz";
import CardapioDoces from "@/components/CardapioDoces";
import CardapioEmpadao from "@/components/CardapioEmpadao";
import CardapioEmpadas from "@/components/CardapioEmpadas";
import CardapioLanches from "@/components/CardapioLanches";
import CardapioPasteis from "@/components/CardapioPasteis";
import CardapioSopas from "@/components/CardapioSopas";
import CardapioTapiocas from "@/components/CardapioTapiocas";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-own-yellow/50">
      <Header />
      <About />
      <CardapioEmpadas />
      <CardapioEmpadao />
      <CardapioSopas />
      <CardapioLanches />
      <CardapioCuscuz />
      <CardapioPasteis />
      <CardapioTapiocas />
      <CardapioDoces />
      <CardapioBebidasGeladas />
      <CardapioBebidasQuentes />
      <AcceptablePaymentMethods />
      <Footer />
    </main>
  );
}
