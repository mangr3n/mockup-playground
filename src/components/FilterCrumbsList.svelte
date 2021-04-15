<script>
import FilterCrumb from './FilterCrumb.svelte'
export let currentFilters = [
  
];
</script>
<style>
  .crumbFilterList {
    @apply text-base;
    @apply text-white inline-block self-end justify-center items-center;
    @apply px-8;
    @apply leading-9;
  }
</style>
<div class="crumbFilterList">
  {#each currentFilters as filter, index }
    &nbsp;<FilterCrumb {filter}/>&nbsp;
    {#if (currentFilters.length - 1) > index}
    &bull;
    {/if}
  {/each}
</div>