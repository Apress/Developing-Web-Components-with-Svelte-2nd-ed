<script>
	/* Default theme props can be retrieved from store or provided on SSR/SSG generation.
		 To update :root CSS Vars dynamically you can use
		 document.documentElement.style.setProperty('--your-var', 'value');
	*/
	export let primary = '255, 0, 0';
	export let smallBorder = '2px';
</script>

<div style={
  `--theme-primary: ${primary};` + 
	`--theme-small-border: ${smallBorder};`
}>
	<slot/>
</div>

<style>
	:global(h1)	{
		color: rgb(var(--theme-primary));
		border: var(--theme-small-border) solid black;
	}
	:global(.bg-primary) {
		background-color: rgba(var(--theme-primary), .2);
	}
</style>