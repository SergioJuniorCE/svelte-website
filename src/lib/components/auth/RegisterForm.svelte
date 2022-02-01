<script lang="ts">
	import { supabase } from '$lib/database';

	let email: string;
	let password: string;

	async function handleSignUp() {
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
		<button class="btn btn-success" type="submit">Sign Up</button>
	</div>
</form>
