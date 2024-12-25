import HomeProducts from "@/components/HomeProducts";
import IntroSection from "@/components/IntroSection";

export default function Home() {
  return (
    <main className="min-h-screen  flex-col flex items-center justify-between py-2">
      <section>
        <IntroSection/>
      </section>
      <section>
        <HomeProducts />
      </section>
    </main>
  );
}
