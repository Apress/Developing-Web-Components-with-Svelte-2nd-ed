<svelte:options customElement="garnet-selectbox" />

<script>
  import { createEventDispatcher } from 'svelte';

  export let selectOptions = [];
  export let displayText = (a) => a.value;
  export let index = 1;
  export let disabled = false;
  export let selected = {};
  export let label = "Test dropdown:"

  const dispatch = createEventDispatcher()

  $: selected = selectOptions.find((o) => o.id === index);
  
  function handleChange() {
    dispatch('change', { text: selected });
  }
</script>

<div class="garnet">
  <label for="garnet-selectbox">{label}</label>
  <select bind:value={index} on:change={handleChange} name="garnet-selectbox">
    {#each selectOptions as option, i}
      <option value={i + 1} {disabled}>
        {displayText(option)}
      </option>
    {/each}
  </select>
</div>

<style>
  .garnet {
    display: flex;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
  }

  label {
    padding-right: 10px;
  }

  select {
    padding: 5px 100px 5px 5px; 
    font-size: 16px;
    border: 1px solid #733635;
    height: 34px;
    border-radius: 10px;
  }
  
  option:disabled {
    cursor: not-allowed;
  }
</style>
