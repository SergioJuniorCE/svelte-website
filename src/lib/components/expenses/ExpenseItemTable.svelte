<script lang="ts">
	import { session } from '$app/stores';
	import { supabase } from '$lib/database';
	import { needItems, savingItems, wantItems } from '$lib/stores';
	import { onMount } from 'svelte';

	export let category: string;
	let items = [];

	onMount(async () => {
		const { data: expenses } = await supabase
			.from('expenses')
			.select('*')
			.eq('user', $session.user.id);

		var id = expenses[0].id;
		const { data } = await supabase.from('expense_items').select('*').eq('expense', id);
		console.log('data', data);
		data.forEach((item) => {
			if (item.category === category) {
				items.push(item);
			}
		});
		if (category === 'need') {
			$needItems = items;
		}
		if (category === 'want') {
			$wantItems = items;
		}
		if (category === 'savings') {
			$savingItems = items;
		}
		console.log(items);
	});
</script>

{#if $needItems}
	<table class="table">
		<tbody>
			{#each $needItems as needItem}
				<tr>
					<td style="width: 10%">
						<button type="button" name="" id="" class="btn btn-primary">delete</button>
					</td>
					<td>{needItem.name}</td>
					<td>${needItem.price}</td>
					{#if needItem.link}
						<td><a href={needItem.link}>Link</a></td>
					{:else}
						<td />
					{/if}
				</tr>
			{/each}
		</tbody>
	</table>
{:else}
	<div class="spinner-border" role="status">
		<span class="visually-hidden">Loading...</span>
	</div>
{/if}
