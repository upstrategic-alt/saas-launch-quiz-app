import React from "react";
import { motion } from "framer-motion";
import { QuizStep as StepType } from "@/types/quiz";

interface Props {
  step: StepType;
  selectedId?: string;
  onSelect: (optionId: string) => void;
}

export default function QuizStep({ step, selectedId, onSelect }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="w-full"
    >
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
          {step.question}
        </h2>
        <p className="text-zinc-500 text-sm uppercase tracking-widest font-semibold">
          Step {step.id} of 5
        </p>
      </div>

      <div className="space-y-3">
        {step.options.map((option) => {
          const isSelected = selectedId === option.id;
          return (
            <button
              key={option.id}
              onClick={() => onSelect(option.id)}
              className={`w-full text-left p-5 md:p-6 rounded-2xl border transition-all duration-200 group relative overflow-hidden ${
                isSelected
                  ? "bg-white border-white text-black shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                  : "bg-zinc-900/50 border-zinc-800 text-zinc-300 hover:border-zinc-600 hover:bg-zinc-900"
              }`}
            >
              <div className="flex justify-between items-center relative z-10">
                <span className="text-base md:text-lg font-medium leading-snug pr-4">
                  {option.label}
                </span>
                <div className={`w-6 h-6 rounded-full border flex-shrink-0 flex items-center justify-center ${
                  isSelected ? "border-black bg-black" : "border-zinc-700"
                }`}>
                  {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
