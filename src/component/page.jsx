"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/data";

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
      >
        <h3 className="pr-4 text-lg font-semibold text-slate-900">
          {faq.question}
        </h3>

        <ChevronDown
          size={22}
          className={`text-blue-600 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="border-t border-slate-100 px-6 py-5 text-slate-600">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Everything You Need To Know
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Find answers to the most common questions about our spa
            services, appointments and wellness treatments.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}