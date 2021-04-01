<script>
import FilterCrumb from './FilterCrumb.svelte'
export let currentFilters = [
  
];
</script>
<style>
  .crumbFilterList {
    @apply text-base;
    @apply text-white flex justify-center items-center;
    @apply px-8;
  }
</style>
<div class="crumbFilterList">
  {#each currentFilters as filter }
    <FilterCrumb {filter}/> /
  {/each}
</div>