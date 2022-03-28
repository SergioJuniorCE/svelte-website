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