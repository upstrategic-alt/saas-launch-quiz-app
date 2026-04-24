import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  { text: "Placeholder testimonial from agency owner.", author: "Agency Owner" },
  { text: "Placeholder testimonial from SaaS launch client.", author: "SaaS Founder" },
  { text: "Placeholder testimonial from funnel build client.", author: "Growth Marketer" }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-zinc-950 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16 tracking-tight">What Our Clients Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 flex flex-col justify-between">
              <div>
                <Quote className="w-8 h-8 text-zinc-700 mb-6" />
                <p className="text-zinc-300 italic mb-8 leading-relaxed">"{t.text}"</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800" />
                <div className="text-sm">
                  <div className="text-white font-bold">{t.author}</div>
                  <div className="text-zinc-500">Verified Client</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
