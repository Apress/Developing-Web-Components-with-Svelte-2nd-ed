<svelte:options customElement="garnet-accordion" />

<script>
	import AccordionItem from "./AccordionItem.svelte";
	export let data = [];
</script>

<div class="garnet-accordion">
	{#each data as entry}
		<AccordionItem title={entry.title}>
			<p>{entry.text}</p>
		</AccordionItem>
	{/each}
</div>

<style>
	.garnet-accordion {
		display: flex;
		flex-direction: column;
		width: 450px;
	}
</style>
