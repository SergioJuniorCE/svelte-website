export type BudgetItem = {
	id: number;
	created_at: string;
	budget: number;
	date: string;
	amount: number;
	description: string;
	user: string;
};

export type Budget = {
	id: number;
	user: string;
	created_at: string;
	period: string;
	date: string;
	items: BudgetItem[];
};
