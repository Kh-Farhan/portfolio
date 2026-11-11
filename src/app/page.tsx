import { CartProvider } from "@/components/CartProvider";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { Work } from "@/components/Work";
import { BugHunts } from "@/components/BugHunts";
import { PathAndStack } from "@/components/PathAndStack";
import { CartSection } from "@/components/CartSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <CartProvider>
      <div className="mx-auto flex max-w-[1240px] flex-col gap-4 px-4 pt-4 pb-16 sm:px-6 sm:pt-6">
        <Header />
        <main className="flex flex-col gap-4">
          <section id="top" aria-label="Introduction" className="grid grid-cols-12 gap-4">
            <Hero />
            <Highlights />
          </section>
          <Work />
          <BugHunts />
          <PathAndStack />
          <CartSection />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
