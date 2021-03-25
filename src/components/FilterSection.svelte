<script>

export let definition;
export let currentFilters = [];

// Is the filter in the current filters.
const isShowing = (filter, currentFilters) => {
  // Get the array of items that match the filter from the items in currentfilters.
  const result = currentFilters.filter((item) => item.id == filter)
  return result.length > 0;
};

// Should I show in my list for toggling?
const shouldShow = (filter,currentFilters) => {
  // If I don't have a parent filter then draw me
  if (!filter.parent) return true;
  // If my parent is showing draw me
  if (isShowing(filter.parent, currentFilters)) return true;
  
  // Get my Type
  const myFilteredTypes =  definition.filterTypes.filter(item => {
    return filter.type == item.type;
  });
  // Find my Type'sParentType
  const parentType = myFilteredTypes[0].parent;

  // If no other filter of my parent's type is showing, then draw me.  
  // ("All Channels" means "All-Subchannels")
  // (Any "Channel" not my parent, means don't draw me...)
  if (currentFilters.filter(item => item.type == parentType).length == 0) return true;
  // Otherwise, don't draw me.
  return false;
}

const toggleFilter = (filter, currentFitlers, event) => {
  console.log("FilterChannels/toggleFilter", event);
  if (event.target.checked) {
    return [...currentFilters,filter];
  } else {
    return currentFilters.filter( item => {
      return item !== filter;
    });
  }
};

$: console.log("FilterChannels/currentFilters: ",currentFilters);




</script>

<style>
  .filter-section {
    @apply w-1/6 inline-flex flex-col align-top justify-start content-start border-r-2 border-coolGray-500 select-none overflow-x-auto;
  }

  .filter-container {
    @apply w-3/4 place-self-center;
  }

  .filter-title-container {
    @apply grid justify-items-stretch mb-8 py-4 px-14 z-40 border-b-2 border-coolGray-200 absolute bg-white;
  }

  .filter-title-format {
    @apply justify-self-center font-bold uppercase text-base;
  }

  .filters-margin {
    @apply mt-20;
  }

  .filter-buttons-section {
    @apply py-5 overflow-x-auto;
  }

  .filter-subtitle {
    @apply mb-5 border-b-2 border-coolGray-200 px-3 font-bold;
  }

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

<div
  class="filter-section">

  <div class="filter-container">
    
    <!-- START: Filter Title -->
    <div class="filter-title-container">
      <div class="filter-title-format">
        {definition.name}
      </div>
    </div>
    <!-- END: Filter Title -->

    <!-- Added margin to top of filters so title doesn't appear over the filters -->
    <div class="filters-margin">

    {#each definition.sections as section}

    <!-- Filter Buttons Section -->
    <div class="filter-buttons-section">

      <!-- Sub Title (if needed) -->
      <div class="filter-subtitle">
        <span>{section.name}</span>
      </div>


      {#if currentFilters !== null}
        {#each section.filters as filter, name}
          {#if !filter.default && shouldShow(filter,currentFilters)}
          <label class="container" title={filter.title}> {filter.name}
            <input type="checkbox" checked={isShowing(filter.id, currentFilters)} on:input={(value) => currentFilters = toggleFilter(filter,currentFilters, value)}/>
            <span class= "checkmark" />
          </label>
          {/if}
        {/each}
      {/if}
      </div>
      {/each}
    <!-- Filter Buttons Channel -->
    </div>
  </div>
</div>

