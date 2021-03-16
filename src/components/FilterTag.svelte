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

<span class="border-2 rounded border-gray-400 py-1 px-2 m-1">
  {crumb.label} 
  <span class="hover:bg-gray-200 cursor-pointer p-1" on:click={remover(crumb)}>x</span>
</span>