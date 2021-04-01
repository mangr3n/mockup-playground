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
</style>

<div class="filter-catcher">
  <div class="flex mb-4">
    <button class="bg-coolGray-300 hover:bg-coolGray-400 text-black py-2 px-4 rounded flex-1 mx-2">
      Cancel
    </button>

    <button class="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded flex-1 mx-2">
      Apply
    </button>
  </div>
  
  <div class="crumb-container">
    {#each currentFilters as filter, name }
    <FilterTag {filter} on:removeFilter={removeFilter}/>
    {/each}
    <span class="ml-2 mt-1 underline cursor-pointer">Clear All</span>
  </div>
</div>