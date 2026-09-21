import supabase from "./supabase"
export async function getCabins() {
    
const { data, error } = await supabase
  .from('cabins')
  .select('*')

  if(error) {
    console.error("Cabins could not load");
    throw new Error("Cabins could not load")
  }

  return data;
}