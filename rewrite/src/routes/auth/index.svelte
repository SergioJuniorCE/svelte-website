<script lang="ts">
	import { supabase } from '$lib/database';

	let email: string;
	let password: string;

  let userInfo;
  let sessionInfo;

	async function handleSignUp() {
		const { user, session, error } = await supabase.auth.signUp({ email, password });
    userInfo = user;
    sessionInfo = session;
		if (error) {
			alert(error.message);
		}
	}
</script>

<!-- Login form -->

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
User info {userInfo}
Session info {sessionInfo}