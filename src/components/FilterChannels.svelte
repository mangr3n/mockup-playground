<script>

export let currentFilters = [];

// Is the filter in the current filters.
const isShowing = (filter) => {
  // Get the array of items that match the filter from the items in currentfilters.
  const result = currentFilters.filter((item) => item.id == filter.id)
  return result.length > 0;
};

// Should I show in my list for toggling?
const shouldShow = (filter,currentFilters) => {
  // Do I have a parent?
  if (filter.parent) {
    if (isShowing(filter.parent)) {
      return true;
    } else {
      return currentFilters.filter(item => item.type == filter.type).length == 0;
      // Does my filter type have a parent?
      if (filterType.parent) {
        // Is the default for my parent type showing?
        return isShowing(defaults[parent]);
      }
    }
  } else {
    return true;
  }
}

const toggleFilter = (filter, event) => {
  console.log("FilterChannels/toggleFilter", event);
  if (event.target.checked) {
    currentFilters = [...currentFilters,filter];
  } else {
    currentFilters = currentFilters.filter( item => {
      return item !== filter;
    });
  }
};

$: console.log("CurrentFilters: ",currentFilters);

let filterTypes = [
  { type: "Channel" },
  { type: "Sub-Channel", parent: "Channel" }
]

let defaults = {
  "Channel": { name: "All Channels", default: true, title: "Select a Channel to filter Channels", type: "Channel"},
  "Sub-Channel": { name: "All Sub-Channels", default: true, title: "Select a Sub-Channel to filter Sub-Channels", type: "Sub-Channel"}
}
let filterDefinition = {
  name: "Channels",
  sections: [
    {
      name: 'Channel',
      filters: [
        { name: "All Channels", default: true, title: "Select a Channel to filter Channels", type: "Channel"},
        { id: "Channel:Commercial", name: "Commercial", default: false, title: "Channel: Commercial", type: "Channel"},
        { name: "Employer", default: false, title: "Channel: Employer", type: "Channel"},
        { name: "Government", default: false, title: "Channel: Governement", type: "Channel"},
        { name: "Medicare", default: false, title: "Channel: Medicare", type: "Channel"},
        { name: "Medicaid", default: false, title: "Channel: State Medicaid", type: "Channel"}
      ]
    },
    {
      name: 'Sub-Channel',
      filters: [
        { name: "All Sub-Channels", default: true, title: "Select a Sub-Channel to filter Sub-Channels", type: "Sub-Channel"},
        { name: "Commercial", default: false, title: "Sub-Channel: Commercial", type: "Sub-Channel", parent: "Channel:Commercial"},
      ]
    }
  ]
};

</script>

<div
  class="w-1/6 inline-flex flex-col align-top justify-start content-start
  border-r-2 border-coolGray-500 select-none">

  <div class="w-3/4 place-self-center">

    <!-- START: Filter Title -->
    <div class="grid justify-items-stretch mb-8 mx-8 p-4 border-b-2 border-coolGray-200">
      <div class="justify-self-center font-bold uppercase text-base">
        {filterDefinition.name}
      </div>
    </div>
    <!-- END: Filter Title -->

    {#each filterDefinition.sections as section}

    <!-- Filter Buttons Channel -->
    <div class="py-5">

      <!-- Sub Title (if needed) -->
      <div class="mb-5 border-b-2 border-coolGray-200 px-3">
        <span class="font-bold">{section.name}</span>
      </div>


      {#each section.filters as filter}
        {#if !filter.default && shouldShow(filter,currentFilters)}
        <label class="container" title={filter.title}>{filter.name}
          <input type="checkbox" on:input={(value) => toggleFilter(filter,value)}/>
          <span class= "checkmark" />
        </label>
        {/if}
      {/each}
      </div>
      {/each}
    <!-- Filter Buttons Channel -->
  </div>
</div>

<style>
  .container {
    @apply block relative pl-8 mb-4 cursor-pointer text-base select-none items-center;
  }

  .container input {
    @apply absolute opacity-0 cursor-pointer h-0 w-0;
  }

  .checkmark {
    @apply absolute top-0 left-0 h-5 w-5 border-2 border-gray-200 rounded;
  }

  .container:hover input ~ .checkmark {
    @apply bg-gray-300;
  }

  .container input:checked ~ .checkmark {
    @apply bg-blue-400;
  }

  /* create the checkmark (hidden) */
  .checkmark:after {
    content: "";
    @apply absolute hidden;
  }

  /* Show checkmark when checked */
  .container input:checked ~ .checkmark:after {
    @apply block;
  }

  /* Style the checkmark*/
  .container .checkmark:after {
    @apply left-1 top-0.5 w-1.5 h-2.5 border-white transform rotate-45;
    border-width: 0 2px 2px 0;
  }
</style>