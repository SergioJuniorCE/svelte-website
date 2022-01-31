<script lang="ts">
	import '../../static/bootstrap.min.css';
	import 'sweetalert2/src/sweetalert2.scss';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />
<main class="container">
	<slot />
</main>
