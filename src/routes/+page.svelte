
<script>
    export let data;
</script>

<h1>Prep</h1>
{#each data.categories as category}
<div>
    <h2>
       <a href={`/${category.name}`}>{category.name}</a>
    </h2>
    <p>{category.description}</p>
</div>
{/each}