import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vkiellyekgxbvykgskys.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZraWVsbHlla2d4YnZ5a2dza3lzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY5MzM0NjMsImV4cCI6MjAwMjUwOTQ2M30.plMcxLEuJWc0Yy4_rgGOcgebYQysbbKjzXAFQBtPNMk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
