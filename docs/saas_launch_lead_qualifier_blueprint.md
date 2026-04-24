# Project Blueprint: The AI SaaS Launch Qualifier

## 1. Project Objective

**Goal:** Build a custom 5-step diagnostic quote app that qualifies agency owners and SaaS prospects, dynamically calculates a custom project quote based on their business goal, current setup, execution scope, urgency, and payment preference.

**Tech Stack:** Next.js App Router, Tailwind CSS, Supabase, Cloudflare.

The app should feel premium, simple, fast, and conversion-focused. It should not look like a basic form. It should feel like an interactive strategy quiz that helps the prospect understand what kind of AI-powered GHL white-label SaaS launch support they need.

---

## 2. The View/Vision: UI Flow & Steps

### What does the user see and interact with?

A multi-step progressive wizard embedded in the hero section of a landing page. The user must be able to click through the steps without the page reloading.

The hero section contains:

- A clean navbar with logo
- A premium headline
- A short subheadline
- The interactive quote/diagnostic app

### App Contents

---

## Step 1: Core Business Goal

**Purpose:** Sets the base price.

**Question:** What do you want to build or launch?

**Option A:** “I need a high-converting funnel or landing page system to generate better leads.”  
**Base Price:** $3,000

**Option B:** “I want to launch a branded GoHighLevel white-label SaaS system for my agency.”  
**Base Price:** $5,000

**Option C:** “I need a custom client portal, dashboard, or internal web app for my business.”  
**Base Price:** $10,000

---

## Step 2: Current Setup

**Purpose:** Adds an audit/setup complexity fee.

**Question:** What best describes your current setup?

**Option A:** “We are starting completely from scratch.”  
**Audit Fee:** +$1,000

**Option B:** “We already have some assets, but the setup is messy or incomplete.”  
**Audit Fee:** +$500

**Option C:** “We have the core assets ready and mainly need expert implementation.”  
**Audit Fee:** +$0

---

## Step 3: Execution Scope

**Purpose:** Adds a labor/fulfillment fee.

**Question:** How much support do you want from us?

**Option A:** “Done-for-you: strategy, copy structure, funnel/app design, build, automation, and launch support.”  
**Labor Fee:** +$3,000

**Option B:** “Collaborative: I will provide some copy/assets, and your team handles design, build, tech, and automation.”  
**Labor Fee:** +$1,500

**Option C:** “Implementation only: I already have the copy/design direction and need the technical build.”  
**Labor Fee:** +$0

---

## Step 4: Urgency

**Purpose:** Adds a rush multiplier.

**Question:** How soon do you want this launched?

**Option A:** “ASAP — I need this prioritized quickly.”  
**Rush Multiplier:** 1.2

**Option B:** “Within the next 30 to 60 days.”  
**Rush Multiplier:** 1.0

**Option C:** “I am exploring options for later this year.”  
**Rush Multiplier:** 1.0

---

## Step 5: Payment Preference

**Purpose:** Applies payment logic after the project quote is calculated.

**Question:** How would you prefer to pay for your project?

**Option A:** “One-time payment — I want to pay the full project amount upfront.”  
**Payment Type:** one_time  
**Payment Modifier:** No discount  
**Final Payable Amount:** Full calculated quote

**Option B:** “Recurring plan — I prefer to pay monthly and get the current 50% discounted launch offer.”  
**Payment Type:** recurring  
**Payment Modifier:** 50% discount  
**Final Payable Amount:** Calculated quote × 0.5

**Important:** The recurring payment option should clearly show that this is a discounted launch offer. Do not make it feel cheap. Position it as a special founder-style launch incentive.

---

## Final Step: Lead Capture & Quote Reveal

**Inputs Required:**

- Name
- Email

**Button Action:** “Get My Custom Launch Plan”

When the user clicks the button:

1. Submit all selected data to Supabase.
2. Hide the form.
3. Reveal the final calculated quote on screen.
4. Show a strong CTA to book a call.

**Final Quote Reveal Text Example:**

