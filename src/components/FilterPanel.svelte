<script>
    import FilterCatcher from './FilterCatcher.svelte';
    import FilterSection from './FilterSection.svelte';
    export let visible;
    export let crumbs;
    export let currentFilters = [];
    $:console.log("FilterPanel/currentFilters", currentFilters)

    const channelsFilterDefinition = {
        name: "Channels",
        filterTypes: [
            { type: "Channel" },
            { type: "Sub-Channel", parent: "Channel"}
        ],
        filterDefaults: {
            "Channel": { name: "All Channels", default: true, title: "Select a Channel to filter Channels", type: "Channel"},
            "Sub-Channel": { name: "All Sub-Channels", default: true, title: "Select a Sub-Channel to filter Sub-Channels", type: "Sub-Channel"}
        },
        sections: [
            {
            name: "Channel",
            filters: [
                { id: "Channel:Commercial", name: "Commercial", title: "Channel: Commercial", type: "Channel" },
                { id: "Channel:Employer", name: "Employer", default: false, title: "Channel: Employer", type: "Channel"},
                { id: "Channel:Government", name: "Government", default: false, title: "Channel: Governement", type: "Channel"},
                { id: "Channel:Medicare", name: "Medicare", default: false, title: "Channel: Medicare", type: "Channel"},
                { id: "Channel:Medicaid", name: "Medicaid", default: false, title: "Channel: State Medicaid", type: "Channel"}
            ]
            },
            {
            name: "Sub-Channel",
            filters: [
                {id: "Sub-Channel:Commercial", name: "Commercial", title: "Sub-Channel: Commercial", type: "Sub-Channel", parent: "Channel:Commercial"}
            ]
            }
        ]
    }
</script>
<div class='bg-white absolute flex flex-row items-stretch h-5/6 top-12 left-0 right-0 border-2 shadow-xl'  class:hidden={!visible}>
    <FilterCatcher bind:currentFilters/>
    <FilterSection definition={channelsFilterDefinition} bind:currentFilters/>
</div>