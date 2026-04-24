import { QuizStep } from "@/types/quiz";

export const quizSteps: QuizStep[] = [
  {
    id: 1,
    question: "What do you want to build or launch?",
    options: [
      { id: "funnel", label: "I need a high-converting funnel or landing page system to generate better leads.", value: 3000 },
      { id: "ghl_saas", label: "I want to launch a branded GoHighLevel white-label SaaS system for my agency.", value: 5000 },
      { id: "custom_app", label: "I need a custom client portal, dashboard, or internal web app for my business.", value: 10000 },
    ],
  },
  {
    id: 2,
    question: "What best describes your current setup?",
    options: [
      { id: "scratch", label: "We are starting completely from scratch.", value: 1000 },
      { id: "messy", label: "We already have some assets, but the setup is messy or incomplete.", value: 500 },
      { id: "ready", label: "We have the core assets ready and mainly need expert implementation.", value: 0 },
    ],
  },
  {
    id: 3,
    question: "How much support do you want from us?",
    options: [
      { id: "dfy", label: "Done-for-you: strategy, copy structure, funnel/app design, build, automation, and launch support.", value: 3000 },
      { id: "collaborative", label: "Collaborative: I will provide some copy/assets, and your team handles design, build, tech, and automation.", value: 1500 },
      { id: "implementation", label: "Implementation only: I already have the copy/design direction and need the technical build.", value: 0 },
    ],
  },
  {
    id: 4,
    question: "How soon do you want this launched?",
    options: [
      { id: "asap", label: "ASAP — I need this prioritized quickly.", value: 1.2 },
      { id: "30_60", label: "Within the next 30 to 60 days.", value: 1.0 },
      { id: "exploring", label: "I am exploring options for later this year.", value: 1.0 },
    ],
  },
  {
    id: 5,
    question: "How would you prefer to pay for your project?",
    options: [
      { id: "one_time", label: "One-time payment — I want to pay the full project amount upfront.", value: 1.0 },
      { id: "recurring", label: "Recurring plan — I prefer to pay monthly and get the current 50% discounted launch offer.", value: 0.5 },
    ],
  },
];
