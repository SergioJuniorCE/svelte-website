<script lang="ts">
	import 'sweetalert2';

	import { supabase } from '$lib/database';
	import { session } from '$app/stores';
	import { browser } from '$app/env';

	import Navbar from '$lib/components/Navbar.svelte';

	if (browser) {
		$session = supabase.auth.session();
		supabase.auth.onAuthStateChange((event, ses) => {
			$session = ses;
		});
	}
</script>

<Navbar />
<main>
	<slot />
</main>

<style>
	@import 'bootswatch/dist/cyborg/bootstrap.min.css';
	@import 'sweetalert2/dist/sweetalert2.min.css';
</style>
