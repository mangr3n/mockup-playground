<script>
export let filter = null;
</script>
<style>
  span {
    @apply p-2 text-white;
  }
</style>

<span class="select-none" title={filter.title}>{filter.name}</span>