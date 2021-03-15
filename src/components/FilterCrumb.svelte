<script>
export let crumb = null;
</script>
<style>
  span {
    @apply p-2 text-white;
  }
</style>

<span title={crumb.title}>{crumb.label}</span>