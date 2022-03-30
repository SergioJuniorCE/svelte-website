<script lang="ts">
	import { goto } from '$app/navigation';

	import { session } from '$app/stores';

	import LoginForm from '$lib/components/auth/LoginForm.svelte';
	import RegisterForm from '../../lib/components/auth/RegisterForm.svelte';

	// if ($session) {
	// 	goto('/');
	// }
</script>

<p class="mt-3">Login</p>
<LoginForm />
<hr />
<div class="d-flex align-content-center">
	<p>New here? click this link <span><a href="auth/register">to register</a></span></p>
</div>