export interface QuizOption {
  id: string;
  label: string;
  value: number;
}

export interface QuizStep {
  id: number;
  question: string;
  options: QuizOption[];
  type?: 'one_time' | 'recurring';
}

export interface QuizState {
  currentStep: number;
  selections: Record<number, string>;
  name: string;
  email: string;
}

export interface PricingResult {
  basePrice: number;
  auditFee: number;
  laborFee: number;
  subtotal: number;
  rushMultiplier: number;
  standardQuote: number;
  discountAmount: number;
  finalQuote: number;
}
