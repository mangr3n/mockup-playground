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
                { id: "Channel:State-Medicaid", name: "State Medicaid", default: false, title: "Channel: State Medicaid", type: "Channel"}
            ]
            },
            {
            name: "Sub-Channel",
            filters: [
                {id: "Sub-Channel:Commercial", name: "Commercial", title: "Sub-Channel: Commercial", type: "Sub-Channel", parent: "Channel:Commercial"},
                {id: "Sub-Channel:HIX", name: "HIX", title: "Sub-Channel: HIX", type: "Sub-Channel", parent: "Channel:Commercial"},
                {id: "Sub-Channel:Managed-Medicaid", name: "Managed Medicaid", title: "Sub-Channel: Managed Medicaid", type: "Sub-Channel", parent: "Channel:Commercial"},
                {id: "Sub-Channel:Employer", name: "Employer", title: "Sub-Channel: Employer", type: "Sub-Channel", parent: "Channel:Employer"},
                {id: "Sub-Channel:CVS-FEP", name: "CVS FEP", title: "Sub-Channel: CVS FEP", type: "Sub-Channel", parent: "Channel:Government"},
                {id: "Sub-Channel:Tricare", name: "Tricare", title: "Sub-Channel: Tricare", type: "Sub-Channel", parent: "Channel:Government"},
                {id: "Sub-Channel:VA", name: "VA", title: "Sub-Channel: VA", type: "Sub-Channel", parent: "Channel:Government"},
                {id: "Sub-Channel:MA", name: "MA", title: "Sub-Channel: MA", type: "Sub-Channel", parent: "Channel:Medicare"},
                {id: "Sub-Channel:MA-PD", name: "MA-PD", title: "Sub-Channel: MA-PD", type: "Sub-Channel", parent: "Channel:Medicare"},
                {id: "Sub-Channel:PDP", name: "PDP", title: "Sub-Channel: PDP", type: "Sub-Channel", parent: "Channel:Medicare"},
                {id: "Sub-Channel:State-Medicaid", name: "State Medicaid", title: "Sub-Channel: State Medicaid", type: "Sub-Channel", parent: "Channel:State-Medicaid"}
            ]
            }
        ]
    }

    const geographyFilterDefinition = {
        name: "Geography",
        filterTypes: [
            { type: "Geography-Type" },
            { type: "State", parent: "Geography-Type"},
            { type: "CBSA", parent: "Geography-Type"}
            //{ type: "Zone", parent: "Geography-Type"}
            //{ type: "Area", parent: "Geography-Type"}
            //{ type: "Region", parent: "Geography-Type"}
            //{ type: "Territory", parent: "Geography-Type"}
        ],
        filterDefaults: {
            "Geography-Type": { name: "National", default: true, title: "Select a Geography Type to filter", type: "Geography-Type"}
        },
        sections: [
            {
            name: "Geography Type",
            filters: [
                { id: "Geography:National", name: "National", title: "Geography: National", type: "Geography-Type" },
                { id: "Geography:State-CBSA", name: "State / CBSA", default: false, title: "Channel: State / CBSA", type: "Geography-Type"},
                { id: "Geography:Client-Alignment", name: "Client Alignment", default: false, title: "Channel: Client Alignment", type: "Geography-Type"}
            ]
            },
            {
            name: "State",
            filters: [
                {id: "State:Alabama", name: "Alabama", title: "Alabama", type: "State", parent: "Geography:National"}
            ]
            }
        ]
    }
</script>
<div class='bg-white absolute flex flex-row items-stretch h-5/6 top-12 left-0 right-0 border-2 shadow-xl'  class:hidden={!visible}>
    <FilterCatcher bind:currentFilters/>
    <FilterSection definition={channelsFilterDefinition} bind:currentFilters/>
</div>