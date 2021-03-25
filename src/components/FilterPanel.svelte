<script>
  import FilterCatcher from "./FilterCatcher.svelte";
  import FilterSection from "./FilterSection.svelte";
  export let visible;
  export let crumbs;
  export let currentFilters = [];
  $: console.log("FilterPanel/currentFilters", currentFilters);

  const channelsFilterDefinition = {
    name: "Channels",
    filterTypes: [
      { type: "Channel", multi: false },
      { type: "Sub-Channel", parent: "Channel", multi: false }
    ],
    filterDefaults: {
      Channel: {
        name: "All Channels",
        default: true,
        title: "Select a Channel to filter Channels",
        type: "Channel"
      },
      "Sub-Channel": {
        name: "All Sub-Channels",
        default: true,
        title: "Select a Sub-Channel to filter Sub-Channels",
        type: "Sub-Channel"
      }
    },
    sections: [
      {
        name: "Channel",
        filters: [
          {
            id: "Channel:Commercial",
            name: "Commercial",
            title: "Channel: Commercial",
            type: "Channel"
          },
          {
            id: "Channel:Employer",
            name: "Employer",
            default: false,
            title: "Channel: Employer",
            type: "Channel"
          },
          {
            id: "Channel:Government",
            name: "Government",
            default: false,
            title: "Channel: Governement",
            type: "Channel"
          },
          {
            id: "Channel:Medicare",
            name: "Medicare",
            default: false,
            title: "Channel: Medicare",
            type: "Channel"
          },
          {
            id: "Channel:State-Medicaid",
            name: "State Medicaid",
            default: false,
            title: "Channel: State Medicaid",
            type: "Channel"
          }
        ]
      },
      {
        name: "Sub-Channel",
        filters: [
          {
            id: "Sub-Channel:Commercial",
            name: "Commercial",
            title: "Sub-Channel: Commercial",
            type: "Sub-Channel",
            parent: "Channel:Commercial"
          },
          {
            id: "Sub-Channel:HIX",
            name: "HIX",
            title: "Sub-Channel: HIX",
            type: "Sub-Channel",
            parent: "Channel:Commercial"
          },
          {
            id: "Sub-Channel:Managed-Medicaid",
            name: "Managed Medicaid",
            title: "Sub-Channel: Managed Medicaid",
            type: "Sub-Channel",
            parent: "Channel:Commercial"
          },
          {
            id: "Sub-Channel:Employer",
            name: "Employer",
            title: "Sub-Channel: Employer",
            type: "Sub-Channel",
            parent: "Channel:Employer"
          },
          {
            id: "Sub-Channel:CVS-FEP",
            name: "CVS FEP",
            title: "Sub-Channel: CVS FEP",
            type: "Sub-Channel",
            parent: "Channel:Government"
          },
          {
            id: "Sub-Channel:Tricare",
            name: "Tricare",
            title: "Sub-Channel: Tricare",
            type: "Sub-Channel",
            parent: "Channel:Government"
          },
          {
            id: "Sub-Channel:VA",
            name: "VA",
            title: "Sub-Channel: VA",
            type: "Sub-Channel",
            parent: "Channel:Government"
          },
          {
            id: "Sub-Channel:MA",
            name: "MA",
            title: "Sub-Channel: MA",
            type: "Sub-Channel",
            parent: "Channel:Medicare"
          },
          {
            id: "Sub-Channel:MA-PD",
            name: "MA-PD",
            title: "Sub-Channel: MA-PD",
            type: "Sub-Channel",
            parent: "Channel:Medicare"
          },
          {
            id: "Sub-Channel:PDP",
            name: "PDP",
            title: "Sub-Channel: PDP",
            type: "Sub-Channel",
            parent: "Channel:Medicare"
          },
          {
            id: "Sub-Channel:State-Medicaid",
            name: "State Medicaid",
            title: "Sub-Channel: State Medicaid",
            type: "Sub-Channel",
            parent: "Channel:State-Medicaid"
          }
        ]
      }
    ]
  };

  const geographyFilterDefinition = {
    name: "Geography",
    filterTypes: [
      { type: "Geography-Type", multi: false },
      { type: "State", parent: "Geography-Type", multi: false },
      { type: "CBSA", parent: "Geography-Type", multi: false }
      //{ type: "Zone", parent: "Geography-Type"}
      //{ type: "Area", parent: "Geography-Type"}
      //{ type: "Region", parent: "Geography-Type"}
      //{ type: "Territory", parent: "Geography-Type"}
    ],
    filterDefaults: {
      "Geography-Type": {
        name: "National",
        default: true,
        title: "Select a Geography Type to filter",
        type: "Geography-Type"
      }
    },
    sections: [
      {
        name: "Geography Type",
        filters: [
          {
            id: "Geography:National",
            name: "National",
            default: false,
            title: "Geography: National",
            type: "Geography-Type"
          },
          {
            id: "Geography:State-CBSA",
            name: "State / CBSA",
            default: false,
            title: "Channel: State / CBSA",
            type: "Geography-Type"
          },
          {
            id: "Geography:Client-Alignment",
            name: "Client Alignment",
            default: false,
            title: "Channel: Client Alignment",
            type: "Geography-Type"
          }
        ]
      },
      {
        name: "State",
        filters: [
          {
            id: "State:Alabama",
            name: "Alabama",
            title: "State:Alabama",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Alaska",
            name: "Alaska",
            title: "State:Alaska",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Arizona",
            name: "Arizona",
            title: "State:Arizona",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Arkansas",
            name: "Arkansas",
            title: "State:Arkansas",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:California",
            name: "California",
            title: "State:California",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Colorado",
            name: "Colorado",
            title: "State:Colorado",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Connecticut",
            name: "Connecticut",
            title: "State:Connecticut",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Delaware",
            name: "Delaware",
            title: "State:Delaware",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:District Of Columbia",
            name: "District Of Columbia",
            title: "State:District Of Columbia",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Florida",
            name: "Florida",
            title: "State:Florida",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Georgia",
            name: "Georgia",
            title: "State:Georgia",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Hawaii",
            name: "Hawaii",
            title: "State:Hawaii",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Idaho",
            name: "Idaho",
            title: "State:Idaho",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Illinois",
            name: "Illinois",
            title: "State:Illinois",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Indiana",
            name: "Indiana",
            title: "State:Indiana",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Iowa",
            name: "Iowa",
            title: "State:Iowa",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Kansas",
            name: "Kansas",
            title: "State:Kansas",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Kentucky",
            name: "Kentucky",
            title: "State:Kentucky",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Louisiana",
            name: "Louisiana",
            title: "State:Louisiana",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Maine",
            name: "Maine",
            title: "State:Maine",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Maryland",
            name: "Maryland",
            title: "State:Maryland",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Massachusetts",
            name: "Massachusetts",
            title: "State:Massachusetts",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Michigan",
            name: "Michigan",
            title: "State:Michigan",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Minnesota",
            name: "Minnesota",
            title: "State:Minnesota",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Mississippi",
            name: "Mississippi",
            title: "State:Mississippi",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Missouri",
            name: "Missouri",
            title: "State:Missouri",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Montana",
            name: "Montana",
            title: "State:Montana",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Nebraska",
            name: "Nebraska",
            title: "State:Nebraska",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Nevada",
            name: "Nevada",
            title: "State:Nevada",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:New Hampshire",
            name: "New Hampshire",
            title: "State:New Hampshire",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:New Jersey",
            name: "New Jersey",
            title: "State:New Jersey",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:New Mexico",
            name: "New Mexico",
            title: "State:New Mexico",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:New York",
            name: "New York",
            title: "State:New York",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:North Carolina",
            name: "North Carolina",
            title: "State:North Carolina",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:North Dakota",
            name: "North Dakota",
            title: "State:North Dakota",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Ohio",
            name: "Ohio",
            title: "State:Ohio",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Oklahoma",
            name: "Oklahoma",
            title: "State:Oklahoma",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Oregon",
            name: "Oregon",
            title: "State:Oregon",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Pennsylvania",
            name: "Pennsylvania",
            title: "State:Pennsylvania",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Puerto Rico",
            name: "Puerto Rico",
            title: "State:Puerto Rico",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Rhode Island",
            name: "Rhode Island",
            title: "State:Rhode Island",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:South Carolina",
            name: "South Carolina",
            title: "State:South Carolina",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:South Dakota",
            name: "South Dakota",
            title: "State:South Dakota",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Tennessee",
            name: "Tennessee",
            title: "State:Tennessee",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Texas",
            name: "Texas",
            title: "State:Texas",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Utah",
            name: "Utah",
            title: "State:Utah",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Vermont",
            name: "Vermont",
            title: "State:Vermont",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Virginia",
            name: "Virginia",
            title: "State:Virginia",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Washington",
            name: "Washington",
            title: "State:Washington",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:West Virginia",
            name: "West Virginia",
            title: "State:West Virginia",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Wisconsin",
            name: "Wisconsin",
            title: "State:Wisconsin",
            parent: "Geography:National",
            type: "State"
          },
          {
            id: "State:Wyoming",
            name: "Wyoming",
            title: "State:Wyoming",
            parent: "Geography:National",
            type: "State"
          }
        ]
      }
    ]
  };
</script>

<div
  class="bg-white absolute flex flex-row items-stretch h-5/6 top-12 left-0
  right-0 border-2 shadow-xl"
  class:hidden={!visible}>
  <FilterCatcher bind:currentFilters />
  <FilterSection definition={channelsFilterDefinition} bind:currentFilters />
  <FilterSection definition={geographyFilterDefinition} bind:currentFilters />
</div>
