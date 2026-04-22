import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="md:flex md:items-center md:space-x-12">
          
          {/* Placeholder for Dietitian Image */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="aspect-square bg-gray-100 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-400 overflow-hidden shadow-inner">
               <span className="text-sm">[Insert Professional Headshot Here]</span>
            </div>
          </div>

          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Hi, I'm Ramya, a Registered Dietitian.</h1>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I specialize in helping busy professionals rebuild their metabolic health without extreme restrictions or fad diets. 
              </p>
              <p>
                With a background in clinical nutrition and metabolic science, my approach focuses on data-driven caloric baselines, sustainable habit formation, and behavioral psychology.
              </p>
              <h3 className="text-xl font-bold text-gray-800 pt-4">Credentials</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Registered Dietitian Nutritionist (RDN)</li>
                <li>Master of Science in Clinical Nutrition</li>
                <li>Certified Board Specialist in Sports Dietetics (CSSD)</li>
              </ul>
            </div>
            
            <div className="mt-8">
              <Link href="/" className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow transition-colors inline-block">
                Start Your Assessment
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}