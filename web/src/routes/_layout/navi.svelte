<script context="module">
    import posts from '../examples/_posts.js'
</script>

<script>
    export let segment

    function active_page(evt) {
        const target = evt.target
        console.log(evt)
    }
</script>

<style lang="scss">
    nav {
        position: fixed;
        width: 16rem;
        max-width: 100vw;
        top: 0;
        left: 0;
        bottom: 0;

        box-shadow: 2px 0 6px rgba(#000, 0.06);
        @include bgcolor(primary, 7);
    }

    a {
        display: block;
        margin: 0 0.75rem;
        line-height: 1.5rem;
        padding: 0.375rem 0.75rem;
        text-decoration: none;
        @include color(neutral, 2);

        border-radius: 3px;
        border: 0;

        &._active {
            @include color(primary, 2);
        }

        &:hover {
            background-color: rgba(color(primary, 4), 0.2);
        }
    }

    h3 {
        display: block;
        text-transform: uppercase;
        font-size: rem(14);
        padding: 1rem 1rem 0.5rem;
        @include color(neutral, 4);
    }
</style>

<nav on:click={active_page}>
    <a class:_active={segment === undefined} href=".">MELTE</a>

    <a href="typography">Typography</a>
    <a href="cheatsheet">Variables</a>
    <a href="utilities">Utilities</a>

    <h3>Components</h3>
    <a href="molds/icons">Icons</a>
    <a href="molds/buttons">Buttons</a>
    <a href="molds/inputs">Inputs</a>
    <a href="molds/chips">Chips</a>
    <a href="molds/badges">Badges</a>
    <a href="molds/cards">Cards</a>
    <a href="molds/menus">Menus</a>
    <a href="molds/tables">Tables</a>
    <a href="molds/dialogs">Dialogs</a>
    <a href="molds/tooltips">Tooltips</a>

    <h3>Examples</h3>
    <a class:_active={segment === 'about'} href="about">About</a>
    {#each posts as post}
        <a rel="prefetch" href="examples/{post.slug}">{post.title}</a>
    {/each}
</nav>
