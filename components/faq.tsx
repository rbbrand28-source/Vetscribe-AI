"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is VetScribe AI?",
    a: "An AI assistant designed to automate veterinary documentation."
  },
  {
    q: "Is the platform HIPAA compliant?",
    a: "Yes. Security and compliance are core priorities."
  },
  {
    q: "Can multiple team members use it?",
    a: "Yes. VetScribe AI supports collaborative workflows."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpen(open === i ? null : i)
                }
                className="w-full flex items-center justify-between p-6"
              >
                <span>{faq.q}</span>
                <ChevronDown />
              </button>

              {open === i && (
                <div className="px-6 pb-6 text-white/70">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
