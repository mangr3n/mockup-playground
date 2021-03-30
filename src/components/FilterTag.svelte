<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const remover = (item) => {
    return () => {
      console.log("Dispatching removeFilter",item);
      dispatch('removeFilter', item);
    }
  };
  export let filter = null;
$:console.log("FilterTag/filter", filter);
</script>

<style>
  .filter-tag {
    @apply border-solid border-2 border-gray-700 py-0 px-1.5 p-2 m-1 text-xs select-none;
  }

  .close-tag {
    @apply cursor-pointer pl-0.5 pr-0.5 text-sm font-medium;
  }

  .close-tag:hover{
    @apply bg-gray-200;
  }
</style>

<span class="filter-tag" title={filter.title}>
  {filter.name} 
  {#if !filter.default}
  <span class="close-tag" on:click={remover(filter)}>x</span>
  {/if}
</span>