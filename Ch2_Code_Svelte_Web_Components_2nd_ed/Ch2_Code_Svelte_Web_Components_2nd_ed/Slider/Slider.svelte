<svelte:options customElement="garnet-slider" />

<script>
  export let id = undefined;
  export let min = 0;
  export let max = 100;
  export let step = 1;
  export let val = 50;
  export let disabled = false;
  export let ticks = false;
</script>

<div class="garnet">
  <div class="range-slider">
    <label for={id}>Please select a value:</label>
    <input
      type="range"
      {id}
      {min}
      {max}
      {step}
      name={id}
      bind:value={val}
      {disabled}
    />

    {#if ticks}
      <div class="sliderticks">
        <span>0</span>
        <span>25</span>
        <span>50</span>
        <span>75</span>
        <span>100</span>
      </div>
    {/if}
  </div>

  <div class="selectedValue">Value: {val}</div>
</div>  

<style>
  .garnet {
    display: flex;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
  }

  input[type="range"] {
    -webkit-appearance: none;
    appearance: none; 
    width: 100%;
    cursor: pointer;
    outline: none;
    border-radius: 15px;
    height: 6px;
    background: #ccc;
    margin: 20px 0 0 0;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none; 
    height: 15px;
    width: 15px;
    background-color: #733635;
    border-radius: 50%;
    border: none;
    transition: .2s ease-in-out;
  }

  input[type="range"]::-moz-range-thumb {
    height: 15px;
    width: 15px;
    background-color: #733635;
    border-radius: 50%;
    border: none;
    transition: .2s ease-in-out;
  }

  input[type="range"]::-webkit-slider-thumb:hover {
    box-shadow: 0 0 0 10px rgba(115, 54, 53 .1)
  }
  input[type="range"]:active::-webkit-slider-thumb {
    box-shadow: 0 0 0 13px rgba(115, 54, 53 .2)
  }
  input[type="range"]:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 13px rgba(115, 54, 53 .2)
  }

  input[type="range"]::-moz-range-thumb:hover {
    box-shadow: 0 0 0 10px rgba(115, 54, 53 .1)
  }
  input[type="range"]:active::-moz-range-thumb {
    box-shadow: 0 0 0 13px rgba(115, 54, 53 .2)
  }
  input[type="range"]:focus::-moz-range-thumb {
    box-shadow: 0 0 0 13px rgba(115, 54, 53 .2)    
  }

  .sliderticks {
    display: flex;
    justify-content: space-between;
    padding: 0 7px;
  }

  .sliderticks span {
    display: flex;
    justify-content: center;
    width: 1px;
    height: 10px;
    background: #d3d3d3;
    line-height: 40px;
  }

  .selectedValue {
    padding: 20px 0 0 15px ;
  }

  /* Disabled styles */
  input[type=range]:disabled {
    opacity: 0.4;
  }

  input[type=range]:disabled::-moz-range-track,
  input[type=range]:disabled::-webkit-slider-thumb,
  input[type=range]:disabled::-moz-range-thumb {
    background: rgb(115, 54, 53);
  }
</style>
