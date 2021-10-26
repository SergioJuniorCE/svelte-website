<script>
	import { post, browserSet } from '$lib/req_utils';
	import { variables } from '$lib/variables';
	async function handleLogin() {
		const json = await post(fetch, `${variables.api}/token/`, {
			username: username,
			password: password
		});
		if (json.access) {
      console.log(`access: ${json.access}`)
			browserSet('jwt', json.access);
		}
	}

	let username = '';
	let password = '';
</script>

<input type="text" placeholder="username" bind:value={username} />
<input type="password" placeholder="password" bind:value={password} />
<div>
	<button on:click={handleLogin}>Login</button>
</div>
