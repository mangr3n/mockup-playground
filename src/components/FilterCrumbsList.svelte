<script>
import FilterCrumb from './FilterCrumb.svelte'
export let currentFilters = [
  
];
</script>
<style>
  div {
    @apply text-lg;
    @apply text-white flex justify-center items-center;
  }
</style>
<div class="px-8">
  {#each currentFilters as filter }
    <FilterCrumb {filter}/> /
  {/each}
</div>