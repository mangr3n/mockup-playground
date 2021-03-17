<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const remover = (item) => {
    return () => {
      console.log("Dispatching removeCrumb",item);
      dispatch('removeCrumb', item);
    }
  };
  export let crumb = null;
  
</script>

<span class="border-2 border-gray-700 py-0 px-1.5 p-2 m-1 text-xs select-none" title={crumb.title}>
  {crumb.label} 
  {#if !crumb.default}
  <span class="hover:bg-gray-200 cursor-pointer pl-0.5 pr-0.5 text-sm font-medium" on:click={remover(crumb)}>x</span>
  {/if}
</span>