“Based on your answers, your estimated launch plan starts at: **$X**.”

If recurring payment is selected:

“Your standard project value is **$X**, but with the recurring launch plan, your discounted starting amount is **$Y**.”

**CTA Button:** “Book a Strategy Call”

---

## 3. Page Sections Below the Hero

After the hero quiz/app, the landing page should include the following sections.

### Services Section

Do not include Facebook Ads or paid ads management. The services should match our actual offer.

Include services such as:

- AI-powered GoHighLevel white-label SaaS setup
- Custom landing pages and sales funnels
- High-converting lead capture systems
- CRM pipeline setup
- SaaS mode configuration
- Stripe, Twilio, SMTP, domain, and calendar integrations
- Conversational AI and Voice AI workflow setup
- Client onboarding automation
- Booking, nurture, support, and retention workflows
- Custom dashboards, portals, and web apps
- Funnel copy structure and conversion strategy
- Technical setup, QA, and launch support
- 30-day post-launch support
- SOPs and fulfillment structure for client delivery

### Testimonials Section

Use a placeholder testimonial section for now. Do not use fake personal names unless placeholders are clearly marked.

Example placeholder format:

- “Placeholder testimonial from agency owner.”
- “Placeholder testimonial from SaaS launch client.”
- “Placeholder testimonial from funnel build client.”

### FAQ Section

Add FAQ questions and answers.

Suggested FAQs:

**Q: Is this only for GoHighLevel users?**  
A: No. We can build funnels, custom apps, and automation systems, but our strongest specialty is AI-powered GHL white-label SaaS setup.

**Q: Do you provide Facebook Ads?**  
A: No. We focus on the launch system, funnel, automation, CRM, SaaS setup, and technical implementation. You can connect your own traffic source after launch.

**Q: How fast can this be launched?**  
A: Most projects can be launched within 14 days when copy, assets, and approvals are provided on time.

**Q: What happens after I submit the quiz?**  
A: You will see an estimated quote and can book a strategy call to review your launch plan.

**Q: Is the quote final?**  
A: The quote is an estimate based on your answers. Final pricing depends on your exact scope, integrations, and timeline.

### Footer

The footer should include:

- Logo
- Short brand statement
- Navigation links
- Legal links
- Copyright text

---

## 4. Controller/Context: Logic & Math Rules

The application must manage state for all user selections and calculate the total price in real time.

**Important:** Do not hardcode final prices into the UI. The quote must be calculated based on selected options.

### Base Price

Determined by Step 1:

- Step 1 Option A = $3,000
- Step 1 Option B = $5,000
- Step 1 Option C = $10,000

### Audit Fee

Determined by Step 2:

- Step 2 Option A = +$1,000
- Step 2 Option B = +$500
- Step 2 Option C = +$0

### Labor Fee

Determined by Step 3:

- Step 3 Option A = +$3,000
- Step 3 Option B = +$1,500
- Step 3 Option C = +$0

### Subtotal Calculation

```js
subtotal = basePrice + auditFee + laborFee;
```

### Rush Fee Multiplier

Determined by Step 4:

- Step 4 Option A = 1.2
- Step 4 Option B = 1.0
- Step 4 Option C = 1.0

### Standard Quote Calculation

```js
standardQuote = subtotal * rushMultiplier;
```

### Payment Preference Modifier

Determined by Step 5:

- Step 5 Option A: One-time payment = 1.0
- Step 5 Option B: Recurring payment discount = 0.5

### Final Payable Quote Calculation

```js
if (paymentPreference === "recurring") {
  finalQuote = standardQuote * 0.5;
} else {
  finalQuote = standardQuote;
}
```

### Display Rules

If one-time payment is selected:

```js
show standardQuote as finalQuote;
show message: "One-time payment selected. Full project amount applies.";
```

If recurring payment is selected:

```js
show standardQuote;
show finalQuote;
show savingsAmount = standardQuote - finalQuote;
show message: "Recurring launch plan selected. Your current discounted launch amount is 50% off the standard quote.";
```

