import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
          Take Control of Your <span className="text-emerald-600">Metabolic Health</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Stop guessing. Get a science-backed nutrition strategy tailored to your unique lifestyle, goals, and basal metabolic rate.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#calculator" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full shadow-md transition-all">
            Calculate My Macros
          </a>
          <Link href="/services" className="px-8 py-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-800 font-bold rounded-full transition-all">
            View Pricing
          </Link>
        </div>
      </div>
    </div>
  );
}