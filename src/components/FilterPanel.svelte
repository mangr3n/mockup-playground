<script>
    import FilterCatcher from './FilterCatcher.svelte';
    import FilterChannels from './FilterChannels.svelte';
    export let visible;
    export let crumbs;
</script>
<div class='bg-white absolute flex flex-row items-stretch h-5/6 top-12 left-0 right-0 border-2 shadow-xl'  class:hidden={!visible}>
    <FilterCatcher bind:crumbs/>
    <FilterChannels/>
</div>