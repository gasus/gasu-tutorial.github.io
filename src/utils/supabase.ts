import { createClient } from "@pankod/refine-supabase";

const SUPABASE_URL = "https://yuqpawvqaklfkpapqotv.supabase.co";
const SUPABASE_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1cXBhd3ZxYWtsZmtwYXBxb3R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY0MzM1MjcsImV4cCI6MTk3MjAwOTUyN30.XcHpufGdF1YzI9SEDXae2mGSMd7u97bCbU7jdI3qiHI";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);