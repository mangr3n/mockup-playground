<script>
    import FilterCatcher from './FilterCatcher.svelte';
    export let visible;
    export let crumbs;
</script>
<div class='h-5 bg-white absolute top-12 h-1/2 left-0 right-0 border-2 shadow-xl'  class:hidden={!visible}>
    <FilterCatcher bind:crumbs/>
</div>