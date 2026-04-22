export default function MethodologyPage() {
    const pillars = [
      {
        title: "Data-Driven Baselines",
        desc: "We don't guess. We use your unique TDEE and metabolic markers to build a blueprint that respects your biology."
      },
      {
        title: "Nutritional Periodization",
        desc: "Your body isn't static. We adjust your intake based on your training load, hormonal cycles, and stress levels."
      },
      {
        title: "Habit Architecture",
        desc: "Sustainability is the goal. We focus on 'crowding out' bad habits with high-nutrient alternatives rather than restriction."
      }
    ];
  
    return (
      <main className="min-h-screen bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 text-center">The Science of Change</h1>
          <p className="text-xl text-gray-600 text-center mb-16 leading-relaxed">
            Our approach moves beyond 'calories in vs calories out' to address the complex hormonal and psychological drivers of health.
          </p>
  
          <div className="space-y-12">
            {pillars.map((pillar, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 items-center border-b border-gray-100 pb-12">
                <div className="text-5xl font-black text-emerald-100 md:w-1/4">0{i + 1}</div>
                <div className="md:w-3/4">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">{pillar.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }