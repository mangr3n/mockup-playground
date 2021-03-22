<script>
import { writable } from 'svelte/store';


import FilterTag from './FilterTag.svelte'
  export let currentFilters = [
  ];

  const count = writable(0);

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

<div class="w-1/6 border-r-2 border-coolGray-500 p-4">
  <div class="flex flex-row flex-wrap">
    {#each currentFilters as filter, name }
    <FilterTag {filter} on:removeFilter={removeFilter}/>
    {/each}
  </div>
</div>