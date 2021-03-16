<script>
export let crumb = null;
</script>
<style>
  span {
    @apply p-2 text-white;
  }
</style>

<span class="select-none" title={crumb.title}>{crumb.label}</span>