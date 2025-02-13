<svelte:options customElement="garnet-alarm" />

<script>
  import { scale } from 'svelte/transition'

  export let notifications = 26;
  export let label = "This is a test label";
  export let countColor = "#733635";
  export let countBackgroundColor = "#f4f4f4";
  export let filled = false;
  export let small = false;
</script>

<h3>{label}</h3>
<div class="notifications">
  <div class="count {small ? 'small': ''}" style="--countColor: {countColor}; --countBackgroundColor: {countBackgroundColor}">
    {#key notifications}
      <span in:scale>{notifications}</span>
    {/key}
  </div>

  <svg
    class="bell {small ? 'small': ''} {filled ? 'filled' : 'outline'} {notifications > 0 ? 'ring': ''}"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
  >
    <path
      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</div>

<style>
  h3 {
    font-family: Arial, Helvetica, sans-serif; 
  }

  .notifications {
    position: relative;
    font-family: Arial, Helvetica, sans-serif; 
  }

  .notifications .count {
    position: absolute;
    left: 120px;
    top: 5px;
    display: grid;
    place-content: center;
    padding: 16px;
    font-size: 20px;
    font-weight: 700;
    color: var(--countColor);
    background-color: var(--countBackgroundColor);
    border-radius: 50%;
  }

  @keyframes ring {
  0% { transform: rotate(0); }
  1% { transform: rotate(30deg); }
  3% { transform: rotate(-28deg); }
  5% { transform: rotate(34deg); }
  7% { transform: rotate(-32deg); }
  9% { transform: rotate(30deg); }
  11% { transform: rotate(-28deg); }
  13% { transform: rotate(26deg); }
  15% { transform: rotate(-24deg); }
  17% { transform: rotate(22deg); }
  19% { transform: rotate(-20deg); }
  21% { transform: rotate(18deg); }
  23% { transform: rotate(-16deg); }
  25% { transform: rotate(14deg); }
  27% { transform: rotate(-12deg); }
  29% { transform: rotate(10deg); }
  31% { transform: rotate(-8deg); }
  33% { transform: rotate(6deg); }
  35% { transform: rotate(-4deg); }
  37% { transform: rotate(2deg); }
  39% { transform: rotate(-1deg); }
  41% { transform: rotate(1deg); }

  43% { transform: rotate(0); }
  100% { transform: rotate(0); }
}

  .notifications .bell {
    width: 140px;
    height: 140px;

  }
  
  .ring {
    animation: ring 4s .7s ease-in-out infinite;
  }


  .filled{
    fill: #000000;
  } 

  .outline {
    fill: none;
  }

  svg.bell.small {
    width: 70px;
    height: 70px;
  }

  .count.small {
    font-size: 12px;
    position: absolute;
    top: -20px;
    left: 65px;
    padding: 10px;
  }
  
</style>