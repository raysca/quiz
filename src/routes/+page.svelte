<script>
	export let data;
	const { modules } = data;
</script>

<svelte:head>
	<title>PrepMe</title>
	<meta
		name="description"
		content="PrepMe is a multiple choice quiz project that helps to refresh your knowledge before technical interviews."
	/>
	<meta
		name="keywords"
		content="PrepMe, technical interview, technical multiple choice quiz, technical interview quiz"
	/>
</svelte:head>

<div class="hero min-h-1/2 bg-slate-300">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-3xl font-bold">Preparing for a technical interview?</h1>
			<p class="py-6">
				PrepMe is a multiple choice quiz project that helps to refresh your knowledge before your
				next technical interview.
			</p>
			<p class="py-6">PrepMe is open source and community driven.</p>
			<div class="flex space-x-2 justify-center">
				<a class="btn btn-primary btn-wide" href="#quizzes">Github</a>
			</div>
		</div>
	</div>
</div>

<div id="quizzes" class="flex flex-wrap justify-center">
	{#each modules as module}
		<a href={module.path} class="block card w-auto w-full md:w-72 bg-base-100 shadow m-4 cursor-pointer">
			<div class="card-body">
				<h2 class="card-title">{module.title}</h2>
				<div>
					<span>{module.topics?.length} Topics </span> |
					<span>{module.totalQuizzes} Questions</span>
				</div>
			</div>
		</a>
	{/each}
</div>
