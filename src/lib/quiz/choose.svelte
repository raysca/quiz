<script lang="ts">
	import type { QuizModule } from '$lib/quiz';
    import { createEventDispatcher } from 'svelte';

	export let quizDoc: QuizModule;
    
    const dispatcher = createEventDispatcher();
	const { topics = [], title, description } = quizDoc;
	const questionOptions = [10, 15, 20];

	const onSubmit = (event: Event) => {
		event.preventDefault();
		const form = new FormData(event.target as HTMLFormElement);
        const quizAmount = Number.parseInt(form.get('quizAmount') as string)
        dispatcher('start', {quizAmount})
	};
</script>

<p class="py-6">{description}</p>
<div class="card shrink-0 w-full max-w-sm mx-auto shadow-2xl">
	<div class="card-body">
		<h2 class="card-title">Covered Topics</h2>
		<form class="grid gap-4" on:submit={onSubmit}>
			
			<div class="form-control">
				<ul id="topics">
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
								<span class="label-text text-lg">{topic.title}</span>
							</label>
						</li>
					{/each}
				</ul>
			</div>

			<div class="form-control">
				<select class="select select-bordered" name="quizAmount">
					{#each questionOptions as option}
						<option value={option}>{option} Questions</option>
					{/each}
				</select>
			</div>

			<div class="form-control mt-6">
				<input type="submit" class="btn btn-primary" value="Begin" />
			</div>
		</form>
	</div>
</div>
