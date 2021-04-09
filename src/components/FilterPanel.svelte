<script>
  import { onMount } from "svelte";
  import { appRoot } from "../appRoot";
  import { processChannelData } from "../dataprocess/channels";
  import FilterCatcher from "./FilterCatcher.svelte";
  import FilterSection from "./FilterSection.svelte";
  export let visible;
  export let currentFilters = [];

  let changingFilters = [];

  onMount(() => {
    changingFilters = currentFilters;
  });

  $: console.log("FilterPanel/currentFilters", currentFilters);

  const applyHandler = (event) => {
    console.log("FilterPanel/applyHandler", event);
    currentFilters = changingFilters;
    visible = false;
  };

  const cancelHandler = (event) => {
    console.log("FilterPanel/cancelHandler", event);
    changingFilters = currentFilters;
    visible = false;
  };

  const clearHandler = (event) => {
    changingFilters = [];
  };

  let channelsFilterDefinition = null;
  let geographyFilterDefinition = null;

  onMount(() => {
    if (window.jsonChannel && window.jsonSubChannel) {
      channelsFilterDefinition = processChannelData(
        jsonChannel,
        jsonSubChannel
      );
    } else {
      fetch($appRoot + "/data/channelFilterDef.json")
        .then((r) => r.json())
        .then((json) => {
          channelsFilterDefinition = json;
        });
    }
    fetch($appRoot + "/data/geographyFilterDef.json")
        .then((r) => r.json())
        .then((json) => {
          geographyFilterDefinition = json;
        });
  });
</script>

<div style="display:{visible ? 'flex' : 'none'}">
  <FilterCatcher
    bind:currentFilters={changingFilters}
    on:apply={applyHandler}
    on:clear={clearHandler}
    on:cancel={cancelHandler}
  />
  {#if channelsFilterDefinition}
    <FilterSection
      definition={channelsFilterDefinition}
      bind:currentFilters={changingFilters}
    />
  {/if}
  {#if geographyFilterDefinition}
    <FilterSection
      definition={geographyFilterDefinition}
      bind:currentFilters={changingFilters}
    />
  {/if}
</div>

<style>
  div {
    @apply bg-white absolute flex flex-row flex-nowrap items-stretch h-5/6 top-24 left-0 right-0 border-2 shadow-xl;
  }
</style>
