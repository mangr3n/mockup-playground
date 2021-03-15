<script>
    import classnames from './utils';
    let className = '';
    export { className as class };

    $: classes = classnames(
        className,
        'w-full',
        'bg-red-300',
        'relative',
        'h-12',
        'leading-12',
        'top-0',
        'right-0',
        'left-0',
    );
</script>
<style>
    :global(.navbar) {
        @apply w-full bg-red-300 absolute h-12 leading-12
    }
</style>

<nav {...$$restProps} class={classes} >
<slot/>
</nav>