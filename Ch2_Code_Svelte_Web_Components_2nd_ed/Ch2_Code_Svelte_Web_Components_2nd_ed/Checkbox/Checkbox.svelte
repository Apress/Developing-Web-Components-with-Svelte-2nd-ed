<svelte:options customElement="garnet-checkbox" />

<script>
  import { createEventDispatcher } from 'svelte';

  export let checked = false;
  export let label = 'Checkbox';
  export let disabled = false;

  const dispatch = createEventDispatcher();

  function handleChange(event) {
    const { checked } = event.target;
    dispatch('change', { checked });
  }
</script>

<div class="garnet-checkbox">
  <input 
    type="checkbox" 
    bind:checked={checked} 
    id="name"
    {disabled} 
    on:change={handleChange}  
  />
  <label for="name">
    {label}
  </label>
</div>

<style>
  .garnet-checkbox {
    display: flex;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
  }

  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 18px;
    height: 18px;
    border: 2px solid currentColor;
    border-radius: 2px;
    transform: translateY(-1px);
    display: grid;
    place-content: center;
  }

  input[type="checkbox"]::before {
    content: "";
    width: 10px;
    height: 10px;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 16px 16px #733635;
  }

  input[type="checkbox"]:checked::before {
    transform: scale(1);
  }

  input[type="checkbox"]:disabled {
    color: #959495;
    cursor: not-allowed;
    opacity: 0.4;
  }

  label {
    margin-left: 5px;
    user-select: none;
  }
</style>
