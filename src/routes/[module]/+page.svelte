<script lang="ts">
	import Practice from '$lib/components/practice.svelte';
	import ChooseQuiz from '$lib/components/choose.svelte';
	export let data;

	const { quizzes, module, topics } = data;

	let quizAmount: number = 10;
	let started = false;

	const onStartQuiz = (event: CustomEvent) => {
		const { detail } = event;
		quizAmount = detail.quizAmount;
		started = true;
	};
</script>

<svelte:head>
	<title>Revis3 - {module.title}</title>
	<meta
		name="description"
		content={module.description}
	/>
	<meta
		name="keywords"
		content="${module.title}, technical interview, technical multiple choice quiz, technical interview quiz"
	/>
</svelte:head>

<div class="hero min-h-screen">
	<div class="hero-content flex-col">
		<h1 class="text-5xl font-bold">{module.title}</h1>
		<div>
			{#if !started}
				<ChooseQuiz module={module} on:start={onStartQuiz} />
			{/if}
			{#if started}
				<Practice total={quizAmount} quizzes={quizzes} />
			{/if}
		</div>
	</div>
</div>

