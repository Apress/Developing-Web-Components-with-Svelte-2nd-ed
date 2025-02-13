<svelte:options customElement="garnet-spinner" />

<script>
  export let color = "#733635";
  export let duration = "0.75s";
  export let size = "60";
  export let variant = "";
  export let unit = 'px';
  export let pause = false;
  
  let durationUnit = duration.match(/[a-zA-Z]/)?.[0] ?? 's';
  let durationNum = duration.replace(/[a-zA-Z]/, '');
  
  const range = (size, startAt = 0) =>
  [...Array(size).keys()].map((i) => i + startAt);
</script>

<div class="garnet-spinner">
  <!-- Circle spinner -->
  {#if variant == "circle"}
    <div>
      <div
        class="circle"
        style="--size: {size}px; --color: {color}; --duration: {duration}"
      />
    </div>
  {/if}

  <!-- Jumper spinner -->
  {#if variant == "jumper"}
    <div style="--size: {size}px; --color: {color}; --duration: {duration};">
      {#each range(3, 1) as version}
        <div
          class="jumper"
          style="animation-delay: {(1 / 3) * (version - 1)}s;"
        />
      {/each}
    </div>
  {/if}

  <!-- Jellyfish spinner -->
  {#if variant == "jellyfish"}
  <div style="--size: 60px; --color: {color}; --motionOne: -12px; --motionTwo: 15px; --motionThree: -12px; --duration: 2.5s;">
      {#each range(6, 0) as version}
        <div
          class="ring"
          class:pause-animation={pause}
          style="animation-delay: {version * (+durationNum / 25)}{durationUnit}; width: {version *
            (+size / 6) +
            unit}; height: {(version * (+size / 6)) / 2 + unit}; "
        />
      {/each}
    </div>
  {/if}  
</div>

<style>
  .garnet-spinner {
    display: flex;
  }

  /* circle spinner */
  .circle {
    height: var(--size);
    width: var(--size);
    border-color: var(--color) transparent var(--color) var(--color);
    border-width: calc(var(--size) / 12);
    border-style: solid;
    border-radius: 50%;
    animation: var(--duration) linear 0s infinite normal none running
    rotateCircle;
  }
  
  @keyframes rotateCircle {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* jumper spinner */
  .jumper {
    height: var(--size);
    width: var(--size);
    border-radius: 100%;
    animation-fill-mode: both;
    position: absolute;
    opacity: 0;
    background-color: var(--color);
    animation: bounce var(--duration) linear infinite;
  }
  
  @keyframes bounce {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    5% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: scale(1);
    }
  }

  /* jellyfish spinner */
  .ring {
    position: absolute;
    border: 2px solid var(--color);
    border-radius: 50%;
    background-color: transparent;
    animation: motion var(--duration) ease infinite;
  }
  
  .pause-animation {
    animation-play-state: paused;
  }

  @keyframes motion {
    0% {
      transform: translateY(var(--motionOne));
    }
    50% {
      transform: translateY(var(--motionTwo));
    }
    100% {
      transform: translateY(var(--motionThree));
    }
  }
</style>
