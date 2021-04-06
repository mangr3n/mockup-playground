<svelte:head>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
</svelte:head>
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
        @apply w-full fixed absolute flex flex-row items-center h-12 leading-10 top-12 right-0 left-0;
        background-color: #1c485f;
    }
</style>

<nav {...$$restProps} >
    <FilterToggle bind:visible/> 
    <FilterCrumbsList bind:currentFilters />
</nav>
<FilterPanel bind:visible bind:currentFilters/>

