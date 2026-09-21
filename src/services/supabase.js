import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = "https://hqanwrcurcdqiudvecgz.supabase.co";
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxYW53cmN1cmNkcWl1ZHZlY2d6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk4MjEzMjYsImV4cCI6MjEwNTM5NzMyNn0.zb2-Cilon6mQPIKX9zjyNMTJmpF10USugHFNrKQej8E';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;