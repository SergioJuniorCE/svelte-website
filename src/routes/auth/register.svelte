<script lang="ts">
	import { supabase } from '$lib/database';
	import Swal from 'sweetalert2';
	let email: string;
	let password: string;
	let password2: string;

	async function handleSignUp() {
    
		if (password != password2) {
			Swal.fire({
				title: 'Error!',
				text: 'Passwords didnt match!',
				icon: 'error',
				confirmButtonText: 'Cool'
			});
			return;
		}
		if (password.length < 8) {
			alert('Password must be at least 8 characters');
			return;
		}
		const { error } = await supabase.auth.signUp({ email, password });
		if (error) {
			alert(error.message);
		}
	}
</script>

<form on:submit|preventDefault={handleSignUp}>
	<div class="mt-3">
		<input class="form-control" type="email" placeholder="Email" bind:value={email} />
	</div>
	<div class="mt-3">
		<input class="form-control" type="password" placeholder="Password" bind:value={password} />
	</div>
	<div class="mt-3">
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
