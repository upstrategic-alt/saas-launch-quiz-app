import { PricingResult } from "@/types/quiz";
export type { PricingResult };

export function calculateQuote({
  basePrice,
  auditFee,
  laborFee,
  rushMultiplier,
  paymentPreference,
}: {
  basePrice: number;
  auditFee: number;
  laborFee: number;
  rushMultiplier: number;
  paymentPreference: string;
}): PricingResult {
  const subtotal = basePrice + auditFee + laborFee;
  const standardQuote = subtotal * rushMultiplier;
  const discountAmount = paymentPreference === "recurring" ? standardQuote * 0.5 : 0;
  const finalQuote = standardQuote - discountAmount;

  return {
    basePrice,
    auditFee,
    laborFee,
    subtotal,
    rushMultiplier,
    standardQuote,
    discountAmount,
    finalQuote,
  };
}

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
};
