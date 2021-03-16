<script>

    export let visible=false
    const toggleFilter= () => {
        visible=!visible
    }

</script>
<style>
    .isShowing {
        @apply text-lightBlue-400 bg-white;
    }
</style>
    <span on:click={toggleFilter} class='{visible ? "text-lightBlue-400 bg-white" : "text-white"} mx-6 p-1'>
    <img src='/filter.svg' class='h-9 w-9 inline'/>
    <span class='mb-n2'>Show Filters</span>
</span>