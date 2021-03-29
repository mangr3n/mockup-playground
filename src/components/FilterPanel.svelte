<script>
  import { onMount } from 'svelte';
  import FilterCatcher from "./FilterCatcher.svelte";
  import FilterSection from "./FilterSection.svelte";
  export let visible;
  export let crumbs;
  export let currentFilters = [];
  $: console.log("FilterPanel/currentFilters", currentFilters);

let channelsFilterDefinition = null;
let geographyFilterDefinition = null;

onMount(() => {
  fetch("/data/channelFilterDef.json")
    .then(r => r.json())
    .then(json => {
      channelsFilterDefinition = json;
    }
  );
  fetch("/data/geographyFilterDef.json")
    .then(r => r.json())
    .then(json => {
      geographyFilterDefinition = json;
    }
  );
});
</script>

<style>
  div {
    @apply bg-white absolute flex flex-row flex-nowrap items-stretch h-5/6 top-24 left-0 right-0 border-2 shadow-xl;
  }
</style>

<div style="display:{visible?'flex':'none'}">
  <FilterCatcher bind:currentFilters />
  {#if channelsFilterDefinition}
  <FilterSection definition={channelsFilterDefinition} bind:currentFilters />
  {/if}
  {#if geographyFilterDefinition}
  <FilterSection definition={geographyFilterDefinition} bind:currentFilters />
  {/if}
</div>
