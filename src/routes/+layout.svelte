<script>
	import Footer from '$lib/footer.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>PrepMe</title>
	<meta
		name="description"
		content="PrepMe is a multiple choice quiz project that helps to refresh your knowledge before technical interviews."
	/>
	<meta
		name="keywords"
		content="PrepMe, technical interview, technical multiple choice quiz, technical interview quiz"
	/>
</svelte:head>

<div class="navbar bg-neutral text-neutral-content">
	<button class="btn btn-ghost text-xl">PrepMe</button>
</div>

<div class="mx-auto min-h-screen">
	<slot />
</div>

<Footer />