### Formatting

All quote values must be displayed as USD currency.

Example:

```js
new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
}).format(finalQuote);
```

---

## 5. Model/Memory: Supabase Database Schema

When the user clicks “Get My Custom Launch Plan”, send exactly this data to the Supabase database.

### Table Name

`lead_qualifier_submissions`

### Fields

```txt
id - uuid, primary key, auto generated
name - text, stores user's name
email - text, stores user's email
goal - text, stores the path selected in Step 1
current_setup - text, stores the reality selected in Step 2
execution_scope - text, stores the labor/support selected in Step 3
urgency - text, stores the timeline selected in Step 4
payment_preference - text, stores one_time or recurring
base_price - numeric, stores base price from Step 1
audit_fee - numeric, stores audit fee from Step 2
labor_fee - numeric, stores labor fee from Step 3
rush_multiplier - numeric, stores rush multiplier from Step 4
standard_quote - numeric, stores calculated quote before payment discount
discount_amount - numeric, stores discount amount if recurring is selected
final_quote - numeric, stores final mathematically calculated quote
created_at - timestamp with time zone, default now()
```

### Supabase Insert Payload Example

```js
const payload = {
  name,
  email,
  goal: selectedGoal.label,
  current_setup: selectedSetup.label,
  execution_scope: selectedScope.label,
  urgency: selectedUrgency.label,
  payment_preference: selectedPayment.type,
  base_price: basePrice,
  audit_fee: auditFee,
  labor_fee: laborFee,
  rush_multiplier: rushMultiplier,
  standard_quote: standardQuote,
  discount_amount: discountAmount,
  final_quote: finalQuote,
};
```

---

## 6. UI/UX Requirements

The design should feel premium, modern, and trust-building.

### Visual Style

- Clean SaaS-style interface
- Dark or premium neutral background
- Strong contrast
- Modern cards
- Rounded corners
- Smooth transitions between steps
- Clear progress indicator
- Large readable typography
- Mobile responsive layout
- Premium CTA buttons

### Quiz Behavior

- User can only move to the next step after selecting an option.
- Show selected option clearly.
- Allow user to go back and change previous answers.
- Recalculate quote instantly when answers change.
- Do not reload the page between steps.
- Keep all state in React state/context.

### Quote Reveal Behavior

After submitting name and email:

- Hide the form or collapse the quiz
- Show final quote result
- Show selected summary
- Show CTA to book a call

---

## 7. Suggested Component Structure

Use a clean component structure like this:

```txt
/app
  /page.tsx
/components
  /HeroQuiz.tsx
  /QuizStep.tsx
  /QuoteSummary.tsx
  /LeadCaptureForm.tsx
  /ServicesSection.tsx
  /TestimonialsSection.tsx
  /FAQSection.tsx
  /Footer.tsx
/lib
  /pricing.ts
  /supabaseClient.ts
/types
  /quiz.ts
```

---

## 8. Pricing Logic File Example

Create a separate pricing utility file so the logic stays clean.

```js
export function calculateQuote({ basePrice, auditFee, laborFee, rushMultiplier, paymentPreference }) {
  const subtotal = basePrice + auditFee + laborFee;
  const standardQuote = subtotal * rushMultiplier;
  const discountAmount = paymentPreference === "recurring" ? standardQuote * 0.5 : 0;
  const finalQuote = standardQuote - discountAmount;

  return {
    subtotal,
    standardQuote,
    discountAmount,
    finalQuote,
  };
}
```

---

## 9. Final Build Instruction

Build this as a working Next.js app with Tailwind CSS and Supabase integration.

The final app should:

- Show a premium landing page
- Include the 5-step quote wizard
- Calculate pricing dynamically
- Apply the recurring payment 50% discount logic correctly
- Capture name and email
- Save all selected answers and quote values to Supabase
- Reveal the quote after submission
- Include services, testimonial placeholders, FAQ, and footer sections
- Be responsive for desktop and mobile

