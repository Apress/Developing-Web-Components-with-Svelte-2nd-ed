<svelte:options customElement="garnet-cell" /> 

<script>
  export let displayImages = false;
  export let imageLabel = "untitled";
  export let displayImageLabels = false;
</script>  

<div class="cell">
  {#if displayImages}
    <div class="container">
      <img src="https://loremflickr.com/320/240/camera" alt="placeholder" data-testid="placeholderImage" />
      
      {#if displayImageLabels}
      <div class="description">
        <span class="labelText">{imageLabel}</span>
      </div>
      {/if}
    </div>
  {:else}
    <slot />
  {/if}
</div>

<style>
  .cell { 
    border: 1px solid #000000; 
    min-height: 100px;
  }
  
  .container {
    position: relative;
  }

  .description { 
    padding: 10px 0; 
    position: absolute;
    bottom: 0%;
    left: 50%; 
    transform: translate(-50%, 0%); 
    background-color: rgba(0,0,0, 0.7); 
    color: #ffffff;
    font-size: 16px;
    width: 100%;
  }
  
  span {   
    padding-left: 10px;
  }

  img { 
    display: block;
    width: 100%;
    height: auto;
    
  }
</style> 
