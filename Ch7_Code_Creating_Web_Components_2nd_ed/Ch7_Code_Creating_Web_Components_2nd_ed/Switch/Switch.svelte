<svelte:options customElement="garnet-switch" />

<script>
  export let id = "";
  export let label = "";
  export let css = "";
  export let size = "";
  export let isChecked = false;
  export let disabled = false;

  $: switchContainer = [
      "switch-container",
      css ? css : "",
      disabled ? "disabled" : "",
    ].filter(c => c).join(" ");
  
  let classes = ["switch", size ? `switch-${size}` : ""].join(" ");
</script>

<label class={switchContainer} for={id}>
  <input
    type="checkbox"
    class="switch-input"
    id={id}
    bind:checked={isChecked}
    disabled={disabled}
    on:change
    on:input
    role="switch"
  />
  <span class={classes}></span>
  <span class="switch-label">{label}</span>
</label>

<style>
  .switch-container {
    display: flex;
    min-height: 36px;
    width: 100%;
    padding: 8px;
    position: relative;
    align-items: center;
  }
  
  .switch-container:hover {
    cursor: pointer;
  }
  
  .switch::before,
  .switch::after {
    border: 1px solid #ccc;
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  
  .switch::after {
    background: #fff;
    border-radius: 100%;
    width: 22.4px;
    height: 22.4px;
    right: 22.4px;
    transition: right 200ms ease-in-out;
  }
  
  .switch::before {
    background: #eee;
    border-radius: 28px;
    width: 44px;
    height: 28px;
    right: 4px;
    transition: background 300ms ease-in-out;
  }
      
  .switch-input:checked + .switch::after {
    right: 6.4px;
  }

  .switch-input {
    margin: 0;
    opacity: 0.01%;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  
  .switch-input:focus + .switch::before {
    box-shadow: 0 0 0 3px rgb(55 149 225 / 50%);
  }
  
  .switch-input:checked + .switch:not(.switch-border)::before {
    background: #733635;
  }

  .switch-input[disabled] + .switch,
  .switch-input[disabled] + .switch-label,
  .switch-container.disabled {
    color:#717171;
    appearance: none;
    box-shadow: none;
    cursor: not-allowed;
    opacity: 80%;
  }
  </style>