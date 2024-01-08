<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Practice from '$components/practice.svelte';
	import ChooseQuiz from '$components/choose.svelte';
	export let data;

	const { quizzes, module } = data;

	let quizAmount: number = 10;
	let started = false;

	const onStartQuiz = (event: CustomEvent) => {
		const { detail } = event;
		quizAmount = detail.quizAmount;
		started = true;
	};
</script>

<svelte:head>
	<title>Revis3 - Test your {module.title} knowledge</title>
	<meta name="description" content={`Test your ${module.title} knowledge`} />
	<meta name="keywords" content={`${module.title} quiz, technical multiple choice quiz`} />
</svelte:head>

<div class="p-4">
	<h1 class="text-5xl font-bold text-center">{module.title}</h1>
	<div>
		{#if !started}
			<div transition:slide={{ delay: 150, duration: 300, easing: quintOut, axis: 'y' }}>
				<ChooseQuiz {module} on:start={onStartQuiz} />
			</div>
		{/if}
		{#if started}
			<div transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'y' }}>
				<Practice total={quizAmount} {quizzes} />
			</div>
		{/if}
	</div>
</div>
