<svelte:options customElement="garnet-avatar" />

<script>
  export let src = "";
  export let status = "available" || "busy" || "away" || "unavailable";
  export let statusSize = "small" || "medium" || "large";

  $: statusClasses = () => {
    let inputClasses = [status, statusSize];
    inputClasses = inputClasses.filter((klass) => klass.length);
    return inputClasses.join(" ");
  };
</script>

<div class="garnet-avatar">
  {#if src !== null}
    <img {src} class="avatar-img" alt="avatar" />
  {/if}
  <slot />
  <span data-testid="availability" class={["base", statusClasses()].join(" ")} />
</div>

<style>
.garnet-avatar {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    border-radius: 800px;
    width: 32px;
    height: 32px;
    font-size: 12.8px;
  }

  .base {
    border-radius: 800px;
    position: absolute;
    border: 1px solid #373737;
  }  

  .small {
    width: 8px;
    height: 8px;
    top: 25px;
    right: 0px;
  }

  .medium {
    width: 12px;
    height: 12px;
    top: 22px;
    right: -4px;
  }

  .large {
    width: 16px;
    height: 16px;
    top: 22px;
    right: -4px;
  }

  .available { background-color: #00ff00; }
  .busy { background-color: #ff0000; }
  .away { background-color: #ffff00; }
  .unavailable { background-color: #ffffff; border: 1px solid #000000;}
  .avatar-img { width: 100%; height: auto; border-radius: 800px; }
</style>
  