<script>
    import FilterCrumbsList from './FilterCrumbsList.svelte';
    import classnames from './utils';
    import FilterToggle from './FilterToggle.svelte';
    import FilterPanel from './FilterPanel.svelte';
    let className = '';
    let visible = false;
    let crumbs = [
        { label: "All Channels", title: "Channel" },
        { label: "All Subchannels", title: "SubChannel"},
        { label: "All Plans", title: "Plans" }
    ];
    export { className as class };

    $: classes = classnames(
        className,
        'navbar'
    );
    $: console.log('visible',visible)
</script>
<style>
    :global(.navbar) {
        @apply w-full bg-lightBlue-900 absolute flex flex-row items-center h-12 leading-10 top-0 right-0 left-0;
    }
</style>

<nav {...$$restProps} class={classes} >
    <FilterToggle bind:visible/> 
    <FilterCrumbsList bind:crumbs />
</nav>
<FilterPanel bind:visible bind:crumbs/>