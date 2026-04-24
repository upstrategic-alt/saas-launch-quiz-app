import React from "react";
import { motion } from "framer-motion";
import { Loader2, ArrowRight } from "lucide-react";

interface Props {
  name: string;
  email: string;
  setName: (v: string) => void;
  setEmail: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
  error?: string | null;
}

export default function LeadCaptureForm({
  name,
  email,
  setName,
  setEmail,
  onSubmit,
  isSubmitting,
  error,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-3">One final step.</h2>
        <p className="text-zinc-500">Enter your details to generate your custom launch plan and estimated quote.</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2 ml-1">Full Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2 ml-1">Work Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@company.com"
            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
          />
        </div>

        {error && (
          <p className="text-red-400 text-sm text-center bg-red-400/10 border border-red-400/20 p-3 rounded-xl">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white text-black font-bold py-5 rounded-2xl flex items-center justify-center hover:bg-zinc-200 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            <>
              Get My Custom Launch Plan
              <ArrowRight className="ml-2 w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}
