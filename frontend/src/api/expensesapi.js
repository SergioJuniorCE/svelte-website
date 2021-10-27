import { variables } from "$lib/variables";

// Gets expenses from the api
export const getExpenses = async () => {
  const res = await fetch(`${variables.API_URL}/expenses/`)
  const data = await res.json();
  return data;
};

export const createExpense = async (expense) => {
  const res = await fetch(`${variables.API_URL}/expenses/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(expense),
  });
  const data = await res.json();
  return data;
};