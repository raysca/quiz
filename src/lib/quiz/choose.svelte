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
        const topics = Array.from(form.getAll('topic')) as string[];

        dispatcher('start', {
            quizAmount,
            topics
        })
	};
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div class="text-center lg:text-left">
			<h1 class="text-5xl font-bold">{title}</h1>
			<p class="py-6">{description}</p>
		</div>
		<div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
			<div class="card-body">
				<form class="flex flex-col space-y-6" on:submit={onSubmit}>
					<div class="form-control">
						<label class="label" for="topics">
							<span class="label-text">Covered Topics</span>
						</label>
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
										<span class="label-text text-lg">{topic}</span>
									</label>
								</li>
							{/each}
						</ul>
					</div>

					<div class="form-control">
						<label class="label" for="quizAmount">
							<span class="label-text">Number of Questions</span>
						</label>
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
	</div>
</div>
