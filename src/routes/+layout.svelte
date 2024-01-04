<script>
	import Footer from '$lib/components/footer.svelte';
	import { PUBLIC_BASE_PATH } from '$env/static/public';
	import '../app.css';
</script>

<svelte:head>
	<title>Revis3 - Test your technical knowledge</title>
	<meta
		name="description"
		content="Revis3 is a multiple choice quiz project that helps to test your knowledge before technical interviews."
	/>
	<meta
		name="keywords"
		content="Revis3, technical interview, technical multiple choice quiz"
	/>
</svelte:head>

<div class="navbar bg-neutral text-neutral-content">
	<a class="btn btn-ghost text-xl" href={PUBLIC_BASE_PATH}>Revis3</a>
</div>

<div class="min-h-screen">
	<slot />
</div>

<Footer />
