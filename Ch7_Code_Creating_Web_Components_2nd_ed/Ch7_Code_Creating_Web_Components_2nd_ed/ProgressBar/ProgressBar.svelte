<svelte:options customElement="garnet-progressbar" />

<script>
  import { cubicOut } from 'svelte/easing';
  import { tweened } from 'svelte/motion';

  export let progressAmt = 52;
  export let precision = 0;
  export let tweenDuration = 400;
  export let animate = true;
  export let labelInside = true;
  export let labelTextOutside = "This is a test";
  export let easing = cubicOut;
  export let color = '#733635';
  
  const progress = tweened(0, {
    duration: animate ? tweenDuration : 0,
    easing
  });
 
  $: progress.set(Number(progressAmt));
</script>

<div class="garnet-progressbar">
  
  <!-- Adds label inside progressbar -->
  {#if labelInside}
    <div class="labelInsideClass">
      <div class="progressbar" style="width: {$progress}%; background-color: {color}">
        <span class="progress">
          {$progress.toFixed(precision)}%
        </span>
      </div>
    </div>
  {:else}
  <div class="labelOutsideClass">
    <span class="labelTextOutside">{labelTextOutside}</span>
    <span class="progress">
      {$progress.toFixed(precision)}%
    </span>
  </div>
  <div class="progressbar" style="width: {$progress}%; background-color: {color}; height: 10px;"></div>
{/if}
</div>

<style>
  .garnet-progressbar {
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
  }

  .progress {
    font-size: 14px; 
    line-height: 20px; 
    font-weight: 500;
  }

  .progressbar {
    border-radius: 9999px;
  }

  .labelInsideClass {
    display: flex;
    flex-direction: column;
    font-size: 12px; 
    line-height: 16px;
    font-weight: 500;
    text-align: center;
    padding: 0.5rem;
    border-radius: 9999px;
    color: #000000;
  }

  .labelOutsideClass {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1px;
    color: #000000;
  }

</style>