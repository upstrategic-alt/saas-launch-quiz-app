-- =============================================================
-- Migration: 001_create_lead_qualifier_submissions
-- Description: Creates the lead qualifier submissions table and
--              applies Row Level Security (RLS) policies.
--
-- RLS Rules:
--   ✅ Public INSERT  → anyone can submit the quiz form
--   🔒 Public SELECT  → blocked; only service_role can read leads
-- =============================================================


-- ── 1. Create the table ──────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.lead_qualifier_submissions (
  id                 UUID             PRIMARY KEY DEFAULT gen_random_uuid(),
  name               TEXT             NOT NULL,
  email              TEXT             NOT NULL,
  goal               TEXT             NOT NULL,
  current_setup      TEXT             NOT NULL,
  execution_scope    TEXT             NOT NULL,
  urgency            TEXT             NOT NULL,
  payment_preference TEXT             NOT NULL CHECK (payment_preference IN ('one_time', 'recurring')),
  base_price         NUMERIC(10, 2)   NOT NULL,
  audit_fee          NUMERIC(10, 2)   NOT NULL DEFAULT 0,
  labor_fee          NUMERIC(10, 2)   NOT NULL DEFAULT 0,
  rush_multiplier    NUMERIC(5, 2)    NOT NULL DEFAULT 1.0,
  standard_quote     NUMERIC(10, 2)   NOT NULL,
  discount_amount    NUMERIC(10, 2)   NOT NULL DEFAULT 0,
  final_quote        NUMERIC(10, 2)   NOT NULL,
  created_at         TIMESTAMPTZ      NOT NULL DEFAULT NOW()
);


-- ── 2. Enable Row Level Security ─────────────────────────────

ALTER TABLE public.lead_qualifier_submissions ENABLE ROW LEVEL SECURITY;


-- ── 3. RLS Policy: Allow public inserts ──────────────────────
-- Anyone (including unauthenticated visitors) can INSERT a row.
-- This is required so the quiz form can submit without login.

CREATE POLICY "allow_public_insert"
  ON public.lead_qualifier_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);


-- ── 4. RLS Policy: Block public reads ────────────────────────
-- No SELECT policy is granted to anon or authenticated roles.
-- Only the service_role (your server / Supabase dashboard) can
-- read lead data, keeping submissions private.
--
-- We explicitly deny reads with a restrictive policy so the
-- intent is clear and future role additions don't accidentally
-- open reads.

CREATE POLICY "block_public_select"
  ON public.lead_qualifier_submissions
  FOR SELECT
  TO anon, authenticated
  USING (false);


-- ── 5. Optional: Index on email for fast lookups ─────────────

CREATE INDEX IF NOT EXISTS idx_lead_qualifier_email
  ON public.lead_qualifier_submissions (email);

CREATE INDEX IF NOT EXISTS idx_lead_qualifier_created_at
  ON public.lead_qualifier_submissions (created_at DESC);
