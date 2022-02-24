<script context="module">
	import { getBudget } from '$lib/utils';
	export async function load({ session }) {
		try {
			const budgets = await getBudget(session.user.id);
			return {
				props: {
					budgets
				}
			};
		} catch (error) {
			if (error instanceof TypeError) {
				return {
					props: {
						message: 'Retrieving user.',
						loading: true
					}
				};
			}
		}
	}
</script>

<script lang="ts">
	export let budgets: any;
	export let loading: boolean;
	export let message: string;
</script>

{#if loading}
	<h2>{message}</h2>
{:else if budgets}
	{#each budgets as budget}
		<pre>{JSON.stringify(budget, null, 2)}</pre>
		<p>{JSON.stringify(budget.items)}</p>
		<br />
	{/each}
{:else}
	<h2>No budgets found.</h2>
{/if}
