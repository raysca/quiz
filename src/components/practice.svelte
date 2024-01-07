<script lang="ts">
	import { validateAnswer } from '$lib/answers';
	import Result from '$components/result.svelte';
	import RenderQuiz from '$components/quiz.svelte';
	import type { Quiz } from '$lib/topic';
	import { shuffle } from '$lib/shuffle';

	export let total: number;
	export let quizzes: Quiz[];

	const newTotal = Math.min(total, quizzes.length);
	let selectedQuizzes = shuffle(quizzes).slice(0, newTotal);
	let currentQuizIndex = 0;
	let currentQuiz: Quiz = selectedQuizzes[currentQuizIndex];
	let answers: { quiz: Quiz; choices: string[]; correct: boolean }[] = [];

	const onChoiceSubmitted = (event: Event) => {
		event.preventDefault();

		const form = new FormData(event.target as HTMLFormElement);
		const choices = Array.from(form.entries()).map((entry) => entry[1] as string);
		const correct = validateAnswer(currentQuiz, choices);
		answers.push({
			quiz: currentQuiz,
			choices,
			correct
		});

		currentQuizIndex += 1;
		currentQuiz = selectedQuizzes[currentQuizIndex];
	};

	$: completed = currentQuizIndex === selectedQuizzes.length - 1;
</script>

{#if completed}
	<Result {answers} total={selectedQuizzes.length} showQuizzes />
{/if}

{#if !completed}
	<div class="w-full flex space-x-2 align-middle items-center mt-4 mb-4">
		<div>
			<span>{currentQuizIndex + 1}</span>/<span>{selectedQuizzes.length}</span>
		</div>
		<progress
			class="progress progress-accent"
			value={currentQuizIndex + 1}
			max={selectedQuizzes.length}
		></progress>
	</div>
	<form on:submit={onChoiceSubmitted} class="flex flex-col space-y-4">
		<RenderQuiz quiz={currentQuiz} showComment={false} />
		<input type="submit" value="Next" class="btn btn-accent rounded-none btn-full" />
	</form>
{/if}
