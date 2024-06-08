import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-own-yellow/50">
      <Header />
      <About />
      <Footer />
    </main>
  );
}
