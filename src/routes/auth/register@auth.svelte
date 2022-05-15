<script lang="ts">
import { goto } from '$app/navigation';

	import { supabase } from '$lib/database';
	import Swal from 'sweetalert2';
	let email: string;
	let password: string;
	let password2: string;

	async function handleSignUp() {
		console.log(email, password, password2);
		const { error } = await supabase.auth.signUp({ email, password });
		if (error) {
			Swal.fire({
				title: 'Error',
				text: error.message,
				icon: 'error',
			});
			return;
		}
		Swal.fire({
			title: 'Success',
			text: 'You have successfully signed up',
			icon: 'success',
		});
		goto('/');
	}
</script>

<div class="container">
	<form on:submit|preventDefault={handleSignUp}>
		<div class="mt-3">
			<label for="email">Enter your email</label>
			<input class="form-control" type="email" placeholder="Email" bind:value={email} />
		</div>
		<div class="mt-3">
			<label for="password">Type in your password</label>
			<input class="form-control" type="password" placeholder="Password" bind:value={password} />
		</div>
		<div class="mt-3">
			<label for="password2">Type in your password again</label>
			<input
				class="form-control"
				type="password"
				placeholder="Confirm your password"
				bind:value={password2}
			/>
		</div>
		<div class="mt-3">
			<button class="btn btn-success" type="submit">Sign Up</button>
		</div>
	</form>
</div>
