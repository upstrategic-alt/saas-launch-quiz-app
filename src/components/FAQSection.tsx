"use client";

import React from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Is this only for GoHighLevel users?",
    a: "No. We can build funnels, custom apps, and automation systems, but our strongest specialty is AI-powered GHL white-label SaaS setup."
  },
  {
    q: "Do you provide Facebook Ads?",
    a: "No. We focus on the launch system, funnel, automation, CRM, SaaS setup, and technical implementation. You can connect your own traffic source after launch."
  },
  {
    q: "How fast can this be launched?",
    a: "Most projects can be launched within 14 days when copy, assets, and approvals are provided on time."
  },
  {
    q: "What happens after I submit the quiz?",
    a: "You will see an estimated quote and can book a strategy call to review your launch plan."
  },
  {
    q: "Is the quote final?",
    a: "The quote is an estimate based on your answers. Final pricing depends on your exact scope, integrations, and timeline."
  }
];

export default function FAQSection() {
  return (
    <section className="py-24 px-6 bg-zinc-950">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16 tracking-tight">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-zinc-400 leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
