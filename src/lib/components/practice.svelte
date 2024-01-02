<script lang="ts">
	import { validateAnswer } from '$lib/answers';
	import Result from '$lib/components/result.svelte';
	import QuizContent from '$lib/components/quiz-content.svelte';
	import { shuffle } from '$lib/shuffle';

	export let total: number;
	export let quizzes: Quiz[];

	const newTotal = Math.min(total, quizzes.length);
	let selectedQuizzes = shuffle(quizzes).slice(0, newTotal);
	let currentQuizIndex = 0;
	let currentQuiz: Quiz = selectedQuizzes[currentQuizIndex];
	let answers: { quiz: Quiz; choices: string[]; correct: boolean }[] = [];
	let inputType = currentQuiz?.answers.length > 1 ? 'checkbox' : 'radio';

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

		event.preventDefault();
		currentQuizIndex++;
		currentQuiz = selectedQuizzes[currentQuizIndex];
		inputType = currentQuiz?.answers.length > 1 ? 'checkbox' : 'radio';
	};

	$: completed = currentQuizIndex === selectedQuizzes.length - 1;
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
	<div class="card shrink-0 w-full max-w-lg mx-auto shadow-2xl">
		<div class="card-body">
			<h2 class="card-title">{@html currentQuiz.title}</h2>
			<form on:submit={onChoiceSubmitted} class="flex flex-col space-y-4">
				<QuizContent content={currentQuiz.body} />
				<ul class="flex flex-col space-y-4">
					{#each shuffle(currentQuiz.options) as option, index (option)}
						<li>
							<label
								for={`${currentQuiz.id}-${index}`}
								class="label cursor-pointer justify-start space-x-4 border px-4"
							>
								<input
									id={`${currentQuiz.id}-${index}`}
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
				<input type="submit" value="Next" class="btn btn-primary btn-full" />
			</form>
		</div>
	</div>
{/if}
