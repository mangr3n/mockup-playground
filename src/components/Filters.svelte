<script>
    import classnames from './utils';
    let className = '';
    export { className as class };

    $: classes = classnames(
        className,
        'navbar'
    );
</script>
<style>
    :global(.navbar) {
        @apply w-full bg-blue-100 absolute h-12 leading-10 top-0 right-0 left-0;
    }
</style>

<nav {...$$restProps} class={classes} >
</nav>