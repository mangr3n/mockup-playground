<script>
import { writable } from 'svelte/store';


import FilterTag from './FilterTag.svelte'
  export let currentFilters = [
  ];

  const removeFilter = (event) => {
    currentFilters = currentFilters.filter((value,x,y) => {
      console.log("inFilter",{value,x,y, detail:event.detail, same: value == event.detail});
      if (value == event.detail) {
        return false;
      }
      return true;
    });
    console.log("FilterChannel/removeFilter: ", currentFilters);
  }
</script>

<style>
  .filter-catcher {
    @apply w-1/6;
    @apply border-r-2;
    @apply border-solid;
    @apply border-coolGray-300;
    @apply p-4;
    @apply block;
  }
  
  .crumb-container {
    @apply flex flex-row flex-wrap;
  }

  .filter-controls {
    @apply flex mt-2 mb-8;
  }

  .button-cancel {
    @apply bg-coolGray-300 text-black py-2 px-4 rounded flex-1 mx-2;
  }

  .button-cancel:hover {
    @apply bg-coolGray-400;
  }

  .button-apply {
    @apply bg-blue-400 text-white py-2 px-4 rounded flex-1 mx-2;
  }

  .button-apply:hover {
    @apply bg-blue-500;
  }

  .clear-filters {
    @apply ml-2 mt-1 underline cursor-pointer;
  }
</style>

<div class="filter-catcher">
  <div class="filter-controls">
    <button class="button-cancel">
      Cancel
    </button>

    <button class="button-apply">
      Apply
    </button>
  </div>
  
  <div class="crumb-container">
    {#each currentFilters as filter, name }
    <FilterTag {filter} on:removeFilter={removeFilter}/>
    {/each}
    <span class="clear-filters">Clear All</span>
  </div>
</div>