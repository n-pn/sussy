<script>
    // import MIcon from '$melte/MIcon.svelte'

    const colors = [
        'gray',
        'red',
        'orange',
        'yellow',
        'green',
        'teal',
        'blue',
        'indigo',
        'purple',
        'pink',
    ]
    const styles = ['text', 'line', 'solid', 'raise']
    const sizes = ['tiny', 'small', 'medium', 'large', 'huge']
    // your script goes here
</script>

<style type="text/scss">
    .button-list {
        // display: block;
        display: flex;
        // justify-content: space-around;

        .m-button + .m-button {
            margin-left: 1rem;
        }

        &._color .m-button {
            width: 6rem;
        }
    }
</style>

<article>
    <h1>Buttons</h1>

    <hr />

    <h2>Button sizes</h2>

    <div class="button-list">
        {#each sizes as size}
            <button class="m-button _{size}">{size}</button>
        {/each}
    </div>

    <hr />

    <h2>Button widths</h2>

    <div class="button-list">
        <button class="m-button _narrow">Narrow button</button>
        <button class="m-button _normal">Normal button</button>
        <button class="m-button _widely">Widely button</button>
    </div>

    <div class="button-list">
        <button class="m-button _block">Button block</button>
    </div>

    <hr />

    <h2>Button styles</h2>

    <div class="button-list">
        <button class="m-button _cicle">
            <i class="m-icon _feather" />
        </button>
        {#each styles as style}
            <button class="m-button _{style}">{style}</button>
        {/each}
    </div>

    <hr />

    <h2>Button variants</h2>

    {#each styles as style}
        <div class="button-list">
            <button class="m-button _{style} _default">Default</button>
            <button class="m-button _{style} _primary">Primary</button>
            <button class="m-button _{style} _success">Success</button>
            <button class="m-button _{style} _harmful">Harmful</button>
            <button class="m-button _{style} _disable">Disable</button>
            <a href="/" class="m-button _{style}">Link</a>
        </div>
    {/each}

    <hr />

    <h2>Button colors</h2>

    {#each colors as color}
        <div class="button-list _color">
            {#each styles as style}
                <button class="m-button _{style} _{color}">{color}</button>
            {/each}
        </div>
    {/each}

    <hr />

</article>
