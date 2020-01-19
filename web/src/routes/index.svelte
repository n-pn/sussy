<style lang="scss">
    h1,
    p {
        text-align: center;
        margin: 0 auto;
    }

    h1 {
        @include screen-min(sm) {
            font-size: 4em;
            line-height: 1;
        }
    }

    p {
        margin: 1em auto;
    }
</style>

<svelte:head>
    <title>Sapper project template</title>
</svelte:head>

<div class="m-typo u-bg-white u-t-gray-9 u-pt-3">
    <h1 class="u-pb-4">Great success!</h1>

    <p class="t-danger-2">
        <strong>
            Try editing this file (
            <code>src/routes/index.svelte</code>
            ) to test live reloading.
        </strong>
    </p>
</div>
