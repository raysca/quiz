<script>
	import Footer from '$lib/footer.svelte';
	import '../app.css';
</script>

<div class="navbar bg-neutral text-neutral-content">
	<button class="btn btn-ghost text-xl">PrepMe</button>
</div>

<div class="container mx-auto min-h-screen">
	<slot />
</div>

<Footer />