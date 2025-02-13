<svelte:options customElement="garnet-grid" /> 

<script>
  export let columns = 2;
  export let rows = 4;
  export let border = "1px solid #000000";
</script> 

<div
  style="
    grid-template-rows: repeat({rows}, 1fr); 
    grid-template-columns: repeat({columns}, auto);
    border: {border};
  "
>
  <slot />
</div>

<style>
  div {
    font-family: Arial, Helvetica, sans-serif;
    display: grid;
    grid-column-gap: 10px;
    grid-row-gap: 5px;
    grid-auto-flow: column;
    border: 1px solid #000000;
  }
</style>

