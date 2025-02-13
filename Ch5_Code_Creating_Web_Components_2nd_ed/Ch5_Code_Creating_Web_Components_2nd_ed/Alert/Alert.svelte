<svelte:options customElement="garnet-alert" />

<script>
  import Icon from "./Icon.svelte";

  export let show;
  export let showIcon = true;
  export let type = "";
  export let title = "";
  export let description = "";
  export let showAnimation = true;
  let typeClass;

  switch (type) {
    case "warn":
      typeClass = "alert-warn";
      break;
    case "dark":
      typeClass = "alert-dark";
      break;
    case "error":
      typeClass = "alert-error";
      break;
    case "info":
      typeClass = "alert-info";
      break;
    case "success":
      typeClass = "alert-success";
      break;
    default:
      typeClass = "";
  }
  const classes = ["alert", typeClass, showAnimation ? "fade-in" : ""]
    .join(" ");

  const closeAlert = () => {
    show = false;
  };
</script>

<div class="garnet-alert">
  {#if show}
    <dialog class={classes} role="alertdialog" title="Alert Dialog">
      <div class="icon">
        {#if showIcon}<Icon iconType={type} />{/if}
      </div>
      <div class="message">
        <strong>
          {title}
        </strong>
        {description}
      </div>
      <div>
        <button on:click={closeAlert}>&#x2716;</button>
      </div>
    </dialog>
  {/if}
</div>

<style>
  dialog {
    min-width: 300px;
    display: flex;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    border: none;
  }

  button {
    background: none;
    border: none;
    font-size: 21px;
  }

  .icon {
    margin-right: 10px;
  }

  .message {
    display: flex;
    flex-direction: column;
    line-height: 24px;
    min-width: 300px;
  }

  .fade-in {
    animation: fade-in 2000ms both;
  }

  @keyframes fade-in {
    from {
      opacity: 0%;
    }
  }

  .alert-warn {
    background: #ffeb3b;
    color: #000000;
  }

  .alert-info {
    background: #2196f3;
    color: #ffffff;
  }

  .alert-error {
    background: #ff0000;
    color: #ffffff;
  }
</style>
