<script>
let filterDefinition = {
  name: "Channels",
  filters: [
    { name: "All Channels", default: true, title: "Select a Channel to filter Channels", type: "Channel"},
    { name: "Commercial", default: false, title: "Channel: Commercial", type: "Channel"},
    { name: "Employer", default: false, title: "Channel: Employer", type: "Channel"},
    { name: "Government", default: false, title: "Channel: Governement", type: "Channel"},
    { name: "Medicare", default: false, title: "Channel: Medicare", type: "Channel"},
    { name: "Medicaid", default: false, title: "Channel: State Medicaid", type: "Channel"}
  ]
};

</script>

<div
  class="w-1/6 inline-flex flex-col align-top justify-start content-start
  border-r-2 border-black">
  <div class="font-bold uppercase mb-2 p-4 border-b-2 border-black">
    {filterDefinition.name}
  </div>
  <span class="p-4">
    {#each filterDefinition.filters as filter}
      {#if !filter.default}
      <label class="container" title={filter.title}>{filter.name}
        <input type="checkbox" />
        <span class= "checkmark" />
      </label>
      {/if}
    {/each}
  </span>
</div>

<style>
  .container {
    @apply block flex flex-col relative pl-8 mb-4 cursor-pointer text-base select-none items-center;
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