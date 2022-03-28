<script lang="ts">
import { goto } from '$app/navigation';

	import { supabase } from '$lib/database';

	let email: string;
	let password: string;

	async function handleSignIn() {
		const { error } = await supabase.auth.signIn({ email, password });
		if (error) alert(error.message);
		goto('/');
	}
</script>

<form on:submit|preventDefault={handleSignIn}>
	<div class="mt-3">
		<input class="form-control" type="email" placeholder="Email" bind:value={email} />
	</div>
	<div class="mt-3">
		<input class="form-control" type="password" placeholder="Password" bind:value={password} />
	</div>
	<div class="mt-3">
		<button class="btn btn-success" type="submit">Sign In</button>
	</div>
</form>
