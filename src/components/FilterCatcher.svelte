<script>
import FilterTag from './FilterTag.svelte'
  export let crumbs = [
    {label: "All Plans"}
  ];

  const removeCrumb = (event) => {
    crumbs = crumbs.filter((value,x,y) => {
      console.log("inFilter",{value,x,y, detail:event.detail, same: value == event.detail});
      if (value == event.detail) {
        return false;
      }
      return true;
    });
    console.log("removeCrumb: ",event, crumbs);
    
  }
</script>

<div class="w-1/6 h-full flex flex-row flex-wrap align-top justify-start content-start p-4 border-r-2 border-black">
  {#each crumbs as crumb }
  <FilterTag {crumb} on:removeCrumb={removeCrumb}/>
  {/each}
</div>