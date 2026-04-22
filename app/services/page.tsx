"use client";

import { useState, useRef } from "react";

export default function ServicesPage() {
  const [selectedPlan, setSelectedPlan] = useState<string>("Comprehensive Audit");
  const [formStatus, setFormStatus] = useState<string>("");
  const formRef = useRef<HTMLDivElement>(null);

  const programs = [
    {
      title: "Comprehensive Audit",
      description: "A deep dive into your current eating habits, metabolic rate, and lifestyle factors to establish your baseline.",
      features: ["60-minute video consultation", "Custom TDEE & Macro calculation", "Pantry audit guide"],
    },
    {
      title: "The 12-Week Transformation",
      description: "A structured, three-month program designed to safely rebuild your relationship with food and achieve sustainable targets.",
      features: ["Bi-weekly check-ins", "Custom weekly meal plans", "Direct messaging support", "Grocery shopping lists"],
    },
    {
      title: "Athletic Performance",
      description: "Specialized nutritional periodization for athletes looking to optimize recovery, endurance, and power output.",
      features: ["Pre/Post workout fueling strategy", "Supplementation review", "Race/Game day nutrition plan"],
    }
  ];

  const handleSelectPlan = (planTitle: string) => {
    setSelectedPlan(planTitle);
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("Sending...");
    
    const formData = new FormData(e.currentTarget);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      setFormStatus("Application received! We will be in touch within 24 hours.");
      (e.target as HTMLFormElement).reset();
    } else {
      setFormStatus("Something went wrong. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Clinical Coaching Programs</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We work with clients globally to build science-backed metabolic strategies. Review our core pathways below and submit an application to secure your spot.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Left Column: The Programs */}
          <div className="lg:col-span-3 space-y-6">
            {programs.map((program, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-shadow hover:shadow-md">
                <div className="md:flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{program.title}</h2>
                    <p className="text-gray-600 mt-2 pr-4">{program.description}</p>
                  </div>
                  <button 
                    onClick={() => handleSelectPlan(program.title)}
                    className="mt-4 md:mt-0 shrink-0 px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-lg transition-colors"
                  >
                    Apply Now
                  </button>
                </div>
                
                <ul className="grid sm:grid-cols-2 gap-2 mt-6 pt-6 border-t border-gray-50">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <svg className="h-4 w-4 text-emerald-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Column: The Application Form (Sticky) */}
          <div ref={formRef} className="lg:col-span-2 sticky top-24 bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Program Application</h3>
            <p className="text-sm text-gray-500 mb-6">Submit your details to request pricing and availability for your region.</p>
            
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY} />
              <input type="hidden" name="subject" value="New Coaching Application" />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Selected Pathway</label>
                <select 
                  name="Interested Plan" 
                  value={selectedPlan} 
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none bg-emerald-50 font-medium text-emerald-800"
                >
                  {programs.map((s, i) => <option key={i} value={s.title}>{s.title}</option>)}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" name="First Name" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" name="Last Name" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" name="email" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Country / Time Zone</label>
                <input type="text" name="Location" required placeholder="e.g., UK, London Time" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
              </div>
              
              <button type="submit" className="w-full px-8 py-4 mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow transition-colors">
                {formStatus === "Sending..." ? "Submitting..." : "Submit Application"}
              </button>
              
              {formStatus && formStatus !== "Sending..." && (
                <p className={`text-center text-sm font-medium mt-4 ${formStatus.includes("Application received") ? "text-emerald-600" : "text-red-500"}`}>
                  {formStatus}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}