<script>
  import { writable } from "svelte/store";
  import FilterTag from "./FilterTag.svelte";
  import { createEventDispatcher } from 'svelte';

  export let currentFilters = [];

  const dispatch = createEventDispatcher();

  const removeFilter = (event) => {
    currentFilters = currentFilters.filter((value, x, y) => {
      console.log("inFilter", {
        value,
        x,
        y,
        detail: event.detail,
        same: value == event.detail,
      });
      if (value == event.detail) {
        return false;
      }
      return true;
    });
    console.log("FilterChannel/removeFilter: ", currentFilters);
  };
</script>

<div class="filter-catcher">
  <div class="filter-controls">
    <button class="button-cancel" on:click={() => dispatch('cancel',null)}> Cancel </button>

    <button class="button-apply" on:click={(e) => dispatch('apply',null)}> Apply </button>
  </div>

  <div class="crumb-container">
    {#each currentFilters as filter, name}
      <FilterTag {filter} on:removeFilter={removeFilter} />
    {/each}
  </div>
  <span class="clear-filters" on:click={() => dispatch('clear',null)}>Clear All</span>
</div>

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
    @apply bg-warmGray-300 text-black py-2 px-4 rounded flex-1 mx-2;
    box-shadow: 3px 3px 5px -2px #757575;
  }

  .button-cancel:hover {
    @apply bg-warmGray-400;
  }

  .button-apply {
    @apply text-white py-2 px-4 rounded flex-1 mx-2;
    box-shadow: 3px 3px 5px -2px #757575;
    background-color: #2896d2;
  }

  .button-apply:hover {
    background-color: #236a90;
  }

  .clear-filters {
    @apply ml-2 mt-1 underline cursor-pointer;
  }
</style>
