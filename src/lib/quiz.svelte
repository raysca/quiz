<script lang="ts">
	import { afterUpdate } from 'svelte';
	import { validateQuizAnswer, type Quiz } from './quiz';
	import Result from './result.svelte';
	import QuizContent from '$lib/quiz-content.svelte';

	export let total: number;
	export let quizzes: Quiz[];

	const randomSelectedQuizzes = (amount: number) => {
		const selectedQuizzes = [];
		for (let i = 0; i < amount; i++) {
			const randomIndex = Math.floor(Math.random() * quizzes.length);
			selectedQuizzes.push(quizzes[randomIndex]);
		}
		return selectedQuizzes;
	};

	let selectedQuizzes = randomSelectedQuizzes(total);
	let currentQuizIndex = 0;
	let currentQuiz: Quiz = selectedQuizzes[currentQuizIndex];
	let answers: { quiz: Quiz; choices: string[]; correct: boolean }[] = [];

	const onChoiceSubmitted = (event: Event) => {
		event.preventDefault();

		const form = new FormData(event.target as HTMLFormElement);
		const choices = Array.from(form.entries()).map((entry) => entry[1] as string);
		const correct = validateQuizAnswer(currentQuiz, choices);
		answers.push({
			quiz: currentQuiz,
			choices,
			correct
		});

		event.preventDefault();
		currentQuizIndex++;
		currentQuiz = quizzes[currentQuizIndex];
	};

	$: completed = currentQuizIndex === selectedQuizzes.length - 1;
	let inputType = currentQuiz?.answers.length > 1 ? 'checkbox' : 'radio';

</script>

{#if completed}
<Result {answers} total={selectedQuizzes.length} />
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

	<div class="quiz grid space-y-8">
		<h2 class="text-3xl font-semibold">{@html currentQuiz.title}</h2>
		<form on:submit={onChoiceSubmitted} class="flex flex-col space-y-4">
			<QuizContent content={currentQuiz.body} />
			<ul class="flex flex-col space-y-4">
				{#each currentQuiz.options as option, index (option)}
					<li>
						<label for={option} class="label cursor-pointer justify-start space-x-4 border px-4">
							<input
								id={option}
								type={inputType}
								name="answer"
								class={`${inputType} ${inputType}-accent`}
								value={option}
							/>
							<span>{@html option}</span>
						</label>
					</li>
				{/each}
			</ul>
			<input type="submit" value="Next" class="btn btn-primary btn-wide" />
		</form>
	</div>
{/if}
