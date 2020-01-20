<style lang="scss">
    // button groups
    .bgroup {
        display: inline-flex;
        margin-bottom: 1rem;
        margin-right: 1rem;

        &._block {
            display: flex;
            width: 100%;
        }

        .m-button {
            flex: 1;
            @include border-radius(all, 0);

            // prettier-ignore
            & + & { margin-left: -1px; }
            // prettier-ignore
            &:first-child { @include border-radius(left); }
            // prettier-ignore
            &:last-child { @include border-radius(right); }
        }
    }
</style>

<article>
    <h1>Button group</h1>

    <div class="bgroup">
        <button class="m-button _line">One</button>
        <button class="m-button _line">Two</button>
        <button class="m-button _line">Three</button>
    </div>

    <div class="bgroup">
        <button class="m-button _line _primary">One</button>
        <button class="m-button _line _primary">Two</button>
        <button class="m-button _line _primary">Three</button>
    </div>

    <div class="bgroup">
        <button class="m-button _line _harmful">One</button>
        <button class="m-button _line _harmful">Two</button>
        <button class="m-button _line _harmful">Three</button>
    </div>

    <div class="bgroup">
        <button class="m-button _fill">One</button>
        <button class="m-button _fill">Two</button>
        <button class="m-button _fill">Three</button>
    </div>

    <div class="bgroup">
        <button class="m-button _fill _primary">One</button>
        <button class="m-button _fill _primary">Two</button>
        <button class="m-button _fill _primary">Three</button>
    </div>

    <div class="bgroup">
        <button class="m-button _fill _harmful">One</button>
        <button class="m-button _fill _harmful">Two</button>
        <button class="m-button _fill _harmful">Three</button>
    </div>

    <div class="bgroup _block">
        <button class="m-button _line">Full</button>
        <button class="m-button _line">Width</button>
        <button class="m-button _line">Block</button>
    </div>
</article>
