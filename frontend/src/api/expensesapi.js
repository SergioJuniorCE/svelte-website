import { variables } from "$lib/variables";

export const getExpenses = async () => {
  const res = await fetch(`${variables.API_URL}/expenses/`)
  const data = await res.json();
  return data;
};