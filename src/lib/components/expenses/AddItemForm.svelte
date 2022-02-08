<script lang="ts">
	import { session } from '$app/stores';
	import { supabase } from '$lib/database';
import { needItems } from '$lib/stores';
	import { onMount } from 'svelte';
	import Swal from 'sweetalert2';

	let itemType = ['need', 'want', 'savings'];
	let name: string;
	let price: string;
	let link: string;
	let category: string;

	let expenseId: string;

	onMount(async () => {
		const { data, error } = await supabase
			.from('expenses')
			.select('*')
			.eq('user', $session.user.id);

		if (error) {
			Swal.fire({
				title: "Error: expense list doesn't exist",
				text: error.message,
				icon: 'error',
				confirmButtonText: 'OK'
			});
		}
		expenseId = data[0].id;
	});

	async function handleCreateItem() {
		const { data, error } = await supabase.from('expense_items').insert({
			name,
			price,
			link,
			expense: expenseId,
			category
		});
		if (error) {
			Swal.fire({
				title: 'Error',
				text: error.message,
				icon: 'error'
			});
			return;
		}
		$needItems.push({
			name,
			price,
			link,
			category
		});
		Swal.fire({
			title: 'Success',
			text: 'Item created',
			icon: 'success'
		});
		name = '';
		price = '';
		link = '';
	}
</script>

<div class="row">
	<div class="col-auto">
		<div class="mb-3">
			<label for="item-name" class="form-label">Item name</label>
			<input
				type="text"
				class="form-control"
				name="item-name"
				id="item-name"
				aria-describedby="item-name-help"
				placeholder="Name"
				bind:value={name}
			/>
			<small id="add-item-help" class="form-text text-muted">Name of the item to add</small>
		</div>
	</div>
	<div class="col-auto">
		<div class="mb-3">
			<label for="item-price" class="form-label">Item price</label>
			<input
				type="text"
				class="form-control"
				name="item-price"
				id="item-price"
				aria-describedby="item-price-help"
				placeholder="Price"
				bind:value={price}
			/>
			<small id="add-item-help" class="form-text text-muted">Price of the item to add</small>
		</div>
	</div>
	<div class="col-auto">
		<div class="mb-3">
			<label for="item-link" class="form-label">Item link</label>
			<input
				type="text"
				class="form-control"
				name="item-link"
				id="item-link"
				aria-describedby="item-link-help"
				placeholder="link"
				bind:value={link}
			/>
			<small id="add-item-help" class="form-text text-muted">link of the item to add</small>
		</div>
	</div>
	<div class="col-auto">
		<div class="mb-3">
			<label for="item-category" class="form-label">Item category</label>
			<select class="form-control" name="item-category" id="item-category" bind:value={category}>
				{#each itemType as item}
					<option>{item}</option>
				{/each}
			</select>
		</div>
	</div>
	<div class="col-auto">
		<div class="mt-4">
			<button type="button" class="btn btn-success" on:click={handleCreateItem}>Add</button>
		</div>
	</div>
</div>
