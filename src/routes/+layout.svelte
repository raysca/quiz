<script>
	import Footer from '$lib/components/footer.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>Revis3</title>
	<meta
		name="description"
		content="Revis3 is a multiple choice quiz project that helps to refresh your knowledge before technical interviews."
	/>
	<meta
		name="keywords"
		content="Revis3, technical interview, technical multiple choice quiz, technical interview quiz"
	/>
</svelte:head>

<div class="navbar bg-neutral text-neutral-content">
	<a class="btn btn-ghost text-xl" href="/">Revis3</a>
</div>

<div class="mx-auto min-h-screen container max-w-2xl">
	<slot />
</div>

<Footer />
