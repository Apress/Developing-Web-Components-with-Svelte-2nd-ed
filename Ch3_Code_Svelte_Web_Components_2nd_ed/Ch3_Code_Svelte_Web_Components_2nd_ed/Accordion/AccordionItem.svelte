<svelte:options customElement="garnet-accordionitem" />

<script>
  import { slide } from "svelte/transition";
  import accordionData from "./accordiondata.json";
  export const data = accordionData;
  export let title = "";
  export let isOpen = false;
  
  const toggle = () => (isOpen = !isOpen);
</script>

<button on:click={toggle} aria-expanded={isOpen} class="accordionItem">
  <svg
    width="20"
    height="20"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
    ><path d="M9 5l7 7-7 7" />
  </svg>
  {title}
</button>

{#if isOpen}
  <ul transition:slide={{ duration: 300 }} class="garnet">
    <slot></slot>
  </ul>
{/if}

<style>
  .garnet {
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
  }

  svg {
    transition: transform 0.2s ease-in;
  }

  [aria-expanded="true"] svg {
    transform: rotate(0.25turn);
  }

  button.accordionItem {
    display: flex;
    align-items: center;
    background-color: #733635;
    color: #ffffff;
    border: none;
  }

  button[aria-expanded="false"].accordionItem {
    margin-bottom: 2px;
  }

  button.accordionItem:hover {
    background-color: #733635;
  }

  ul {
    border: 1px solid #d19c9b;
    margin: 0;
    margin-bottom: 2px;
    padding: 5px 10px 10px 20px;
  }
</style>
