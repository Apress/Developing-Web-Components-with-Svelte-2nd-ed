<svelte:options customElement = "garnet-tabs" />

<script>
  export let activeTabValue = "0";
  export let items = [];
  export let vertical = false;

  if (items == null) {
    items = tabItems;
  }

  const handleClick = tabValue => () => (activeTabValue = tabValue);

  $: vertical = vertical
</script>

<div class="garnet-tabs" class:vertical>
    <ul class:vertical>
      {#each Object.entries(items) as [id]}
        <li class={activeTabValue === id ? 'active' : ''} data-testid="tabHeader">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <span class:vertical on:click={handleClick(id)}>           
            {JSON.stringify(items[id].name).replace(/['"]+/g, "")}
          </span>
        </li>
      {/each}
    </ul>
  
    <div class="content" class:vertical data-testid="tabContent">
      {#each Object.entries(items) as [id]}
        {#if activeTabValue === id}
          {JSON.stringify(items[id].text).replace(/['"]+/g, "")}
        {/if}
      {/each}
    </div>
</div>

<style>
  .garnet-tabs { 
    display: flex; 
    flex-direction: column;
		font-family: Arial, Helvetica, sans-serif;    
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    border-bottom: 1px solid #dee2e6;
  }
	li {
		margin-bottom: -1px;
	}

  span {
    border: 1px solid transparent;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: block;
    padding: 8px 16px;
    cursor: pointer;
  }

  span:hover {
    border-color: #dee2e6;
    border-bottom-color: #ffffff;
  }

  li.active > span {
    color: #ffffff;
    background-color: #733635;
    border-color: #dee2e6 #dee2e6 #fff;
  }

  .content {
    padding: 10px;
    min-height: 300px;
  }

  /* variant */
  .garnet-tabs.vertical {
    display: flex;
    flex-direction: row;
  }

  ul.vertical{
    display: flex;
    flex-direction: column;
    border-right: 1px solid #dee2e6;
    border-bottom: none;
    margin-top: 0;
  }

  ul.vertical span {
    border-radius: 0;
    border-right: 0;
    border-color: #dee2e6;
  }
  </style>