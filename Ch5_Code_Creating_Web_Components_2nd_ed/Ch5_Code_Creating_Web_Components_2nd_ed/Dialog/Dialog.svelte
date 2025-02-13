<svelte:options customElement="garnet-dialog" />

<script>
  import CloseIcon from "./Close.svelte";
  export let showDialog = true;
  export let showBackground = false;
  export let modalTitle = "Modal title";
  export let modalText = "Click on the X to close me";
</script>

<button data-testid = "buttonDialog" on:click={() => (showDialog = !showDialog)}>Show dialog</button>

{#if showDialog}
  <div class="garnet-dialog">
    {#if showBackground}<div id="background" />{/if}
    <div data-testid="modal" id="modal">
      <div class="header">
        <h3>{modalTitle}</h3>
        <button
          type="button"
          class="close"
          data-testid="close-button"
          title="close button"
          on:click={() => (showDialog = false)}
        >
          <CloseIcon />
        </button>
      </div>
      <p>{modalText}</p>
    </div>
  </div>
{/if}

<style>
  .garnet-dialog {
    font-family: Arial, Helvetica, sans-serif;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  #background {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    animation: fadein 1s;
  }

  #modal {
    position: fixed;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 10px;
    width: 400px;
    height: 250px;
    border: 1px solid #c4c4c4;
    box-shadow: 2.5px 5.0px 5.0px hsl(0deg 0% 0% / 0.42);
  }

  .header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #c4c4c4;
  }

  button {
    background-color: #733635;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;  
  }

 button.close {
    background-color: #ffffff;
    padding: 10px 0 10px 0;    
  }

  button.close:hover {
    color: #d19c9b;
  }
</style>
