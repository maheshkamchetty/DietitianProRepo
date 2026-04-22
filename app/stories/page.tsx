"use client";
import { useState } from "react";

export default function StoriesPage() {
  const [formStatus, setFormStatus] = useState("");
  
  // Example Curation - You will add more here manually as they come in!
  const testimonials = [
    { name: "Arjun M.", location: "Mumbai", text: "Lost 12kg in 4 months without ever feeling like I was on a diet. The TDEE calculations were spot on." },
    { name: "Sarah L.", location: "London", text: "Finally understood why my weight plateaued for years. The athletic performance plan changed my marathon recovery." }
  ];

  async function handleFeedbackSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("Sending...");
    const formData = new FormData(e.currentTarget);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    if (response.ok) {
      setFormStatus("Thank you! Your story has been sent for review.");
      (e.target as HTMLFormElement).reset();
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-16">Global Transformations</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 italic text-gray-700">
              <p className="mb-6 text-lg">"{t.text}"</p>
              <div className="not-italic">
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-sm text-emerald-600 font-medium">{t.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Feedback Capture Form */}
        <div className="max-w-2xl mx-auto bg-emerald-900 text-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Share Your Journey</h2>
          <p className="text-emerald-200 mb-8">Completed a program? We'd love to hear about your progress.</p>
          <form onSubmit={handleFeedbackSubmit} className="space-y-4">
            <input type="hidden" name="access_key" value="47b15f6b-74bc-4de9-98e4-e7a1f22f3550" />
            <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded-lg bg-emerald-800 border border-emerald-700 text-white placeholder-emerald-300 outline-none focus:ring-2 focus:ring-emerald-400" />
            <textarea name="feedback" rows={4} placeholder="What was your biggest win?" required className="w-full p-3 rounded-lg bg-emerald-800 border border-emerald-700 text-white placeholder-emerald-300 outline-none focus:ring-2 focus:ring-emerald-400" />
            <button type="submit" className="w-full py-4 bg-white text-emerald-900 font-bold rounded-lg hover:bg-emerald-50 transition-colors">
              {formStatus || "Submit Testimonial"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}