<script>
    import Nav from '../components/Nav.svelte'

    export let segment
</script>

<style lang="scss">
    :global(#sapper) {
        height: 100%;
        padding-top: 3rem;
    }

    main {
        position: relative;
        max-width: 56em;
        padding: 1em;
        margin: 1rem auto;
        box-sizing: border-box;
        background: white;
        @include border-radius();
        @include box-shadow(2);
    }
</style>

<Nav {segment} />

<main>
    <slot />
</main>
