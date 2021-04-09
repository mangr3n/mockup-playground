<script>
export let filter = null;
</script>
<style>
  span {
    @apply p-2 text-white;
    @apply select-none;
  }
</style>

<span title="{filter.title}: {filter.id}">{filter.name}</span>