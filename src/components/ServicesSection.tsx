import React from "react";
import { Check } from "lucide-react";

const services = [
  "AI-powered GHL white-label SaaS setup",
  "Custom landing pages and sales funnels",
  "High-converting lead capture systems",
  "CRM pipeline setup",
  "SaaS mode configuration",
  "Stripe, Twilio, SMTP, domain, and calendar integrations",
  "Conversational AI and Voice AI workflow setup",
  "Client onboarding automation",
  "Booking, nurture, support, and retention workflows",
  "Custom dashboards, portals, and web apps",
  "Funnel copy structure and conversion strategy",
  "Technical setup, QA, and launch support",
  "30-day post-launch support",
  "SOPs and fulfillment structure for client delivery"
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Our Core Offerings</h2>
          <p className="text-zinc-500 text-lg">Everything you need to build, launch, and scale your AI-powered system.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
              <div className="mt-1 bg-zinc-800 p-1 rounded-full">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-zinc-300 text-sm font-medium">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
