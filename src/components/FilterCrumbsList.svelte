<script>
import FilterCrumb from './FilterCrumb.svelte'
export let crumbs = [
  { label: "All Channels", title: "Channel" },
  { label: "All Subchannels", title: "SubChannel"}
];
</script>
<style>
  div {
    @apply text-white flex justify-center items-center;
  }
</style>
<div class="fle">
  {#each crumbs as crumb }
    <FilterCrumb {crumb}/> /
  {/each}
</div>