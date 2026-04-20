# Project Blueprint: The Personalized Health Protocol Quiz

## 1. Project Objective
**Goal:** Build a custom 8-step health quiz funnel that diagnoses a lead's learning and accountability style, captures their contact info, and automatically redirects them to the correct VSL (VIP Audit or Karnivore Unlocked) based on their answers.
**Tech Stack:** Next.js (App Router), Tailwind CSS, Supabase.

---

## 2. The Vision (UI Flow & Steps)

*What does the user see and interact with?*

* **Step 1:** Core Challenge
    * Option A: "Figuring out if I'm doing it right — I follow instructions perfectly but constantly wonder if my specific situation requires adjustments."
    * Option B: "Getting bored with rigid rules — I want to understand the principles so I can adapt them to different situations."

* **Step 2:** Ideal Learning Style
    * Option A: "Having an expert review my specific situation and tell me exactly what to do based on my unique circumstances."
    * Option B: "Getting the complete system with all the science so I can implement it independently."

* **Step 3:** Problem-Solving Style
    * Option A: "Have someone with expertise analyze what changed and adjust my plan accordingly."
    * Option B: "Understand the underlying mechanisms well enough to troubleshoot it myself."

* **Step 4:** Past Frustration
    * Option A: "They were too generic — I needed someone to look at my specific hormone patterns, work schedule, and stress levels."
    * Option B: "They didn't teach me WHY things work — I want to understand the science so I'm not dependent on rigid meal plans."

* **Step 5:** Chaos / Travel Test
    * Option A: "Want specific backup protocols designed for my exact travel patterns and work demands."
    * Option B: "Want to understand the principles well enough to adapt them to any situation myself."

* **Step 6:** Identity Statement
    * Option A: "I execute flawlessly when I have expert guidance, but I second-guess myself when left to figure things out alone."
    * Option B: "I'm great at implementation once I understand the complete system and the science behind it."

* **Step 7:** Expert Relationship Preference
    * Option A: "Ongoing access to ask questions about my specific situation and get personalized adjustments."
    * Option B: "Learning the complete operating system once, then being self-sufficient."

* **Step 8:** Investment Goal
    * Option A: "Personal analysis of my metabolic patterns and a custom roadmap designed for my specific life."
    * Option B: "The complete knowledge base so I understand how to optimize my switchboard under any circumstances."

* **Final Step (Capture):**
    * Inputs required: Name, Email
    * Button Action: "Submit My Answers" → Saves lead data to Supabase, runs the result logic, and redirects the user to the correct VSL page.

---

## 3. The Cortex (Logic & Math Rules)

*What logic is happening invisibly in the background?*

* **Tally Rule:** Every answer is worth 1 point. Each question contributes either +1 to `count_a` or +1 to `count_b`. There is no neutral — every question is binary (A or B only).

* **Result Logic:**
    * If `count_a >= 5` → Result = **"Expert-Guided"** → Redirect to **VIP Audit VSL**
    * If `count_b >= 5` (or `count_a < 5`) → Result = **"Independent Mastery"** → Redirect to **Karnivore Unlocked VSL**

* **Tie Handling:** In the event of a 4/4 split, default redirect goes to **Karnivore Unlocked VSL** (the lower-ticket, broader audience offer).

* **Personalization:** The result screen heading is dynamically personalized using the captured `name` field — e.g., *"Hi [Name] — You're the Expert-Guided Type."*

* **State Management:** The app must track all 8 answers client-side (React state or URL params) as the user progresses through steps — no page reloads. Final calculation happens at submit, not before.

* **Progress Bar:** Updates after each answered question. Calculated as `(current_step / 9) * 100` to fill gradually across all 8 questions plus the capture step.

---

## 4. The Memory (Database Schema)

*What exact data are we saving to Supabase when the user hits submit?*

* `id` — *Stores: Auto-generated unique record ID (UUID)*
* `created_at` — *Stores: Timestamp of submission*
* `lead_name` — *Stores: The lead's first name (from capture form)*
* `lead_email` — *Stores: The lead's email address (from capture form)*
* `answer_q1` — *Stores: The lead's answer to Question 1 (A or B)*
* `answer_q2` — *Stores: The lead's answer to Question 2 (A or B)*
* `answer_q3` — *Stores: The lead's answer to Question 3 (A or B)*
* `answer_q4` — *Stores: The lead's answer to Question 4 (A or B)*
* `answer_q5` — *Stores: The lead's answer to Question 5 (A or B)*
* `answer_q6` — *Stores: The lead's answer to Question 6 (A or B)*
* `answer_q7` — *Stores: The lead's answer to Question 7 (A or B)*
* `answer_q8` — *Stores: The lead's answer to Question 8 (A or B)*
* `count_a` — *Stores: Total number of A answers (0–8)*
* `count_b` — *Stores: Total number of B answers (0–8)*
* `result_type` — *Stores: Final result label — "Expert-Guided" or "Independent Mastery"*
* `redirect_url` — *Stores: The VSL URL the lead was sent to after submission*
