<script>
    import Filters from './components/Filters.svelte';
    import NavBar from './components/NavBar.svelte';
    import {onMount} from 'svelte';

    onMount (() =>{
        document.body.style.paddingTop ='48px';
    })
</script>

<style>
    :global(.custom) {
        @apply text-red-600;
    }
</style>

<NavBar/>
<Filters/>
<img src="/Filters-2.png"/>