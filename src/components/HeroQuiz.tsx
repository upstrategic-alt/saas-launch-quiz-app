"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quizSteps } from "@/data/quiz";
import { calculateQuote } from "@/lib/pricing";
import { getSupabase } from "@/lib/supabase";
import QuizStep from "./QuizStep";
import LeadCaptureForm from "./LeadCaptureForm";
import QuoteSummary from "./QuoteSummary";

export default function HeroQuiz() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selections, setSelections] = useState<Record<number, string>>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [finalResults, setFinalResults] = useState<any>(null);

  const totalSteps = quizSteps.length;
  const isLastStep = currentStep === totalSteps;
  const showCapture = currentStep > totalSteps;

  const handleSelect = (optionId: string) => {
    setSelections((prev) => ({ ...prev, [currentStep]: optionId }));
    
    // Auto-advance with a slight delay
    setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // 1. Extract values for pricing
    const goalOption = quizSteps[0].options.find(o => o.id === selections[1]);
    const setupOption = quizSteps[1].options.find(o => o.id === selections[2]);
    const scopeOption = quizSteps[2].options.find(o => o.id === selections[3]);
    const urgencyOption = quizSteps[3].options.find(o => o.id === selections[4]);
    const paymentOption = quizSteps[4].options.find(o => o.id === selections[5]);

    if (!goalOption || !setupOption || !scopeOption || !urgencyOption || !paymentOption) {
      setError("Please complete all quiz steps.");
      setIsSubmitting(false);
      return;
    }

    // 2. Calculate final numbers
    const pricing = calculateQuote({
      basePrice: goalOption.value,
      auditFee: setupOption.value,
      laborFee: scopeOption.value,
      rushMultiplier: urgencyOption.value,
      paymentPreference: paymentOption.id
    });

    try {
      const supabase = getSupabase();
      
      const { error: dbError } = await supabase
        .from('lead_qualifier_submissions')
        .insert([{
          name,
          email,
          goal: goalOption.label,
          current_setup: setupOption.label,
          execution_scope: scopeOption.label,
          urgency: urgencyOption.label,
          payment_preference: paymentOption.id,
          base_price: goalOption.value,
          audit_fee: setupOption.value,
          labor_fee: scopeOption.value,
          rush_multiplier: urgencyOption.value,
          standard_quote: pricing.standardQuote,
          discount_amount: pricing.discountAmount,
          final_quote: pricing.finalQuote
        }]);

      if (dbError) throw dbError;

      setFinalResults(pricing);
      setIsComplete(true);
    } catch (err: any) {
      console.error("Submission error:", err);
      setError(err.message || "Something went wrong saving your quote. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {!isComplete ? (
          <div key="quiz-container">
            {currentStep <= totalSteps ? (
              <QuizStep
                key={`step-${currentStep}`}
                step={quizSteps[currentStep - 1]}
                selectedId={selections[currentStep]}
                onSelect={handleSelect}
              />
            ) : (
              <LeadCaptureForm
                name={name}
                email={email}
                setName={setName}
                setEmail={setEmail}
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                error={error}
              />
            )}
            
            {/* Progress Bar */}
            <div className="mt-12 flex justify-between items-center gap-4">
              <div className="flex-1 h-1 bg-zinc-900 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: `${(currentStep / (totalSteps + 1)) * 100}%` }}
                />
              </div>
              {currentStep > 1 && (
                <button 
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="text-zinc-500 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
                >
                  Back
                </button>
              )}
            </div>
          </div>
        ) : (
          <QuoteSummary 
            key="summary"
            results={finalResults} 
            paymentPreference={selections[5]} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
