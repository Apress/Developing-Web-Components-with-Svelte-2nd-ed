<svelte:options customElement="garnet-breadcrumbs" /> 

<script>
  export let divider = "/";
  export let iconFamily = "";
  export let iconName = "";
  export let breadcrumbItems = [];

  import Icon from '@iconify/svelte';
</script>

<div class="garnet-breadcrumbs">
   <ul class="breadcrumb">
    {#each breadcrumbItems as breadcrumbIitem, i}
      <li>
        <!-- Breadcrumb divider -->
        {#if i !==0}
          {#if !iconFamily && !iconName} 
            <span>{divider}</span>
          {:else}
            <!-- Use icons from https://icon-sets.iconify.design/ -->
            <Icon icon={`${iconFamily}:${iconName}`} />
          {/if}
        {/if}

        <!-- Render each breadcrumb -->
        {#if i === breadcrumbItems.length - 1}
          {breadcrumbIitem.text}
        {:else}
          <a href={(breadcrumbIitem.href)} data-testid="breadcrumbLink">
            { breadcrumbIitem.text}
          </a>
        {/if}
      </li>
    {/each}
  </ul>
</div>

<style>
  .garnet-breadcrumbs { 
    display: flex; 
    font-family: Arial, Helvetica, sans-serif; 
  }
   
  ul.breadcrumb { 
    padding: 10px 16px; 
    list-style: none; 
    background-color: #eee; 
  }
  
  ul.breadcrumb li { 
    display: inline; 
    font-size: 18px; 
    vertical-align: text-bottom;
  } 
  
  ul.breadcrumb li a { 
    color: #733635; 
    text-decoration: none; 
    vertical-align: text-bottom;
  }

  ul.breadcrumb li a:hover {
    color: #d19c9b;
    text-decoration: underline;
  }

  ul.breadcrumb li span {
    display: inline;
    padding: 8px;
  }
</style>
