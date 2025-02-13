<svelte:options customElement="garnet-table" />

<script>
  import Grid from "./Grid.svelte";
  import Cell from "./Cell.svelte";

  export let columnCount = 4;
  export let rowCount = 4;
  export let itemCount = 0;
  export let border = "";
  export let displayImages = false;
  export let label = "Test Label";
  export let imageLabel = "untitled";
  export let displayImageLabels = false;
</script>   

<h1>{label}</h1>
<Grid columns={columnCount} rows={rowCount} {border}>
  {#each { length: itemCount } as _, i}
    <Cell 
      {displayImages} 
      imageLabel={imageLabel} 
      displayImageLabels={displayImageLabels}
    />
  {/each}
</Grid> 

<style>
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    border-bottom: 0.8px solid rgba(38, 85, 115, 0.15);
  }
</style>