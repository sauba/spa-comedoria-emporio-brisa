import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <About />
      <Footer />
    </main>
  );
}
