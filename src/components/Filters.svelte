<script>
    import FilterCrumbsList from './FilterCrumbsList.svelte';
    import classnames from './utils';
    import FilterToggle from './FilterToggle.svelte';
    import FilterPanel from './FilterPanel.svelte';
    let className = '';
    let visible = false;
    let currentFilters = [
    ];
    export { className as class };

    $: classes = classnames(
        className,
        'navbar'
    );
    $: console.log('visible',visible)
</script>
<style>
    nav {
        @apply w-full bg-lightBlue-900 fixed absolute flex flex-row items-center h-12 leading-10 top-12 right-0 left-0;
    }
</style>

<nav {...$$restProps} >
    <FilterToggle bind:visible/> 
    <FilterCrumbsList bind:currentFilters />
</nav>
<FilterPanel {visible} bind:currentFilters/>