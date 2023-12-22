<script lang="ts">
	import Practice from '$lib/quiz/practice.svelte';
	import ChooseQuiz from '$lib/quiz/choose.svelte';
	export let data;

	const totalQuizzes = data.module.quizzes.map((quizDoc) => quizDoc.quizzes).flat();

	let quizAmount: number = 10;
	let started = false;

	const onStartQuiz = (event: CustomEvent) => {
		const { detail } = event;
		quizAmount = detail.quizAmount;
		started = true;
	};
</script>

{#if !started}
	<ChooseQuiz quizDoc={data.module} on:start={onStartQuiz} />
{/if}

{#if started}
	<Practice total={quizAmount} quizzes={totalQuizzes} />
{/if}
