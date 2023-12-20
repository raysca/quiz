<script lang="ts">
	import Quiz from '$lib/quiz.svelte';
	export let data;

	let quizAmount: number = 10;
	let started = false;

	const {
		topics,
		category: { title, description, quizzes }
	} = data;

	const totalQuizzes = quizzes.map((quizDoc) => quizDoc.quizzes).flat();
</script>

<h1 class="text-4xl font-bold mt-4 mb-4">{title}</h1>
{#if !started}
	<div class="mt-4 mb-4 flex space-x-4">
		<span>{topics.length} Topics</span>
		<span>|</span>
		<span>{totalQuizzes.length} Questions</span>
	</div>

	<p class="text-lg mt-4 mb-4">{description}</p>

	<h2 class="text-xl mt-4 mb-4 font-semibold">Covered Topics</h2>

	<ul>
		{#each topics as topic}
			<li>
				<label for={topic} class="cursor-pointer label justify-start space-x-4">
					<input
						class="checkbox checkbox-primary"
						type="checkbox"
						name="topic"
						value={topic}
						id={topic}
						checked
						disabled
					/>
					<span class="label-text text-lg">{topic}</span>
				</label>
			</li>
		{/each}
	</ul>

	<div class="flex mt-4 mb-4 space-x-4">
		<select class="select select-bordered" bind:value={quizAmount}>
			<option value={10}>10 Questions</option>
			<option value={15}>15 Questions</option>
			<option value={20}>20 Questions</option>
		</select>
		<button type="button" class="btn btn-primary btn-wide" on:click={() => (started = true)}
			>Start Test</button
		>
	</div>
{/if}

{#if started}
	<Quiz total={quizAmount} quizzes={totalQuizzes} />
{/if}
