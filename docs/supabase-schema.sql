-- Create the leads table based on the health-quiz-blueprint
CREATE TABLE public.quiz_leads (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    lead_name text NOT NULL,
    lead_email text NOT NULL,
    answer_q1 text NOT NULL,
    answer_q2 text NOT NULL,
    answer_q3 text NOT NULL,
    answer_q4 text NOT NULL,
    answer_q5 text NOT NULL,
    answer_q6 text NOT NULL,
    answer_q7 text NOT NULL,
    answer_q8 text NOT NULL,
    count_a integer NOT NULL,
    count_b integer NOT NULL,
    result_type text NOT NULL,
    redirect_url text NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.quiz_leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts (anyone can submit an answer)
CREATE POLICY "Allow public inserts" 
    ON public.quiz_leads
    FOR INSERT 
    TO public
    WITH CHECK (true);

-- Note: We are purposely NOT creating a SELECT policy.
-- Keeping SELECT restricted means public users cannot read any rows, ensuring lead data remains private.
