import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Calendar, ArrowUpRight } from "lucide-react";
import { PricingResult, formatCurrency } from "@/lib/pricing";

interface Props {
  results: PricingResult;
  paymentPreference: string;
}

export default function QuoteSummary({ results, paymentPreference }: Props) {
  const isRecurring = paymentPreference === "recurring";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full text-center"
    >
      <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-8 border border-zinc-800">
        <CheckCircle2 className="w-10 h-10 text-white" />
      </div>

      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Your Launch Plan is Ready.</h2>
      <p className="text-zinc-500 text-lg mb-10">Based on your requirements, your estimated launch plan starts at:</p>

      <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12 mb-10 relative overflow-hidden">
        {isRecurring && (
          <div className="absolute top-4 right-4 bg-white text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            50% Launch Discount
          </div>
        )}
        
        <div className="flex flex-col items-center">
          <span className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-2">
            {formatCurrency(results.finalQuote)}
          </span>
          <span className="text-zinc-500 text-sm font-bold uppercase tracking-widest">
            Estimated Project Value
          </span>
        </div>

        {isRecurring && (
          <div className="mt-8 pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-center gap-8">
            <div className="text-center">
              <div className="text-zinc-500 text-xs uppercase font-bold mb-1">Standard Quote</div>
              <div className="text-zinc-400 line-through text-xl font-medium">{formatCurrency(results.standardQuote)}</div>
            </div>
            <div className="text-center">
              <div className="text-zinc-500 text-xs uppercase font-bold mb-1">You Save</div>
              <div className="text-white text-xl font-bold">{formatCurrency(results.discountAmount)}</div>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <a
          href="https://calendly.com/your-link" // User should update this
          target="_blank"
          className="bg-white text-black font-bold px-8 py-5 rounded-2xl flex items-center justify-center hover:bg-zinc-200 transition-all group"
        >
          Book a Strategy Call
          <Calendar className="ml-2 w-5 h-5" />
        </a>
        <button
          onClick={() => window.location.reload()}
          className="bg-zinc-900 text-white border border-zinc-800 font-bold px-8 py-5 rounded-2xl hover:bg-zinc-800 transition-all"
        >
          Re-calculate
        </button>
      </div>

      <p className="mt-8 text-zinc-600 text-xs max-w-sm mx-auto">
        *This is an estimate based on your answers. Final pricing depends on your exact scope, integrations, and timeline.
      </p>
    </motion.div>
  );
}
