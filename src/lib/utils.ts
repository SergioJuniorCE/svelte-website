import { supabase } from './database';
import type { Budget } from './types';

export function stripHTML(html: string): string {
	const tmp = document.createElement('div');
	tmp.innerHTML = html;
	return tmp.textContent || tmp.innerText || '';
}

export function formatMoney(amount: number): string {
	if (isNaN(amount)) {
		return '0.00';
	}
	return (Math.round(amount * 100) / 100).toFixed(2);
}

export async function getBudget(id: string): Promise<Budget[]> {
	// Getting all budgets from user from supabase
	const { data: budgets } = await supabase.from('budget').select('*').eq('user', id);

	// Adding items to budget
	budgets.forEach(async (budget) => {
		// Getting all items from supabase
		const { data: budgetItems } = await supabase
			.from('budgetItems')
			.select('amount,date,description')
			.eq('budget', budget.id);
		// Add item property to budget
		Object.defineProperty(budget, 'items', {
			value: budgetItems
		});
	});
	console.log(budgets);
	return budgets;
}
