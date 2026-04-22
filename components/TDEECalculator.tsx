"use client";

import { useState } from "react";

export default function TDEECalculator() {
  const [age, setAge] = useState<number>(30);
  const [gender, setGender] = useState<"male" | "female">("female");
  const [weight, setWeight] = useState<number>(65); // kg
  const [height, setHeight] = useState<number>(165); // cm
  const [activity, setActivity] = useState<number>(1.375);
  const [formStatus, setFormStatus] = useState<string>("");

  const calculateTDEE = () => {
    let bmr = 10 * weight + 6.25 * height - 5 * age;
    bmr += gender === "male" ? 5 : -161;
    return Math.round(bmr * activity);
  };

  const tdee = calculateTDEE();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("Sending...");
    
    const formData = new FormData(e.currentTarget);
    // Append the calculated results silently so the dietitian receives them!
    formData.append("Calculated Maintenance Calories", tdee.toString());
    formData.append("Weight Loss Target", (tdee - 500).toString());

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      setFormStatus("Success! We will be in touch soon.");
      (e.target as HTMLFormElement).reset();
    } else {
      setFormStatus("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Calculate Your Daily Caloric Needs</h2>
      
      {/* ... [Previous Input Fields remain unchanged here] ... */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-slate-900 mb-2">Age</label>
          <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-900 mb-2">Gender</label>
          <div className="flex space-x-4">
            <button onClick={() => setGender("male")} className={`flex-1 py-3 rounded-lg border ${gender === "male" ? "bg-emerald-500 text-white border-emerald-500" : "bg-gray-50 text-slate-800"}`}>Male</button>
            <button onClick={() => setGender("female")} className={`flex-1 py-3 rounded-lg border ${gender === "female" ? "bg-emerald-500 text-white border-emerald-500" : "bg-gray-50 text-slate-800"}`}>Female</button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-900 mb-2">Weight (kg)</label>
          <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900" />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-900 mb-2">Height (cm)</label>
          <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900" />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-slate-900 mb-2">Activity Level</label>
          <select value={activity} onChange={(e) => setActivity(Number(e.target.value))} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none bg-white text-slate-900">
            <option value={1.2}>Sedentary (Little to no exercise)</option>
            <option value={1.375}>Lightly Active (Light exercise 1-3 days/week)</option>
            <option value={1.55}>Moderately Active (Moderate exercise 3-5 days/week)</option>
            <option value={1.725}>Very Active (Hard exercise 6-7 days/week)</option>
            <option value={1.9}>Extra Active (Very hard exercise & physical job)</option>
          </select>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center mb-8">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">Your Maintenance Calories</h3>
        <p className="text-4xl font-extrabold text-emerald-600">{tdee} <span className="text-lg font-medium text-slate-600">kcal/day</span></p>
        
        <div className="flex justify-around mt-6 pt-6 border-t border-gray-200">
          <div>
            <p className="text-sm text-slate-600">Weight Loss</p>
            <p className="text-xl font-bold text-gray-800">{tdee - 500}</p>
          </div>
          <div>
            <p className="text-sm text-slate-600">Weight Gain</p>
            <p className="text-xl font-bold text-gray-800">{tdee + 500}</p>
          </div>
        </div>
      </div>

      {/* --- NEW WEB3FORMS SECTION --- */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Get Your Custom Meal Plan</h3>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY} />
          <input type="hidden" name="subject" value="New Dietitian Lead - Custom Meal Plan Request" />
          
          <input type="text" name="name" required placeholder="Your Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900" />
          <input type="email" name="email" required placeholder="Your Email Address" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900" />
          
          <button type="submit" className="w-full px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow transition-colors">
            {formStatus === "Sending..." ? "Sending Request..." : "Request Consultation"}
          </button>
          
          {formStatus && formStatus !== "Sending..." && (
            <p className={`text-center text-sm font-medium mt-2 ${formStatus.includes("Success") ? "text-emerald-600" : "text-red-500"}`}>
              {formStatus}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}