import Hero from "../components/Hero";
import TDEECalculator from "../components/TDEECalculator";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Hero />
      
      {/* The ID here connects to the Hero's anchor link */}
      <div id="calculator" className="py-16 px-4">
        <TDEECalculator />
      </div>
    </main>
  );
}