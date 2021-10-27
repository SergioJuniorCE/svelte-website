import { variables } from "$lib/variables";

// Gets expenses from the api
export const getExpenses = async () => {
  const res = await fetch(`${variables.API_URL}/expenses/`)
  const data = await res.json();
  return data;
};