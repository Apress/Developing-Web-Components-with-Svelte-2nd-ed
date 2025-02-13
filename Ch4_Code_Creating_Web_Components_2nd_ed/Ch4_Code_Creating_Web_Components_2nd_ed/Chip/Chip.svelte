<svelte:options customElement="garnet-chip" />

<script>
  import DeleteIcon from './DeleteIcon.svelte';
  import { createEventDispatcher } from 'svelte';

  export let active = true;
  export let close = false;
  export let chipContent = "";
  export let selected = false;
  export let outline = false;

  const dispatch = createEventDispatcher();

  function onClose(e) {
    active = false;
    dispatch('close', e);
  }

  $: outline = outline;
</script>

<div class="garnet-chip">
  {#if active}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="chip"
      class:selected
      class:outline
      data-testid="chip"
      >
      <span>{chipContent}</span>
      {#if close}
        <span class="close" on:click={onClose}>
          <DeleteIcon />
        </span>
      {/if}
      </div>
  {/if}
</div>

<style>
  .garnet-chip {
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
  }
  
  .chip {
    color: #733635;
    align-items: center;
    cursor: default;
    display: inline-flex;
    line-height: 20px;
    max-width: 100%;
    outline: none;
    overflow: hidden;
    padding: 0 12px;
    position: relative;
    text-decoration: none;
    vertical-align: middle;
    white-space: nowrap;
    border-radius: 25px;
    padding: 10px;
    background-color: #d3d3d3;
  }

  .close {
    cursor: pointer;
    margin-left: 6px;
    margin-right: -6px;
    display: flex;
  }

  .close:focus, .close:hover, .close:active {
    opacity: 0.72;
  }

  .outline {
    background-color: #ffffff;
    border: 1px solid #d3d3d3;
  }
</style>
