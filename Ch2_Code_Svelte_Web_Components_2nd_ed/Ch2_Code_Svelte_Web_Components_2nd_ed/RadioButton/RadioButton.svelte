<svelte:options customElement="garnet-radiobutton" />

<script>
  import { createEventDispatcher } from 'svelte';

  export let selectOptions = [
    {
      value: "Test slot 1",
      label: "Test slot 1"
    },
    {
      value: "Test slot 2",
      label: "Test slot 2"
    },
    {
      value: "Test slot 3",
      label: "Test slot 3"
    }
  ];
  
  export let legend = "Legend";
  export let disabled = false;
  export let userSelected = selectOptions[0].value;

  const handleChange = {};
	
  const slugify = (str = "") =>
    str.toLowerCase().replace(/ /g, "-").replace(/\./g, "");
</script>

<fieldset id="garnet-radiobutton" {disabled}>
  <div class="legend" id={`label-${legend}`}>{legend}</div>
  {#each selectOptions as { value, label }}
    <input
      class="sr-only"
      type="radio"
      id={slugify(label)}
      on:change
      bind:group={userSelected}
      value={value} />
    <label for={slugify(label)}> {label} </label>
  {/each}
</fieldset>

<style>
  .legend {
    font-weight: bold;
  }

  label {
    user-select: none;
    line-height: 19px;
  }

  .sr-only {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }

  input[type="radio"] {
    position: absolute;
  }

  input[type="radio"] + label {
    display: block;
    position: relative;
    text-align: left;
  }

  input[type="radio"] + label::before {
      content: "";
      position: relative;
      display: inline-block;
      margin-right: 8px;
      width: 16px;
      height: 16px;
      background: transparent;
      border: 1px solid #ccc;
      border-radius: 50%;
      top: 3px;
  }

  input[type="radio"]:checked + label::before {
    border: 1px solid #ccc;
    border-radius: 50%;
  }

  input[type="radio"] + label::after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 8px;
    height: 8px;
    top: 7px;
    left: 4px;
    background: #733635;
    border: 1px solid #733635;
    border-radius: 50%;
    transform: scale(0);
  }

  input[type="radio"]:checked + label::after {
    opacity: 1;
    transform: scale(1);
  }

  input[type="radio"]:focus + label::before {
    box-shadow: 0 0 0 1px #733635;
    border-radius: 50%;
  }  
  
  input[type="radio"]:disabled + label {
    color: darken(#ccc, 10);
  }

  input[type="radio"]:disabled + label::before {
    background: #ccc;
  } 
  /* gravy */


  input[type="radio"] + label::before {
      transition: background 0.3s ease-out;
  }

  input[type="radio"]:checked + label::before {
    transition: background 0.3s ease-in;
  }

  input[type="radio"] + label::after {
    transition: transform 0.2s ease-out;
  }

  input[type="radio"]:checked + label::after {
    transition: transform 0.2s ease-in;
  }

  input[type="radio"]:focus + label::before {
    box-shadow: 0 0px 8px #733635;
    border-radius: 50%;
  }

</style>
