"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do international consultations work?",
    answer: "All consultations are conducted via secure video calls (Zoom or Google Meet). Once your application is accepted, you will receive a booking link to choose a time that works for your time zone."
  },
  {
    question: "Do you support clients in different time zones?",
    answer: "Yes! We work with clients globally. Our scheduling system automatically detects your local time zone so there is no confusion on meeting times."
  },
  {
    question: "What payment methods do you accept?",
    answer: "For international clients, we use secure payment gateways like Stripe or PayPal, which accept all major credit cards. For clients in India, we support UPI and local bank transfers."
  },
  {
    question: "Is this a one-time meal plan or ongoing coaching?",
    answer: "We offer both. The Comprehensive Audit is a deep-dive strategy session, while the 12-Week Transformation is a high-touch coaching program with weekly adjustments and support."
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "We pride ourselves on clinical excellence. While we cannot refund time already spent in consultation, we offer a satisfaction guarantee on the initial strategy audit before the full coaching program begins."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600">
            Everything you need to know about our global nutritional coaching.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-emerald-600 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"}`}
              >
                <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-emerald-50 p-8 rounded-2xl border border-emerald-100">
          <h3 className="text-xl font-bold text-emerald-900 mb-2">Still have questions?</h3>
          <p className="text-emerald-700 mb-6">We're here to help you start your journey.</p>
          <a 
            href="/services" 
            className="inline-block px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </main>
  );
}