<script lang="ts">
	import type { Quiz } from '$lib/topic';
	import hljs from 'highlight.js';
	import { afterUpdate } from 'svelte';

	export let quiz: Quiz;
	export let choices: string[] | undefined = undefined;
	export let showComment: boolean = false;

	const inputType = quiz?.isMultipleChoice ? 'checkbox' : 'radio';
	const inputRounded = quiz?.isMultipleChoice ? 'rounded-none' : '';

	const optionBadge = (option: string) => {
		let border = '';

		if (!choices) {
			return '';
		}

		if (choices?.includes(option)) {
			border =  '!border-error';
		}

		if (quiz.answers.includes(option)) {
			border = '!border-success';
		}

		return border;
	};

	afterUpdate(() => hljs.highlightAll());
</script>

<div class="w-auto mx-4">
	<p class="text-sm block badge badge-neutral">{@html quiz.topic?.title}</p>
	<h2 class="text-2xl font-semibold">{@html quiz.title}</h2>
	<p class="w-auto">
		{#each quiz.body as c}
			{@html c}
		{/each}
	</p>
	<p />
	<ul class="my-4 flex flex-col space-y-4">
		{#each quiz.options as option, index (option)}
			<li class="max-w-full">
				<label
					for={`${quiz.id}-${index}`}
					class={`label cursor-pointer justify-start space-x-4 border px-4 w-full ${optionBadge(option)}`}
				>
					{#if !choices}
						<input
							id={`${quiz.id}-${index}`}
							type={inputType}
							name="answer"
							class={`${inputType} ${inputType}-accent ${inputRounded}`}
							value={option}
						/>
					{/if}
					<span>{@html option}</span>
				</label>
			</li>
		{/each}
	</ul>
	<div class="flex items-center">
		<svg width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="edit-link-icon" aria-label="edit icon"><path d="M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z"></path><path d="M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z"></path></svg>
		<a href={`https://github.com/raysca/revis3/edit/main/quizzes/${quiz.topic?.path}`} class="btn btn-link" target="_blank">Fix this question</a>
	</div>

	{#if showComment && quiz.comment.length > 0}
		<div class="w-auto my-4">
			<h3 class="text-2xl">Explanation</h3>
			{#each quiz.comment as c}
				{@html c}
			{/each}
		</div>
	{/if}
</div>
